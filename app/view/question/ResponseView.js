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
            text:'contract',
            dataIndex:'differentOpportunity',
            
        },{
        //     text:'contract',
        //     dataIndex:'onedisc',
            
        // },
        //{
            text:'contract',
            dataIndex:'twodisc',
            
        },{
            text:'contract',
            dataIndex:'threedisc',
            
        },{
            text:'contract',
            dataIndex:'fourdisc',
            
        },{
            text:'contract',
            dataIndex:'fivedisc',
            
        },{
            dataIndex:'startProgramming',
            text:'string'
        },{
            dataIndex:'versionControl',
            text:'string'
        },{
            dataIndex:'keepProjects',
            text:'string'
        },{
            dataIndex:'versionurl',
            text:'string'
        },{
            dataIndex:'languages',
            text:'string'
        },{
            dataIndex:'framework',
            text:'string'
        },{
            dataIndex:'ide',
            text:'string'
        },{
            dataIndex:'level',
            text:'string'
        }
    ],
    features:[
        {
            ftype:'grouping'
        }
    ],
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