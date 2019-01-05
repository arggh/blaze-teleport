/* eslint-env mocha */
import { Template } from 'meteor/templating';
import { assert } from 'meteor/practicalmeteor:chai';
import { withRenderedTemplate } from './helpers.tests';
import './teleport.tests.html';

const isBeamed = (oldTarget, newTarget, selector) => {
  assert.equal($(oldTarget).find(selector).length, 0)
  assert.equal($(newTarget).find(selector).length, 1)
}

describe('teleport to render destination', function () {

  beforeEach(function () {
    Template.registerHelper('_', key => key);
  });

  afterEach(function () {
    Template.deregisterHelper('_');
  });

  it ('renders a Template with a given target node as destination', function (done) {
    // let's append a new div to the body
    // which will act as our render target
    const targetNode = $('<div>').prop('id', 'target-node')
    $('body').append(targetNode)

    // now let's beam the template to the target
    withRenderedTemplate('dest', {destination: targetNode.get(0)}, (el) => {
      isBeamed(el, '#target-node', '#test-target-id')
      done()
    })
  });

  it ('renders a Template with a given CSS selector as destination', function (done) {
    // let's create a div with a specific CSS class
    // and add it to the body
    const targetNode = $('<div>').addClass('target-node')
    $('body').append(targetNode)

    // now let's beam the template to the target by CSS selector
    withRenderedTemplate('dest', {destination: '.target-node'}, (el) => {
      isBeamed(el, '.target-node', '#test-target-id')
      done()
    })
  });

  it ('renders a Template in the document.body as default destination', function (done) {
    withRenderedTemplate('dest', {}, (el) => {
      isBeamed(el, 'body', '#test-target-id')
      done()
    })
  });
});
