Ext.define('SurveyApp.view.auth.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.logincontroller',

    onLoginClick:function(btn, e, eOpts){
        var me = this,
            model = me.getViewModel(),
            refs = me.getReferences(),
            form = me.lookup('loginform').getForm();
        // submit form form
        localStorage.setItem('isLoggedIn', true);
        me.getView().destroy();
        
        Ext.widget('mainviewport');

    }
});