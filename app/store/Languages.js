Ext.define('SurveyApp.store.Languages', {
    extend: 'Ext.data.Store',

    alias: 'store.languages',
    storeId:'languages',

    model: 'SurveyApp.model.Languages',

    data:[
        {languages:'java'},
        {languages:'kotlin'},
        {languages:'python'},
        {languages:'php'},
        {languages:'C++'},
        {languages:'Golang'},
        {languages:'C'},
        {languages:'javascript'}
    ]
})