Ext.define('SurveyApp.view.question.QuestionsFormController',{
    extend:'Ext.app.ViewController',

    alias:'controller.questionsformcontroller',

    init:function(){
        //form load fucntion implementation
    },
    onsubmit:function(){
        // on submit function implementation
    },
    onReset:function(){
        //on rest function implemetation
    },
    onDatePicked:function( field, value, eOpts ){
        var view=this.getView(),
        agefield=view.lookupReference('age');
        // var d=value.getValue();
        // console.log(d);
        agefield.setValue(Ext.Date.diff( value, new Date(), Ext.Date.YEAR ));
        // console.log(value,Ext.Date.YEAR);
        // agefield.setValue(value,Ext.Date.YEAR)
        //agefield.setValue(Ext.Date.add(value, Ext.Date.YEAR, 10))
    },
    onChange:function(field, newValue, oldValue, eOpts) {
        var view=this.getView();

        if (newValue>=18) {
            var period=view.lookupReference('systechPeriod');
            period.setVisible(true);  
        }
        

    },
    differentQs:function(cmp, newValue, oldValue, eOpts){
        var view=this.getView();
        console.log(newValue.options);
        console.log(cmp.getValue())
        if(newValue.options=='Yes'){
            var differentOpportunity=view.lookupReference('differentOpportunity');
            differentOpportunity.setVisible(true);
        }else{
            console.log("nooooo")
        }
    },
    onBackButton:function(btn, e, eOpts){
        let me = this,
            window = me.getView(),
            cardpanel = window.lookupReference('cardpanel');
        this.navigate(cardpanel,"prev");
    },
    onNextButton: function(btn, e, eOpts){
        let me = this,
            window = me.getView(),
            cardpanel = window.lookupReference('cardpanel');
        this.navigate(cardpanel,"next");
    },
    navigate: function(panel, direction){
        let layout = panel.getLayout();
        layout[direction]();
        Ext.getCmp('move-prev').setDisabled(!layout.getPrev());
        Ext.getCmp('move-next').setDisabled(!layout.getNext());
    }
    
    
})