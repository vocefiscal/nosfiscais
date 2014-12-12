Template.pollTapeSubmissionVerify.helpers({
  isPollTape: function () {
    var formId = 'insertPollTapeVerificationForm';
    var isPollTape = AutoForm.getFieldValue(formId, 'isPollTape');
    return isPollTape;
  },
  isPollTapeAndCompleteAndReadable: function () {
    var formId = 'insertPollTapeVerificationForm';
    var isPollTape = AutoForm.getFieldValue(formId, 'isPollTape');
    var isReadable = AutoForm.getFieldValue(formId, 'isReadable');
    var isComplete = AutoForm.getFieldValue(formId, 'isComplete');
    return isPollTape && isComplete && isReadable;
  }
});
