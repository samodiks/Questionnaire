Ext.define('SurveyApp.view.question.ResponseView',{
    extend:'Ext.panel.Panel',
    xtype:'responseview',
    title:'List of Questions',
    alias:'wedget.responseview',
    controller:'responseviewcontroller',

    store:{
        type:'response'
    },
    tbar:[{
        text:'Add Question',
        tooltip:'Add new Question',
        handler:'onAddBtnClick'
    },{
        text:'Details',
        tooltip:'Details of selected Question',
        handler:'OnDetailsBtnClick'
    },{
        text:'Refresh',
        tooltip:'Refresh Page',
        handler:'onRefreshBtnCLick'
    },{
        text:'Remove',
        tooltip:'Remove Question',
        handler:'onRemoveBtnClick'
    }],
    
})