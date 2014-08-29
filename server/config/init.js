// We use underscore's template feature for email
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

function setupEmail() {
  if (Meteor.settings.mailUrl) {
    process.env.MAIL_URL = Meteor.settings.mailUrl;
  }

  Accounts.config({
    sendVerificationEmail: true
  });

  Accounts.emailTemplates.siteName = "Você Fiscal";
  Accounts.emailTemplates.from = "Equipe Você Fiscal <contato@vocefiscal.org>";

  Accounts.emailTemplates.verifyEmail.subject = function (user) {
    return "Só mais um passo: confirmar email";
  };

  Accounts.emailTemplates.verifyEmail.text = function (user, url) {
    var template = Assets.getText('email_templates/verify_email.txt');
    var templateCompiled = _.template(template);
   return templateCompiled({'url': url});
  };

  Accounts.emailTemplates.resetPassword.subject = function (user) {
    return "Redefinição de senha";
  };

  Accounts.emailTemplates.resetPassword.text = function (user, url) {
    var template = Assets.getText('email_templates/reset_password.txt');
    var templateCompiled = _.template(template);
   return templateCompiled({'url': url});
  };

}

Meteor.startup(function () {
  setupEmail();
});
