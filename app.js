/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'SurveyApp.Application',

    name: 'SurveyApp',

    requires: [
        // This will automatically load all classes in the SurveyApp namespace
        // so that application classes do not need to require each other.
        'SurveyApp.*'
    ],

    // The name of the initial view to create.
    //mainView: 'SurveyApp.view.main.Main'

   //mainView: 'SurveyApp.view.auth.Login'
});
