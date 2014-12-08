PollTapeVerifications = new Mongo.Collection("pollTapeVerifications");

var requiredIfValidSubmission = {
  optional: true,
  custom: function () {
    if (this.field('isReadable').value && this.field('isComplete').value) {
      return "required";
    }
  }
}

PollTapeVerifications.attachSchema(new SimpleSchema({
  // Force value to be current date (on server) upon insert
  // and prevent updates thereafter.
  // createdAt: {
  // type: Date,
  //   autoValue: function () {
  //     if (this.isInsert) {
  //       return new Date();
  //     } else if (this.isUpsert) {
  //       return { $setOnInsert: new Date };
  //     }
  //   }
  // },
  // // Force value to be current date (on server) upon update
  // // and set it upon insert.
  // updatedAt: {
  //   type: Date,
  //   autoValue: function () {
  //     if (this.isInsert || this.isUpdate) {
  //       return new Date();
  //     }
  //   }
  // },

  // The verification's userId refers to the user who did the verification, not
  // the user who submitted the poll tape pictures.
  userId: {
    type: String,
    index: 1
  },
  pollTapeSubmissionId: {
    type: String,
    index: 1
  },
  electionRound: _({
    type: Number,
    label: "Turno",
    min: 1,
    max: 2
  }).extend(requiredIfValidSubmission),
  electionZone: _({
    type: Number,
    label: "Zona eleitoral",
    min: 0,
    max: 9999
  }).extend(requiredIfValidSubmission),
  electoralSection: _({
    type: Number,
    label: "Seção eleitoral",
    min: 0,
    max: 9999
  }).extend(requiredIfValidSubmission),
  isReadable: {
    type: Boolean,
    label: "Está legível"
  },
  isComplete: {
    type: Boolean,
    label: "Está completo"
  }
}));
