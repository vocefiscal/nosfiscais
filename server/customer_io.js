// Add new users to Customer.io so they can be contacted by email
Accounts.onCreateUser(function (options, user) {
  var cio = CustomerIo.init(Meteor.settings.customerIo.siteId,
    Meteor.settings.customerIo.apiKey);

  cio.identify(user._id, user.emails[0].address);
  user.customerIo = { isIdentified: true };
  // We still want the default hook's 'profile' behavior.
  if (options.profile)
    user.profile = options.profile;
  return user;
});
