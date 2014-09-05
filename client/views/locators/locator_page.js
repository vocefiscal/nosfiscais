Template.locatorPage.events({
  'click .monitorable': function(e) {
    e.preventDefault();
    var currentLocator = this;
    Meteor.call('monitor', currentLocator._id);
  },
  'click .unmonitorable': function(e) {
    e.preventDefault();
    var currentLocator = this;
    Meteor.call('unmonitor', currentLocator._id);
  },
  'mouseenter .unmonitorable': function(e) {
    e.preventDefault();
    $(e.target).removeClass().
      addClass("unmonitorable btn btn-danger btn-block").
      text("Parar de adotar");
  },
  'mouseleave .unmonitorable': function(e) {
    e.preventDefault();
    $(e.target).removeClass().
    addClass("unmonitorable btn btn-primary btn-block").
    text("Você adotou esta zona");
  }
});
