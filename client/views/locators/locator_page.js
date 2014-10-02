Template.locatorPage.helpers({
  emptyZonesStats: function () {
    var locator = this;
    var cnt = locator.emptyZonesCount;
    var avg = locator.monitorsCount() / locator.zonesCount;
    return cnt ? 'faltam ' + cnt : parseFloat(Math.round(avg * 10) / 10).toFixed(1) + ' por zona'
  }
});

Template.locatorPage.events({
  'click .monitorable': function(e) {
    e.preventDefault();
    var currentLocator = this;
    if (Meteor.userId()) {
      Meteor.call('monitor', currentLocator._id);
    } else {
      $('.needs-login, #login-dropdown-list').fadeOut(300).fadeIn(300).
        fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
      return false;
    }
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
