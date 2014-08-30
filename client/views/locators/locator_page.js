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
  }
});
