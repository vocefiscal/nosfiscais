Template.monitoredLocatorNavBar.helpers({
  monitoredLocator: function () {
    return Meteor.userId() && Users.monitoredLocator(Meteor.userId());
  }
});

Template.monitoredLocatorNavBar.rendered = function () {
  this.autorun(function () {
    var user = Meteor.user();
    if (user && user.monitored_locator_ids && user.monitored_locator_ids.length) {
      Meteor.subscribe('locators', user.monitored_locator_ids);
    }
  });
};
