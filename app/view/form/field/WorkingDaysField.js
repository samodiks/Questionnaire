Ext.define('SurveyApp.view.form.field.WorkingDaysField',{
    extend:'Ext.form.filed.Date',

    disabledDays:['01/01','14/02','01/05','01/06','10/10','20/10','12/12','25/12','26/12'],
    format:'d-m-Y',
})