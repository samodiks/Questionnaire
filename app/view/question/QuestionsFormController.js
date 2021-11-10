Ext.define('SurveyApp.view.question.QuestionsFormController',{
    extend:'Ext.app.ViewController',

    alias:'controller.questionsformcontroller',
    mixins: [
        'SurveyApp.mixins.GenericMixin',
    ],

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
        let find='systechPeriod';
        this.onChangeMixin(find);
        // var view=this.getView();
        // var period=view.lookupReference('systechPeriod');
        // period.setVisible(true);  
        

    },
    differentQs:function(cmp, newValue, oldValue, eOpts){
        let view=this.getView();
        console.log(newValue.options);
        console.log(cmp.getValue())
        if(newValue.contract=='Yes'){
            var differentOpportunity=view.lookupReference('differentOpportunity');
            differentOpportunity.setVisible(true);
        }else if(newValue.contract=='No'){
            var differentOpportunity=view.lookupReference('card-0');
            console.log("hiiiii");
            Ext.Msg.alert("Systech Questionnaire","Your response is highly appreciated")
            view.destroy();
            //differentOpportunity.setVisible(false);
            
        }
    },
    pageTwo:function(){
        let find='disc';
        this.onChangeMixin(find);
        // let view = this.getView();
        // let discEnable = view.lookupReference('disc');
        // discEnable.setVisible(true);
        

    },

    sectionTwo:function(){
        let find='technicalSection';
        this.onChangeMixin(find);
        // let view = this.getView();
        // let sectionTwoQns = view.lookupReference('technicalSection');
        // sectionTwoQns.setVisible(true);
    },
    versionSelect: function(combo, record, eOpts) {
        var  versionControl = combo.getValue();
        if(versionControl=='None'){
            let find='storeProjects';
            this.onChangeMixin(find);
        }else{
            let find='versionUrl';
            this.onChangeMixin(find);

        }       

    },
    OnVersionUrl:function(){
        let find='languages';
        this.onChangeMixin(find);

    },
    OnlanguageSelect:function( combo, record, eOpts  ){
        if(record.length>=2){
            let view = this.getView();
            let foundField = view.lookupReference('ide');
            foundField.setVisible(false);
            let find='framework';
            this.onChangeMixin(find);
            
            

        }else{
            let find='ide';
            this.onChangeMixin(find);

        }
        

    },
    Onframeworkchoose:function(){
        let view = this.getView();
        let levelValue = view.lookupReference('level');
        levelValue.setValue('Expert')


    },
    OnTypeIde:function(){
        let view = this.getView();
        let levelValue = view.lookupReference('level');
        levelValue.setValue('Intermediate')

    },
    OntypeStore:function(){
        let view = this.getView();
        let levelValue = view.lookupReference('level');
        levelValue.setValue('Beginner')

    },
    onLevel:function(){
        let view = this.getView();
        let loveSection = view.lookupReference('submit');
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

        let me = this;
        let window = me.getView();
        let submitButton = window.lookupReference('submit');
        let form=submitButton.up('form').getForm();

        
        let url = 'http://localhost:3000/responses'; 
        let method = 'POST';
        
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