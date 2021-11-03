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
                id3:'if safaricom offered you a job, with a salary of 300,000 would you take it?Give a reason',
                id4:'Which of these personalities describe you well?',
                id5:'What is you love language?'
            }   
        }
    },
    
    items:[{
        xtype: 'panel',
        reference: 'cardpanel',
        layout:'card',
        items:[{
        id:'card-0',
        iconCls:'fas fa-users',
        title:'Personal Information',
        items: [{   
            layout: 'accordion',
                       
            items: [
                {
                title: 'Question 1',
                
                items:[{
                    bind:{
                        html: '<h3>{record.id}</h3>',
                    },
                    
                },{
                    xtype:'textfield',
                    hidden:true,
                    bind:{
                        value:'{record.id}'
                    },

                },{
                    xtype:'htmleditor'

                }],
            },
                
            {
                title: 'Question 2',
                items:[{
                
                    bind:{
                        html: '<h3>{record.id1}</h3>',
                    },
                    
                    
                },{
                    xtype:'textfield',
                    hidden:true,
                    bind:{
                        value:'{record.id1}'
                    },

                },{
                    layout:'form',
                    xtype:'dateformatfield',
                    maxValue: Ext.Date.add(new Date(),Ext.Date.YEAR,-18),
                    reference:'dob',
                    listeners:{
                        select:'onDatePicked'
                    }

                },{
                    layout:'form',
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
                            html: '<h3>{record.id2}</h3>',
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
                            //change:'onAnswered'
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
                        html: '<h3>{record.id3}</h3>',
                    },
                    
                },{
                    xtype:'textfield',
                    hidden:true,
                    bind:{
                        value:'{record.id3}'
                    },

                },{
                    xtype: 'htmleditor',
        
                }]

            }] 
    }],
    }]
},{
    id:'card-1',
    iconCls:'fas fa-cross',
    title:'Section Two: Disc Personality Test',
    padding:10,
    items:[
        {
            title: 'Question 5',
            
            items:[{
                //hidden:true,
                reference:'differentOpportunity',
                items:[
                    {
                    bind:{
                        html: '<h3>{record.id4}</h3>',
                    },  
                    
                },{
                    items:[{
                        layout:'form',
                        items:[{
                            xtype:'textfield',
                            hidden:true,
                            bind:{
                                value:'{record.id4}'
                            },
        
                        },
                        {
                            xtype: 'radiogroup',
                            vertical: true,
                            items: [
                                { boxLabel: 'Dominant', name: 'options', inputValue: 'Dominant'},
                                { boxLabel: 'I', name: 'options', inputValue: 'I'},
                                { boxLabel: 'S', name: 'options', inputValue: 'S'},
                                { boxLabel: 'C', name: 'options', inputValue: 'C'}
                            ],
                            listeners:{
                                change:"sectionTwo",
                                //change:'onAnswered'
                            }
                        }]

                    }]
                }]
        }]
    }]

},{
    id:'card-2',
    iconCls:'fas fa-pen',
    title:'Love Language and Communication Styllle Test',
    padding:10,
    items:[
        {
            title: 'Question 6',
            
            items:[{
                hidden:true,
                reference:'loveLanguageSection',
                items:[{
                    bind:{
                        html: '<h3>{record.id5}</h3>',
                    },
                    
                    
                },{
                    xtype:'textfield',
                    hidden:true,
                    bind:{
                        value:'{record.id5}'
                    },

                },{
                    xtype: 'checkboxgroup',
                    //vertical: true,
                    items: [
                        { boxLabel: 'Physical', name: 'options', inputValue: 'physical'},
                        { boxLabel: 'Words', name: 'options', inputValue: 'words'},
                        { boxLabel: 'Service', name: 'options', inputValue: 'Service'},
                        { boxLabel: 'Gifts', name: 'options', inputValue: 'gifts'}
                    ],
                    listeners:{
                        change:"loveLanguage",
                    }
                }]

            }]
        }]
}],

        bbar:[
         
            {
                id: 'move-prev',
                text:'Back',
                handler:'onBackButton',

                disabled:true
            },
            '->',
            {
                id: 'move-next',
                text:'Next',
                handler:'onNextButton'
            },{
                reference:'submit',
                text:'submit',
                handler:'onSubmitButton',
                hidden:true
            }

        ]
    }]
    
});