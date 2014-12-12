PollTapeVerifications = new Mongo.Collection("pollTapeVerifications");

var requiredIfValidSubmission = {
  optional: true,
  custom: function () {
    if ((! this.isSet) &&
      this.field('isPollTape').value &&
      this.field('isReadable').value &&
      this.field('isComplete').value) {
      return "required";
    }
  }
}

PollTapeVerifications.attachSchema(new SimpleSchema({
  // Force value to be current date (on server) upon insert
  // and prevent updates thereafter.
  createdAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return { $setOnInsert: new Date() };
      } else {
        return undefined;
      }
    }
  },
  // Force value to be current date (on server) upon update
  // and set it upon insert.
  updatedAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert || this.isUpdate || this.isUpsert) {
        return new Date();
      } else {
        return undefined;
      }
    }
  },

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
  isPollTape: {
    type: Boolean,
    label: "1. As fotos são de um Boletim de Urna (BU)?"
  },
  isComplete: {
    type: Boolean,
    label: "2. O BU está completo?",
    optional: true,
    custom: function () {
      if ((! this.isSet) &&
        this.field('isPollTape').value) {
        return "required";
      }
    }
  },
  isReadable: {
    type: Boolean,
    label: "3. O BU está todo legível?",
    optional: true,
    custom: function () {
      if ((! this.isSet) &&
        this.field('isPollTape').value &&
        this.field('isComplete').value) {
        return "required";
      }
    }
  },
  isSigned: _({
    type: Boolean,
    label: "4. O BU está assinado?"
  }).extend(requiredIfValidSubmission),
  electionRound: _({
    type: Number,
    label: "5. Turno:",
    min: 1,
    max: 2
  }).extend(requiredIfValidSubmission),
  electionZone: _({
    type: Number,
    label: "6. Zona eleitoral:",
    min: 0,
    max: 9999
  }).extend(requiredIfValidSubmission),
  electoralSection: _({
    type: Number,
    label: "7. Seção eleitoral:",
    min: 0,
    max: 9999
  }).extend(requiredIfValidSubmission),
  isHonorCoded: _({
    type: Boolean,
    label: 'Você conferiu as fotos ao lado com a ' +
    'versão oficial do BU no site do TSE? Por favor, responda honestamente.'
  }).extend(requiredIfValidSubmission),
  isAnythingDifferentFromOfficial: {
    type: Boolean,
    label: "As informações contidas nas fotos diferem de alguma forma das " +
      "informações contidas na versão oficial do TSE?",
    optional: true,
    custom: function () {
      if (
        (! this.isSet) &&
        this.field('isPollTape').value &&
        this.field('isComplete').value &&
        this.field('isReadable').value &&
        this.field('isHonorCoded').value
      ) {
        return "required";
      }
    }
  },
  comments: {
    type: String,
    label: "Observações/detalhes:",
    optional: true,
    min: 0,
    max: 9999,
    optional: true,
    custom: function () {
      if (
        (! this.isSet) &&
        this.field('isPollTape').value &&
        this.field('isComplete').value &&
        this.field('isReadable').value &&
        this.field('isHonorCoded').value &&
        this.field('isAnythingDifferentFromOfficial').value
      ) {
        return "required";
      }
    }
  }
}));
