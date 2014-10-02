Template.home.helpers({
  monitorsCount: function () {
    return _(Locators.findStates().fetch()).reduce(
      function (sum, state) { return sum + state.monitorsCount(); }, 0);
  },
  emptyZonesStats: function () {
    var states = Locators.findStates().fetch();
    var monitorsCount = _(states).reduce(
      function (sum, state) { return sum + state.monitorsCount(); }, 0);
    var emptyCount = _(states).reduce(
      function (sum, state) { return sum + state.emptyZonesCount; }, 0);
    var zonesCount = _(states).reduce(
      function (sum, state) { return sum + state.zonesCount; }, 0);
    var avg = monitorsCount / zonesCount;
    return emptyCount ? 'faltam ' + emptyCount : parseFloat(Math.round(avg * 10) / 10).toFixed(1) + ' por zona'
  }
});
