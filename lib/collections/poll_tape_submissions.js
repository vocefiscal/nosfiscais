PollTapeSubmissions = new Mongo.Collection("pollTapeSubmissions");
PollTapeSubmissions.attachSchema(new SimpleSchema({
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
  verificationCount: {
    type: Number,
    autoValue: function () {
      if (this.isInsert) {
        return 0;
      }
    }
  },
  random: {
    type: Number,
    autoValue: function () {
      if (this.isInsert) {
        return Math.random();
      }
    },
    decimal: true
  },
  userEmail: {
    type: String,
    label: "Email",
    optional: true
  },
  electionRound: {
    type: Number,
    label: "Turno",
    min: 1,
    max: 2
  },
  stateCode: {
    type: String,
    label: "Estado",
    min: 2,
    max: 2
  },
  city: {
    type: String,
    label: "Cidade",
    min: 2,
    max: 200
  },
  cityCode: {
    type: Number,
    label: "Código do município",
    min: 0,
    max: 99999,
    optional: true
  },
  electionZone: {
    type: Number,
    label: "Zona eleitoral",
    min: 0,
    max: 9999
  },
  electionVenue: {
    type: Number,
    label: "Local de votação",
    min: 0,
    max: 9999
  },
  electoralSection: {
    type: Number,
    label: "Seção eleitoral",
    min: 0,
    max: 9999
  },
  pictureURLs: {
    type: [String],
    label: "Fotos"
  }
}));

if (Meteor.isServer) {
  PollTapeSubmissions._ensureIndex({ random: 1, verificationCount: 1 });
}
