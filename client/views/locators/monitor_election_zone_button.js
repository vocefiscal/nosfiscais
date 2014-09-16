Template.monitorElectionZoneButton.helpers({
  monitoringDifferentLocator: function () {
    return Meteor.userId() && Users.monitoredLocator(Meteor.userId()) &&
      Users.monitoredLocator(Meteor.userId())._id !==
        this._id;
  }
});
