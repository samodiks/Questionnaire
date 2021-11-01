Ext.define('SurveyApp.view.question.QuestionView',{
    extend:'Ext.panel.Panel',
    xtype:'questionview',
    title:'List of Questions',
    alias:'wedget.questionview',
    controller:'questionviewcontroller',

    store:{
        type:'question'
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