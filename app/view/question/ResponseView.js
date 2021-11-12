Ext.define('SurveyApp.view.question.ResponseView',{
    extend:'Ext.grid.Panel',
    xtype:'responseview',
    controller:'responseviewcontroller',
    store:
    {
        type:'response'
    },
    title:'List of Questions',
    columns: [
        // {
        //     dataIndex:'title',
        //     text:'string'
        // },
        {
            
            text:'id',
            dataIndex:'id',
        },{
            
            text:'yourself',
            dataIndex:'yourself',
        },{
            
            text:'date',
            dataIndex:'dateOfBirth',
        },{
            text:'age',
            dataIndex:'age',
            
        },{
            text:'contract',
            dataIndex:'contract',
            
        },{
            text:'differentOpportunity',
            dataIndex:'differentOpportunity',
            
        },{
            text:'onedisc',
            dataIndex:'onedisc',
            
        },
        {
            text:'twodisc',
            dataIndex:'twodisc',
            
        },{
            text:'threedisc',
            dataIndex:'threedisc',
            
        },{
            text:'fourdisc',
            dataIndex:'fourdisc',
            
        },{
            text:'fivedisc',
            dataIndex:'fivedisc',
            
        },{
            dataIndex:'startProgramming',
            text:'startProgramming'
        },{
            dataIndex:'versionControl',
            text:'versionControl'
        },{
            dataIndex:'keepProjects',
            text:'keepProjects'
        },{
            dataIndex:'versionurl',
            text:'versionurl'
        },{
            dataIndex:'languages',
            text:'languages'
        },{
            dataIndex:'framework',
            text:'framework'
        },{
            dataIndex:'ide',
            text:'ide'
        },{
            dataIndex:'level',
            text:'level'
        }
    ],
    features:[
        {
            ftype:'grouping'
        }
    ],
    tbar:[
    //     {
    //     text:'Add Question',
    //     tooltip:'Add new Question',
    //     handler:'onAddBtnClick'
    // },{
    //     text:'Details',
    //     tooltip:'Details of selected Question',
    //     handler:'OnDetailsBtnClick'
    // },
    {
        text:'Refresh',
        tooltip:'Refresh Page',
        handler:'onRefreshBtnCLick'
    },{
        text:'Remove',
        tooltip:'Remove Question',
        handler:'onRemoveBtnClick'
    }],
    selModel:'checkboxmodel'
    
})