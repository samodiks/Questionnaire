Ext.define('SurveyApp.view.form.field.DateFormatField',{
    extend:'Ext.form.field.Date',

    xtype:'dateformatfield',
    maxValue:new Date(),
    format:'d-m-Y'
})