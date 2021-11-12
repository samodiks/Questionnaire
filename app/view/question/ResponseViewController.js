Ext.define('SurveyApp.view.question.ResponseViewController',{
    extend:'Ext.app.ViewController',
    alias:'controller.responseviewcontroller',
    mixins: [
        'SurveyApp.mixins.GenericMixin',
    ],
    
    init:function(){
        var patientcontroller=this.getView();
        var store=patientcontroller.getStore();
        store.load();
    },
    onDetailsBtnClick:function(){
        //view selected record implememntation
    },
    onRefreshBtnCLick:function(){
        this.loadGridStore();
        //grid refresh implementation done here
    },
    onRemoveBtnClick:function(){
        //remove selected element(s) imlementation
        var me=this;
        var records=me.getSelectedRecords();
        var grid=me.getView();
        var recordsarray=new Array();
        for (let i = 0; i < records.length; i++) {
            if(records[i]){
                recordsarray.push(`${records[i].get('id')}`)
                
             }
            
        }
        //var record=records[i]
        var url= `http://localhost:3000/responses/${recordsarray}`;
        this.removeSelectedRecord(url,grid);

    }
})