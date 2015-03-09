Template.flaggedPollTapeSubmissionItem.events({
  'click .ok': function(e) {
    var value = this.oknok === true ? null : true;
    if (Meteor.userId()) {
      Meteor.call('oknok', this._id, value);
    }
    return true;
  },
  'click .nok': function(e) {
    var value = this.oknok === false ? null : false;
    if (Meteor.userId()) {
      Meteor.call('oknok', this._id, value);
    }
    return true;
  }
});

Template.flaggedPollTapeSubmissionItem.helpers({
  okActive: function () {
    return this.oknok === true ? 'active' : '';
  },
  nokActive: function () {
    return this.oknok === false ? 'active' : '';
  },
  oknokStatus: function () {
    if (this.oknok === true) {
      return "Confere com oficial.";
    } else if (this.oknok === false) {
      return "Não confere com oficial.";
    } else {
      return "Em andamento.";
    }
  }
});
