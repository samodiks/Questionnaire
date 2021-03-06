/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('SurveyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainviewport',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'SurveyApp.view.main.MainController',
        'SurveyApp.view.main.MainModel',
        'SurveyApp.view.main.List',
        'SurveyApp.view.auth.RegisterForm',
        'SurveyApp.view.main.MainViewModel',
        'SurveyApp.view.auth.RegisterFormController',

    ],
    plugins:'viewport',
    controller: 'main',
    // controller: 'registercontroller',


    viewModel: 'mainviewmodelport',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },
    tbar:[
        '->',
        {       
                text: 'Logout',
                xtype:'button',
                iconCls: 'fas fa-sign-out',
                listeners:{
                    click:'onLogout'
                }
               
        }
 /*        , {   
            text: 'Change PassWord',
            xtype:'button',
            iconCls: 'fas fa-sign-out',
            listeners:{
                click:'changePassword'
            }
        
    } */
    ],

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Responses',
        iconCls: 'fa-book',
        items: [{
            xtype: 'responseview'
        }]
    }, {
        title: 'Questionnaire',
        iconCls: 'fa-pen',
        items: [{
            xtype: 'questionnaire'
        }]
    },
    {
        title: 'Users',
        iconCls: 'fa-user',
        items: [{
            xtype: 'registerview'
        }]
    }
    ]
});
