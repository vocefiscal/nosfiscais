// A Locator class that takes a document in its constructor
Locator = function (doc) {
  _.extend(this, doc);
};

_.extend(Locator.prototype, {
  children: function () {
    return Locators.find({ _id: { $in: this.childrenIds } },
     { sort: { slug: 1 } }).fetch();
  },
  parentLocator: function () {
    return Locators.findOne(this.parentId);
  },
  isElectionZone: function () {
    return this.electionZone !== undefined;
  },
  monitorsCount: function () { return this.monitors_count || 0; }
});

// Define a Collection that uses Locator as its document
Locators = new Meteor.Collection("locators", {
  transform: function (doc) { return new Locator(doc); }
});

Meteor.methods({
  monitor: function(locatorId) {
    var user = Meteor.user();
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "Você precisa fazer login para adotar uma " +
        "zona eleitoral");
    var locator = Locators.findOne({ _id: locatorId,
      electionZone: { $exists: true } });
    if (!locator)
      throw new Meteor.Error(422, 'Zona eleitoral não encontrada');
    if (_.include(user.monitored_locator_ids, locator._id))
      throw new Meteor.Error(422, 'Você já adotou esta zona eleitoral');
    Meteor.users.update(user._id, {
      $addToSet: {monitored_locator_ids: locator._id,
        monitored_locator_slugs: locator.slug},
      $inc: {monitored_locators_count: 1}
    });
    // Denormalization: each node up the tree has the total monitors_count for
    // all election zones in its subtree
    var parentLocator = locator;
    while (parentLocator) {
      Locators.update(parentLocator._id, { $inc: { monitors_count: 1 } });
      parentLocator = parentLocator.parentLocator();
    }
  },
  unmonitor: function(locatorId) {
    var user = Meteor.user();
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "Você precisa fazer login para parar de " +
        "adotar uma zona eleitoral");
    var locator = Locators.findOne({ _id: locatorId,
      electionZone: { $exists: true } });
    if (!locator)
      throw new Meteor.Error(422, 'Zona eleitoral não encontrada');
    if (!_.include(user.monitored_locator_ids, locator._id))
      throw new Meteor.Error(422, 'Você não adotou esta zona eleitoral');
    Meteor.users.update(user._id, {
      $pullAll: {monitored_locator_ids: [ locator._id ],
        monitored_locator_slugs: [ locator.slug ]},
      $inc: {monitored_locators_count: -1}
    });
    // Denormalization: each node up the tree has the total monitors_count for
    // all election zones in its subtree
    var parentLocator = locator;
    while (parentLocator) {
      Locators.update(parentLocator._id, { $inc: { monitors_count: -1 } });
      parentLocator = parentLocator.parentLocator();
    }
  }
});
