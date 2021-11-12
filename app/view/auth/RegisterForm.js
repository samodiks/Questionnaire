Ext.define('SurveyApp.view.auth.RegisterForm',{
    extend:'Ext.form.Panel',
    xtype:'registerform',
    alias:'registerform',
    controller:'registerformcontroller',


    title:'User Registeration',

    items:[
        {
            xtype:'form',
            reference:'register-form',
            jsonSubmit:true,
            defaults:{
                anchor:'100%',
                padding:10
            },
            items:[
                {
                    xtype:'numberfield',
                    name:'id',
                    hidden:true,
                    readOnly:true
                },
                {
                    xtype:'textfield',
                    name:'username',
                    fieldLabel:'Username',
                    vtype:'alpha'
                },
                {
                    xtype:'textfield',
                    fieldLabel:'Email',
                    vtype:'email',
                    name:'email'
                },
                {
                    xtype:'datefield',
                    name:'dor',
                    fieldLabel:'Date of Registeration',
                    maxValue:new Date(),
                },{ 
                    xtype:'textfield',
                    name:'password',
                    inputType:'password',
                    fieldLabel:'Password',
                    vtype:'password',
                }

            ],

        buttons:[
            {
            xtype:'button',
            text:'Reset',
            handler:'onClickReset'
            },
            {
                xtype:'button',
                text:'Submit',
                handler:'onClickSubmit'

                }
           ]
        }
    ]


})