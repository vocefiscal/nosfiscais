Template.locatorPage.helpers({
  isAlreadyMonitored: function() {
    var user = Meteor.user();
    return user && _.include(user.monitored_locator_ids, this._id);
  }
});

Template.locatorPage.events({
  'click .monitorable': function(e) {
    e.preventDefault();
    Meteor.call('monitor', this._id);
  },
  'click .unmonitorable': function(e) {
    e.preventDefault();
    Meteor.call('unmonitor', this._id);
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
