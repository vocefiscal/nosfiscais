Template.home.helpers({
  monitorsCount: function () {
    return _(Locators.findStates().fetch()).reduce(
      function (sum, state) { return sum + state.monitorsCount(); }, 0);
  }
});
