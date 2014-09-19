// Write dummy data to S3 stats. Will be turned into
// code that writes actual data later.
if (false) {

PollTapeStats = new FS.Collection("s3PollTapeStats", {
  stores: [new FS.Store.S3("s3PollTapeStats", Meteor.settings.s3PollTapeStats)]
});

// fetch state abbreviations
var states = Locators.findStates().map(function (st) {
  return st.stateCode.toLowerCase();
});

// record dummy S3 stats data for each state
_(states).each(function (state) {
  var statsJson = JSON.stringify({
    "pollTapesCount": Math.floor((Math.random() * 100) + 1)
  });
  var statsBuffer = new Buffer(statsJson);
  var statsFile = new FS.File();
  statsFile.name('br/' + state + '/stats.json');
  statsFile.attachData(statsBuffer, { type: 'application/json' }, function () {
    PollTapeStats.insert(statsFile);
  });
});

}
