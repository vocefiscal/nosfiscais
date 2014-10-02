Template.locatorItem.helpers({
  emptyZonesStats: function () {
    var locator = this;
    var cnt = locator.emptyZonesCount;
    var avg = locator.monitorsCount() / locator.zonesCount;
    return cnt ? 'faltam ' + cnt : avg.toString() + ' por zona'
  }
});
