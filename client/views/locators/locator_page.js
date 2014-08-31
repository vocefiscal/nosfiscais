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
    console.log(e.target);
    e.preventDefault();
    el = $(e.target).removeClass().addClass("unmonitorable btn btn-danger btn-block");
    console.log(el);
    el.text("Parar de adotar");
  },
  'mouseleave .unmonitorable': function(e) {
    console.log(e.target);
    e.preventDefault();
    el = $(e.target).removeClass().addClass("unmonitorable btn btn-primary btn-block");
    console.log(el);
    el.text("Você adotou esta zona");
  }
});
