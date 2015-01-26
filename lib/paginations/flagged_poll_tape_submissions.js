FlaggedPollTapeSubmissions = {};
Meteor.startup(function () {
  FlaggedPollTapeSubmissions = new Meteor.Pagination(PollTapeSubmissions, {
    router: "iron-router",
    homeRoute: "/relatorios/bus-marcados-para-revisao/",
    route: "/relatorios/bus-marcados-para-revisao/",
    routerLayout: "layout",
    routerTemplate: "flaggedPollTapeSubmissions",
    templateName: "flaggedPollTapeSubmissions",
    itemTemplate: "flaggedPollTapeSubmissionItem",
    filters: { flaggedCount: { $gt: 0 } },
    sort: {
      flaggedCount: -1
    },
    perPage: 1
  });
});
