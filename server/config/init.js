Meteor.startup(function () {
  if (Meteor.settings.mailUrl) {
    process.env.MAIL_URL = Meteor.settings.mailUrl;
  }
});
