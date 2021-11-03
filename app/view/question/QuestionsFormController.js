Ext.define('SurveyApp.view.question.QuestionsFormController',{
    extend:'Ext.app.ViewController',

    alias:'controller.questionsformcontroller',

    init:function(){
        //form load fucntion implementation
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
        let view=this.getView();
        console.log(newValue.options);
        console.log(cmp.getValue())
        if(newValue.options=='Yes'){
            var differentOpportunity=view.lookupReference('differentOpportunity');
            differentOpportunity.setVisible(true);
        }else{
            console.log("nooooo")
        }
    },
    sectionTwo:function(){
        let view = this.getView();
        let sectionTwoQns = view.lookupReference('loveLanguageSection');
        sectionTwoQns.setVisible(true);
    },
    loveLanguage:function(){
        let view = this.getView();
            loveSection = view.lookupReference('submit');
        loveSection.setVisible(true);
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
       // Ext.getCmp('submit').setDisabled(layout.getNext);
    },

    onSubmitButton:function(){
        /* let me = this,
            window = me.getView();
            cardpanel = window.lookupReference('cardpanel');
        this.navigate(cardpanel,"submit"); */

        let me = this,
            window = me.getView(),
            form = window.lookupReference('questionnaire').getForm();

        let id = form.findField('id').getValue(),
          //  url = 'http://localhost:3000/responses/',    
            method = 'POST';
        
        if(id){
            url += id;
            method = 'PUT';
        }
        if(form.isValid()){
            form.submit({
                url:url,
                method:method,
                success: function(form,action){
                    Ext.Msg.alert('Success',action.result.msg);
                },
                failure: function(form,action){
                    if(action.response.status ==201 || action.response.status ==200)
                      {
                          Ext.Msg.alert('Success',"Saved successfully");
                      }
                      else{
                      switch(action.failureType){
                            case Ext.form.action.Action.CLIENT_INVALID:
                              Ext.Msg.alert(
                                  'Failure',
                                  'Form fields may not be submitted with invalid values'
                              );
                            break;
                            case Ext.form.action.Action.CONNECT_FAILURE:
                                  Ext.Msg.alert(
                                      'Failure', 'Ajax communication failed'
                                  );
                             break;
                            case Ext.form.action.Action.SERVER_INVALID:
                                      Ext.Msg.alert('Failure',action.result.msg);
                            break;
                            }
                        }
                }
            })
        }

    },   
    
})