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
        let me = this;
        let grid = me.getView();
        let record = me.getSelectedRecord();
        if(record){
            let url = `http://localhost:3000/responses/${record.get('id')}`;
            me.removeSelectedRecord(url,grid);
            }
        }
})