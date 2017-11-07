Template.teleport.onRendered(function () {
  this.teleported = Blaze.render(this.view.templateContentBlock, document.body);
});

Template.teleport.onDestroyed(function () {
  Blaze.remove(this.teleported);
});
