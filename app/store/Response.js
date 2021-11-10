Ext.define('SurveyApp.store.Response',{
    extend:'Ext.data.Store',
    alias:'store.response',
    storeId:'response',
    model:'SurveyApp.model.Response',
    groupField:'level',

    proxy:{
        type:'rest',
        url:'http://localhost:3000/responses',
        reader:{
            type:'json',
            rootProperty:'responses',
        }
    },
    autoLoad: true,
});