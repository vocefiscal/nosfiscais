Meteor.startup(function () {
  Tracker.autorun(function () {
    Meteor.subscribe("userData");
  });
});
