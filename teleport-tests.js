// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by teleport.js.
import { name as packageName } from "meteor/teleport";

// Write your tests here!
// Here is an example.
Tinytest.add('teleport - example', function (test) {
  test.equal(packageName, "teleport");
});
