Ext.define('SurveyApp.view.auth.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.logincontroller',

    statics: {
        helper: function (response, formdata, me) {
            if (response.status == 200) {
                var validateLogin = JSON.parse(response.responseText);
                if (validateLogin.username.trim() == formdata.username.trim() && validateLogin.password == formdata.password){
                    localStorage.setItem('isLoggedIn', true);
                    me.getView().destroy();
                    
                    Ext.widget('mainviewport');
                }
                else 
                {
                    Ext.Msg.alert('Invalid Username or Password');
                    return;
                }
            }
            else{
                Ext.Msg.alert('Something went horribly wrong. Reload the Page');
                return;
        }
            
        }
    },

    onLoginClick: function(btn,eOpts,e) {
        var me = this;
        
        var window = this.getView(),
        form = window.lookupReference('loginform').getForm();
        var formdata = form.getValues();
        var statics = this.statics();
      //  var record = records[0];
        Ext.Ajax.request({
            url: `http://localhost:3000/logins/${2}`,
            method: 'GET',
            success: function(response, eOpts) {
               statics.helper(response, formdata, me);
            },

            failure: function(response, eOpts) {
               statics.helper(response, formdata, me);
            }
        });
    }
});