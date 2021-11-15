Ext.define('SurveyApp.store.Registers',{
    extend:'Ext.data.Store',
    alias:'store.registers',
    storeId:'registers',
    model:'SurveyApp.model.Register',

    proxy:{
        type:'rest', //we can also have ajax, jsonp
        url:'http://localhost:3000/logins',
        reader:{
            type:'json',
            rootProperty:'logins'
        }
    },
    
    autoLoad:true
});