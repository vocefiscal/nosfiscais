Template.pollTapeSubmissionVerify.helpers({
  isPollTape: function () {
    var formId = 'insertPollTapeVerificationForm';
    var isPollTape = AutoForm.getFieldValue(formId, 'isPollTape');
    return isPollTape;
  },
  isPollTapeAndCompleteAndReadable: function () {
    var formId = 'insertPollTapeVerificationForm';
    var isPollTape = AutoForm.getFieldValue(formId, 'isPollTape');
    var isComplete = AutoForm.getFieldValue(formId, 'isComplete');
    var isReadable = AutoForm.getFieldValue(formId, 'isReadable');
    return isPollTape && isComplete && isReadable;
  },
  isValidAndCategorized: function () {
    // Nice curried shorthand function, getFieldValue
    var formId = 'insertPollTapeVerificationForm';
    var getFieldValue = function (field) {
      return AutoForm.getFieldValue(formId, field);
    }

    var fields = ['isPollTape', 'isComplete', 'isReadable', 'electionRound',
      'electionZone', 'electoralSection'];
    var values = _(fields).map(getFieldValue);
    var isValidAndCategorized = _(values).reduce(
      function (memo, bool) { return memo && bool; }, true);
    return isValidAndCategorized;
  },
  isHonorCoded: function () {
    var formId = 'insertPollTapeVerificationForm';
    var isHonorCoded = AutoForm.getFieldValue(formId, 'isHonorCoded');
    return isHonorCoded;
  },
  formElectionRound: function () {
    var formId = 'insertPollTapeVerificationForm';
    var electionRound = AutoForm.getFieldValue(formId, 'electionRound');
    return electionRound;
  },
  formElectionZone: function () {
    var formId = 'insertPollTapeVerificationForm';
    var electionZone = AutoForm.getFieldValue(formId, 'electionZone');
    return electionZone;
  },
  formElectoralSection: function () {
    var formId = 'insertPollTapeVerificationForm';
    var electoralSection = AutoForm.getFieldValue(formId, 'electoralSection');
    return electoralSection;
  },
  pollTapeVerificationStartedAt: function () {
    var currentPtsId = Meteor.user().currentPollTapeSubmissionForReviewId;
    var ptvStartedAt = Session.get(
      'pollTapeVerificationStartedAt-Date:userId-' + Meteor.userId() +
      ':pollTapeSubmissionId-' + currentPtsId);
    return ptvStartedAt;
  }
});
