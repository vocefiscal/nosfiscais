Users = {
  monitoredLocators: function (userId) {
    var user = Meteor.users.findOne(userId);
    return Locators.find(
      { _id: { $in: user && user.monitored_locator_ids || [] } },
      { sort: { shortName: 1 } }).fetch();
  },
  monitoredLocator: function (userId) {
    return Users.monitoredLocators(userId)[0];
  }
};
