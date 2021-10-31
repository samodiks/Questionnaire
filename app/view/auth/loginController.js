Ext.define('SurveyApp.view.auth.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.logincontroller',

    onLoginClick: function() {
        var form = this.getView();

        if (form.validate()) {
            Ext.Msg.alert('Login Success', 'You have been logged in!');
        }
        else {
            Ext.Msg.alert('Login Failure', 'The username/password provided is invalid.');
        }
    }
});