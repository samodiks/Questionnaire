Ext.define('SurveyApp.view.question.QuestionsForm',{
    extend:'Ext.form.Panel',
    layout:'card',
    width:900,
    xtype:'questionnaire',
    store:'categories',
    controller:'questionsformcontroller',
    viewModel:{
        data:{
            record:{
                id:'Tell us about yourself',
                id1:'When were you born?',
                id2:'Can you sign a four year contract with Systech?',
                id3:'if safaricom offered you a job, with a salary of 300,000 would you take it?Give a reason'
            }
            
        }
        
    },
    
    items:[{
        title:'Personal Information',
        items: [{   
            layout: 'accordion',
                       
            items: [
                {
                title: 'Question 1',
                
                items:[{
                    bind:{
                        html: '<h1>{record.id}</h1>',
                    },
                    
                    
                },{
                    xtype:'textfield',
                    hidden:true,
                    bind:{
                        value:'{record.id}'
                    },

                },
                {
                    
                    xtype:'htmleditor'

                }
                    
                    
                ],
            },
                
            {
                title: 'Question 2',
                items:[{
                    bind:{
                        html: '<h1>{record.id1}</h1>',
                    },
                    
                    
                },{
                    xtype:'textfield',
                    hidden:true,
                    bind:{
                        value:'{record.id1}'
                    },

                },{
                    xtype:'dateformatfield', 
                    reference:'dob',
                    listeners:{
                        select:'onDatePicked'
                    }

                },{
                    xtype:'textfield',
                    fieldLabel:'Age',
                    reference:'age',
                    //width:60,
                    readOnly:true,
                    listeners:{
                        change:"onChange"    
                   },
                    

                }],
            },
            {
                title: 'Question 3',
                header: {
                    style: {
                        backgroundColor: 'red',
                        
                    }
                },
                
                items:[{
                    hidden:true,
                    reference:'systechPeriod',
                    items:[{
                        bind:{
                            html: '<h1>{record.id2}</h1>',
                        },
                        
                        
                    },{
                        xtype:'textfield',
                        hidden:true,
                        bind:{
                            value:'{record.id2}'
                        },
    
                    },
                    {
                        xtype: 'radiogroup',
                        vertical: true,
                        items: [
                            { boxLabel: 'Yes', name: 'options', inputValue: 'Yes'},
                            { boxLabel: 'No', name: 'options', inputValue: 'No'}
                        ],
                        listeners:{
                            change:"differentQs",
                            change:'onAnswered'
                        }
                    }]

                }]
                
        },{
            title: 'Question 4',
            
            items:[{
                hidden:true,
                reference:'differentOpportunity',
                items:[{
                    bind:{
                        html: '<h1>{record.id3}</h1>',
                    },
                    
                    
                },{
                    xtype:'textfield',
                    hidden:true,
                    bind:{
                        value:'{record.id3}'
                    },

                },
                {
                    xtype: 'textareafield',
        
                }]

            }]
            
    }],
    }]
}],
        bbar:[
            {
                text:'Next',
                handler:'onNextButton'
            },
            {
                text:'Back',
                handler:'onBackButton'
            }
        ]

    
});