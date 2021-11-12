 Ext.define('SurveyApp.view.auth.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    controller: 'logincontroller',
    title: 'Login',

    bodyPadding: 10,
    width: 600,
    closable:true,
    autoShow:true,
    requires:[
        'Ext.form.Panel'
    ],
  
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