Template.Teleport.onRendered(function () {
  let parentNode = document.body;

  if (this.data && this.data.destination) {
    if (this.data.destination instanceof Element) { // We accept Elements
      parentNode = this.data.destination;
    } else if (typeof this.data.destination === 'string') { // We also accept selectors
      parentNode = document.querySelector(this.data.destination);
      if (!parentNode) throw new Error(`Teleport destination not found: ${this.data.destination}`);
    } else {
      throw new Error('Teleport destination must be an instance of Element or a CSS Selector');
    }
  }

  this.teleported = Blaze.render(this.view.templateContentBlock, parentNode);
});

Template.Teleport.onDestroyed(function () {
  Blaze.remove(this.teleported);
});
