Ext.define('SurveyApp.model.Question',{
    extend:'Ext.data.Model',

    idProperty:'id',
    fields:[{
        name:'id',
        type:'integer'
    },{
        name:'title',
        type:'string'
    },{
        name:'body',
        type:'string'
    }]
});