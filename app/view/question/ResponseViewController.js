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
    }
})