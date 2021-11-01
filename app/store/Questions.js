Ext.define('SurveyApp.store.Questions',{
    extend:'Ext.data.Store',
    alias:'store.questions',
    storeId:'questions',
    model:'SurveyApp.model.Question',

    proxy:{
        type:'ajax',
        url:'',
        reader:{
            type:'json',
            rootProperty:'questions',
        }
    }
});