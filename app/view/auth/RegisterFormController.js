Ext.define('SurveyApp.view.auth.RegisterFormController',{
    extend:'Ext.app.ViewController',

    alias:'controller.registerformcontroller',
    requres:[
        'Ext.form.Panel'
    ],

    onClickReset:function(){
        let me = this,
            window =me.getView(),
            form = window.lookupReference('register-form').getForm();
        form.reset();
    },
    onClickSubmit:function(){
        let me = this,
            window = me.getView(),
            form = window.lookupReference('register-form').getForm();
    
        let id = form.findField('id').getValue(),
            url = 'http://localhost:3000/logins/',    
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
    }
})