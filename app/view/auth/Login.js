/**
 * Demonstrates a simple login form.
 */
 Ext.define('SurveyApp.view.auth.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'form-login',
    controller: 'logincontroller',
    title: 'Login',

    bodyPadding: 10,
    width: 600,
    autoSize: true,
    closable:true,
    autoShow:true,
  
    items:{
        xtype:'form',
        layout:'form',
        reference:'loginform',
        items:[{
            xtype:'textfield',
            name:'username',
            fieldLabel:'Username',
            allowBlank:false
        },
        {
            xtype:'textfield',
            name:'password',
            inputType:'password',
            fieldLabel:'Password',
            vType:'',
            allowBlank:false
        }],
        buttons: [{
            text: 'Login',
            iconCls: 'fas fa-sign-in-alt',
            formBind:true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }
});