Ext.define('SurveyApp.view.question.ResponseViewController',{
    extend:'Ext.app.ViewController',
    alias:'controller.responseviewcontroller',
    mixins: [
        'SurveyApp.mixins.GenericMixin',
    ],
    
    init:function(){
        var response=this.getView();
        var store=response.getStore();
        store.load();
    },
    showForm: function(record)
    {
        let window = Ext.create(
            {
                xtype:'questionnaire'
            });
            if(record){
                window.lookupReference('cardpanel').getForm().loadRecord(record);
            }
    },
    onDetailsBtnClick:function(){
        //view selected record implememntation
        let me = this,
           record = me.getSelectedRecord();
        if(record){
            this.showForm(record);
        }

    },
    onRefreshBtnCLick:function(){
        //grid refresh implementation done here
        this.loadGridStore();
    },
    onRemoveBtnClick:function(){
        //remove selected element(s) imlementation
<<<<<<< HEAD
        let me = this;
        let grid = me.getView();
        let record = me.getSelectedRecord();
        if(record){
            let url = `http://localhost:3000/responses/${record.get('id')}`;
            me.removeSelectedRecord(url,grid);
            }
        }
=======
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
>>>>>>> 213c97509cf27eae8e493321102d5567c2b8e2c0
})