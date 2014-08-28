// A Locator class that takes a document in its constructor
Locator = function (doc) {
  _.extend(this, doc);
};

_.extend(Locator.prototype, {
  children: function () {
    return Locators.find({ _id: { $in: this.childrenIds } },
     { sort: { slug: 1 } }).fetch();
  },
  parent: function () {
    return Locators.findOne(this.parentId);
  }
});

// Define a Collection that uses Locator as its document
Locators = new Meteor.Collection("locators", {
  transform: function (doc) { return new Locator(doc); }
});
