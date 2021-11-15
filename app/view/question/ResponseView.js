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
<<<<<<< HEAD
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
=======
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
>>>>>>> 213c97509cf27eae8e493321102d5567c2b8e2c0
            dataIndex:'fivedisc',
            
        },{
            dataIndex:'startProgramming',
<<<<<<< HEAD
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
=======
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
>>>>>>> 213c97509cf27eae8e493321102d5567c2b8e2c0
        }
    ],
    selModel:'checkboxmodel',
    features:[
        {
            ftype:'grouping'
        }
    ],
<<<<<<< HEAD
    tbar:[/* {
        text:'Add Question',
        tooltip:'Add new Question',
        handler:'onAddBtnClick'
    }, */{
        text:'Details',
        tooltip:'Details of selected Question',
        handler:'onDetailsBtnClick'
    },{
=======
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
>>>>>>> 213c97509cf27eae8e493321102d5567c2b8e2c0
        text:'Refresh',
        tooltip:'Refresh Page',
        handler:'onRefreshBtnCLick'
    },{
        text:'Remove',
        tooltip:'Remove Question',
        handler:'onRemoveBtnClick'
<<<<<<< HEAD
    }]
   
=======
    }],
    selModel:'checkboxmodel'
    
>>>>>>> 213c97509cf27eae8e493321102d5567c2b8e2c0
})