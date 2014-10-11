// Copied from https://github.com/meteorhacks/meteor-customer-io/blob/master/lib/server.js
var request = Npm.require('request');

CustomerIo = function (siteId, apiToken) {
  this.siteId = siteId;
  this.apiToken = apiToken;
  this.endPoint = 'https://track.customer.io/api/v1/customers';
}

CustomerIo.prototype.identify = function(id, email, created_at, properties,
  callback) {
  properties = (properties)? _.clone(properties) : {};
  properties.email = email;
  properties.created_at = created_at;
  var url = this.endPoint + "/" + id;
  request.put(url, {
    auth: this._getAuth(),
    headers: this._getHeaders(),
    json: properties
  }, callback);
};

CustomerIo.prototype.identifyUser = function(user, properties, callback) {
  properties = (properties)? _.clone(properties) : {};
  var id = user._id;
  properties.email = user.emails[0].address;
  properties.created_at = Math.floor(user.createdAt.getTime() / 1000);
  properties.nosfiscais_verified = user.emails[0].verified;
  var url = this.endPoint + "/" + id;
  request.put(url, {
    auth: this._getAuth(),
    headers: this._getHeaders(),
    json: properties
  }, callback);
};

CustomerIo.prototype.delete = function(id, callback) {
  var url = this.endPoint + "/" + id;
  request.del(url, {
    auth: this._getAuth(),
    headers: this._getHeaders()
  }, callback);
};

CustomerIo.prototype.track = function(id, name, data, callback) {
  var payload = {
    name: name,
    data: data
  };
  var url = this.endPoint + "/" + id + "/events";
  request.post(url, {
    auth: this._getAuth(),
    headers: this._getHeaders(),
    json: payload
  }, callback);
};

CustomerIo.prototype._getAuth = function() {
  return {
    user: this.siteId,
    pass: this.apiToken
  };
};

CustomerIo.prototype._getHeaders = function() {
  return {
    'Content-Type': "application/json"
  };
};

CustomerIo.init = function(siteId, apiToken) {
  var cio = new CustomerIo(siteId, apiToken);
  return cio;
};
// END copied block from: https://github.com/meteorhacks/meteor-customer-io/blob/master/lib/server.js

Accounts.onLogin(function (attemptInfo) {
  var cio = CustomerIo.init(Meteor.settings.customerIo.siteId,
    Meteor.settings.customerIo.apiKey);
  cio.identifyUser(attemptInfo.user, { _last_visit:
    Math.floor(new Date().getTime() / 1000) });
})

Accounts.onCreateUser(function (options, user) {
  // Add new users to Customer.io so they can be contacted by email
  var cio = CustomerIo.init(Meteor.settings.customerIo.siteId,
    Meteor.settings.customerIo.apiKey);
  // If user had been created from the newsletter form with their email
  // as the ID, we need to remove them first to avoid duplicate emails
  cio.delete(user.emails[0].address);
  cio.identifyUser(user);
  user.customerIo = { isIdentified: true };

  // We still want the default hook's 'profile' behavior.
  if (options.profile)
    user.profile = options.profile;
  return user;
});
