Template.teleport.onRendered(function () {
  const destination = this.data.destination || document.body;
  this.teleported = Blaze.render(this.view.templateContentBlock, destination);
});

Template.teleport.onDestroyed(function () {
  Blaze.remove(this.teleported);
});
