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
        {
            
            text:'ID',
            dataIndex:'id',
        },{
            
            text:'Respondent',
            dataIndex:'yourself',
        },{
            text:'Current Age',
            dataIndex:'age',
            
        },{
            text:'Contract',
            dataIndex:'contract',
            
        },{
            text:'On Opportunities',
            dataIndex:'differentOpportunity',
            
        },{
    
            text:'Two Disc Personality',
            dataIndex:'twodisc',
            
        },{
            text:'Three Disc Personality',
            dataIndex:'threedisc',
            
        },{
            text:'Four Disc Personality',
            dataIndex:'fourdisc',
            
        },{
            text:'Five Disc Personality',
            dataIndex:'fivedisc',
            
        },{
            dataIndex:'startProgramming',
            text:'Programming'
        },{
            dataIndex:'versionControl',
            text:'Version control'
        },{
            dataIndex:'keepProjects',
            text:'Projects'
        },{
            dataIndex:'versionurl',
            text:'VCS Link'
        },{
            dataIndex:'languages',
            text:'Programming Languages'
        },{
            dataIndex:'framework',
            text:'Frameworks'
        },{
            dataIndex:'ide',
            text:'Text Editors'
        },{
            dataIndex:'level',
            text:'Level'
        }
    ],
    selModel:'checkboxmodel',
    features:[
        {
            ftype:'grouping'
        }
    ],
    tbar:[/* {
        text:'Add Question',
        tooltip:'Add new Question',
        handler:'onAddBtnClick'
    }, */{
        text:'Details',
        tooltip:'Details of selected Question',
        handler:'onDetailsBtnClick'
    },{
        text:'Refresh',
        tooltip:'Refresh Page',
        handler:'onRefreshBtnCLick'
    },{
        text:'Remove',
        tooltip:'Remove Question',
        handler:'onRemoveBtnClick'
    }]
   
})