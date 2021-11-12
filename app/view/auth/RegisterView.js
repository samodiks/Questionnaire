Ext.define('SurveyApp.view.auth.RegisterView',{
    extend:'Ext.grid.Panel',
    xtype:'registerview',
    alias:'widget.registerview',
    controller:'registerviewcontroller',

    title:'List of Registerd Users',
    strore:{
        type:'register'
    },
    columns:[{
        text:'ID',
        dataIndex:'id',
    },{
        text:'Username',
        dataIndex:'username',
    },{
        text:'Email',
        dataIndex:'username',
        flex:3
    },{
        text:'Date of Registration',
        dataIndex:'dor',
        flex:2
    },{
        text:'Password',
        dataIndex:'password',
    }],
    tbar:[{
        text:'Regisetr User',
        tooltip:'Register New User',
        handler:'onAddBtnClick'
    }, {
        text:'Details',
        tooltip:'Details of selected User',
        handler:'onDetailsBtnClick'
    },{
        text:'Refresh',
        tooltip:'Refresh Page',
        handler:'onRefreshBtnCLick'
    },{
        text:'Remove',
        tooltip:'Remove User',
        handler:'onRemoveBtnClick'
    }]
})