Template.locatorItem.helpers({
  emptyZonesStats: function () {
    var locator = Locators.findOne(this._id);
    var cnt = locator.emptyZonesCount;
    var avg = locator.monitorsCount() / locator.zonesCount;
    return cnt ? 'faltam ' + cnt : parseFloat(Math.round(avg * 10) / 10).toFixed(1) + ' por zona'
  }
});
