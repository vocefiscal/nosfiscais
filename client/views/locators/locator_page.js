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
      html('Parar de adotar  <span class="glyphicon glyphicon-remove-circle pull-right"></span>');
  },
  'mouseleave .unmonitorable': function(e) {
    e.preventDefault();
    $(e.target).removeClass().
    addClass("unmonitorable btn btn-success btn-block").
    html('Você adotou esta zona  <span class="glyphicon glyphicon-heart pull-right"></span>');
  }
});
