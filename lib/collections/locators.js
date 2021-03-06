// Take a slug like 'se/sp/campinas' and return an array with
// ['se', 'se/sp', 'se/sp/campinas']
var allPrefixSlugsFrom = function (slug) {
  var initialContext = { prefixes: [], lastPath: null };
  return _(slug.split('/')).reduce(
    function (context, segment) {
      var newPath = context.lastPath ?
        context.lastPath + '/' + segment : segment;
      context.lastPath = newPath;
      context.prefixes.push(newPath);
      return context;
    }, initialContext).prefixes;
};

// A Locator class that takes a document in its constructor
Locator = function (doc) {
  _.extend(this, doc);
};

_.extend(Locator.prototype, {
  children: function () {
    return Locators.find({ _id: { $in: this.childrenIds } },
     { sort: { shortName: 1 } });
  },
  parentLocator: function () {
    return Locators.findOne(this.parentId);
  },
  // The 'all' prefix is to emphasize that it's all ancestors including
  // the callee itself
  allAncestorSlugs: function () {
    var self = this;
    return allPrefixSlugsFrom(self.slug);
  },
  allAncestors: function () {
    var self = this;
    return Locators.find({ slug: { $in: self.allAncestorSlugs() } },
     { sort: { slug: 1 } }).fetch();
  },
  lastSlugSegment: function () {
    var self = this;
    return self.slug.split('/').slice(-1)[0];
  },
  shortNameLowerCase: function () {
    var self = this;
    return self.shortName.toLowerCase();
  },
  isState: function () {
    var self = this;
    var slugSegments = self.slug.split('/');
    return slugSegments.length == 2;
  },
  isCity: function () {
    var self = this;
    var slugSegments = self.slug.split('/');
    return slugSegments.length == 3;
  },
  isElectionZone: function () {
    return this.electionZone !== undefined;
  },
  isAlreadyMonitored: function () {
    var self = this;
    var user = Meteor.user();
    return user && _.include(user.monitored_locator_ids, self._id);
  },
  hasState: function () {
    return this.stateCode !== undefined;
  },
  hasCity: function () {
    return this.city !== undefined;
  },
  monitorsCount: function () { return this.monitors_count || 0; }
});

// Define a Collection that uses Locator as its document
Locators = new Meteor.Collection("locators", {
  transform: function (doc) { return new Locator(doc); }
});

// Add index to MongoDB. We use slugs interchangeably with ids for locators.
if (Meteor.isServer) {
  Meteor.startup(function () {
    Locators._ensureIndex({ slug: 1 }, { unique: 1 });
  });
}

// FIXME: when there's internet again, see if this is the idiomatic way to
// define collection helpers
Locators.allPrefixSlugsFrom = allPrefixSlugsFrom;

// matches stuff like 'xx/sp'
Locators.statesSlugRegExpStr = '^[a-z]+\/[a-z]+$';

Locators.findStates = function () {
  return Locators.find(
    { slug: { $regex: Locators.statesSlugRegExpStr } },
    { sort: { shortName: 1 } });
};
