Ext.define('SurveyApp.overrides.data.form.field.VTypes',{
    override:'Ext.form.field.VTypes',

    password:function(value){
        return this.passwordRegEx.test(value);
    },
    passwordRegEx:/^[A-Za_z]\w{8,16}$/i,
    passwordText:'Not a valid password. Must contain [7-16] characters, and contains numeric digits, characers a nd first character must be a letter',
})