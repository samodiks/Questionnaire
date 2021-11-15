Ext.define('SurveyApp.view.question.QuestionsForm',{
    extend:'Ext.form.Panel',
    layout:'card',
    width:900,
    xtype:'questionnaire',
    controller:'questionsformcontroller',
    viewModel:{
        data:{
            record:{
                id:'Tell us about yourself',
                id1:'When were you born?',
                id2:'Can you sign a four year contract with Systech?',
                id3:'if safaricom offered you a job, with a salary of 300,000 would you take it?Give a reason',
                id4:'Which of these personalities describe you well?',
                id5:'When did you start your programming journey?',
                id6:'Which Version control are you best at?',
                id7:'Where do you keep your projects',
                id8:'Add your link to your account',
                id9:'Which languages would you be comfortable to use for the hands on skills interview?',
                id10:'Which frameworks have you used?',
                id11:'Which Ides do you use? '
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
                
                items:[
                    {
                    bind:{
                        html: '<h3>{record.id}</h3>',
                    },
                    
                },
                {
                    xtype:'htmleditor',
                    name:'yourself',
                    minLength:10

                }],
            },
                
            {
                title: 'Question 2',
                items:[{
                
                    bind:{
                        html: '<h3>{record.id1}</h3>',
                    },
                    
                    
                },
                {
                    layout:'form',
                    xtype:'dateformatfield',
                    name:'dateOfBirth',
                    maxValue: Ext.Date.add(new Date(),Ext.Date.YEAR,-18),
                    reference:'dob',
                    listeners:{
                        select:'onDatePicked'
                    }

                },{
                    layout:'form',
                    xtype:'textfield',
                    name:'age',
                    fieldLabel:'Age',
                    reference:'age',
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
                        
                        
                    },
                    {
                        xtype: 'radiogroup',
                        name:'contract',
                        vertical: true,
                        items: [
                            { boxLabel: 'Yes', name: 'contract', inputValue: 'Yes'},
                            { boxLabel: 'No', name: 'contract', inputValue: 'No'}
                        ],
                        listeners:{
                            change:"differentQs",
                            
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
                    
                },
                {
                    xtype: 'htmleditor',
                    name:'differentOpportunity',
                    listeners:{
                        change:'pageTwo'
                    }
        
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
                hidden:true,
                reference:'disc',
                items:[
                    {
                    bind:{
                        html: '<h3>{record.id4}</h3>',
                    },  
                    
                },{
                    
                        items:[
                        {
                            xtype: 'radiogroup',
                            name:'onedisc',
<<<<<<< HEAD
                            columns:[1, .75],
=======
                            //vertical: true,
                            //columns:[1, .75],
>>>>>>> 213c97509cf27eae8e493321102d5567c2b8e2c0
                            items: [
                                
                                { boxLabel: 'Active', name: 'onedisc', inputValue: 'D'},
                                { boxLabel: 'Verbal', name: 'onedisc', inputValue: 'I'},
                                { boxLabel: 'Singular', name: 'onedisc', inputValue: 'S'},
                                { boxLabel: 'Rules', name: 'onedisc', inputValue: 'C'}
                            ],
                            listeners:{
                                change:"sectionTwo",
                            }
                        },{
                            xtype: 'radiogroup',
                            name:'twodisc',
<<<<<<< HEAD
                            columns:[1, .75],
=======
                            //vertical: true,
                            //columns:[1, .75],
>>>>>>> 213c97509cf27eae8e493321102d5567c2b8e2c0
                            items: [
                                
                                { boxLabel: 'Aggresive', name: 'twodisc', inputValue: 'D'},
                                { boxLabel: 'Persuader', name: 'twodisc', inputValue: 'I'},
                                { boxLabel: 'Listener', name: 'twodisc', inputValue: 'S'},
                                { boxLabel: 'Accuracy', name: 'twodisc', inputValue: 'C'}
                            ],
                            listeners:{
                                change:"sectionTwo",
                            }
                        },{
                            xtype: 'radiogroup',
                            vertical: true,
                            name:'threedisc',
                            items: [
                                
                                { boxLabel: 'Direct', name: 'threedisc', inputValue: 'D'},
                                { boxLabel: 'Joyful', name: 'threedisc', inputValue: 'I'},
                                { boxLabel: 'Low risk', name: 'threedisc', inputValue: 'S'},
                                { boxLabel: 'Details', name: 'threedisc', inputValue: 'C'}
                            ],
                            listeners:{
                                change:"sectionTwo",
                            }
                        },{
                            xtype: 'radiogroup',
                            vertical: true,
                            name:'fourdisc',
                            items: [
                                
                                { boxLabel: 'Overcomer', name: 'fourdisc', inputValue: 'D'},
                                { boxLabel: 'Optimistic', name: 'fourdisc', inputValue: 'I'},
                                { boxLabel: 'Friendly', name: 'fourdisc', inputValue: 'S'},
                                { boxLabel: 'Careful', name: 'fourdisc', inputValue: 'C'}
                            ],
                            listeners:{
                                change:"sectionTwo",
                            }
                        },{
                            xtype: 'radiogroup',
                            vertical: true,
                            name:'fivedisc',
                            items: [
                                
                                { boxLabel: 'Solver', name: 'fivedisc', inputValue: 'D'},
                                { boxLabel: 'Emotional', name: 'fivedisc', inputValue: 'I'},
                                { boxLabel: 'Loyal', name: 'fivedisc', inputValue: 'S'},
                                { boxLabel: 'Analytical', name: 'fivedisc', inputValue: 'C'}
                            ],
                            listeners:{
                                change:"sectionTwo",
                            }
                        }
                    ]
                }]
        }]
    }]

},{
    id:'card-2',
    iconCls:'fas fa-pen',
    title:'Technical Section',
    padding:10,
    items:[
        {
            title: 'Question 6',
            
            items:[{
                //hidden:true,
                reference:'technicalSection',
                items:[
                    {
                        xtype:'fieldset',
                        bind:{
                            title: '{record.id5}',
                        },
                        items:[
                            
                            {
                                xtype: 'dateformatfield',
                                width:500,
                                name:'startProgramming'
                            }
                        ]
                },{
                    layout:'hbox',
                    items:[
                        {
                            xtype:'fieldset',
                            
                            bind:{
                                title: '{record.id6}',
                            },
                            items:[
                                
                                {
                                    xtype: 'combo',
                                    name:'versionControl',
                                    valueField: 'versionControl',
                                    queryMode:'local',
                                    store:['Git','Mercurial','Concurrent Versions system(CVS),Apache Subversion(SVN)','None'],
                                    displayField:'versionControl',
                                    autoSelect:true,
                                    forceSelection:true,
                                    reference:'versionControlCombo',
                                    listeners:{
                                        select:'versionSelect'
    
                                    }
                                },
                                
                            ]
                        },
                        {
                            xtype:'fieldset',
                            reference:'storeProjects',
                            hidden:true,
                            bind:{
                                title: '{record.id7}',
                            },
                            items:[
                                
                                {
                                    xtype: 'textfield',
                                    name:'keepProjects',
                                    listeners:{
                                        change:'OntypeStore'
                                    }
                                    
                                }
                            ]

                        },
                        {
                            xtype:'fieldset',
                            hidden:true,
                            reference:'versionUrl',
                            bind:{
                                title: '{record.id8}',
                            },
                            items:[
                                
                                {
                                    xtype: 'textfield',
                                    name:'versionurl',
                                    vtype:'url',
                                    listeners:{
                                        change:'OnVersionUrl'
                                    }
                                    
                                }
                            ]

                        },
                        


                    ]
                
                    
            },
            {
                xtype:'fieldset',
                hidden:true,
                reference:'languages',
                bind:{
                    title: '{record.id9}',
                },
                items:[
                    
                    {
                        xtype: 'tagfield',
                        name:'languages',
                        store:{
                            type:'languages'
                        },
                        valueField: 'languages',
                        queryMode:'local',
                        displayField:'languages',
                        forceSelection:true,
                        filterPickList: true,
                        listeners:{
                            select:'OnlanguageSelect'
                        }
                        
                        
                    }
                ]

            },
            {
                xtype:'fieldset',
                hidden:true,
                reference:'framework',
                bind:{
                    title: '{record.id10}',
                },
                items:[
                    
                    {
                        xtype: 'checkboxgroup',
                        name:'framework',
                        items: [
                                
                            { boxLabel: 'Ruby on rails', name: 'framework', inputValue: 'Ruby on rails'},
                            { boxLabel: 'Django', name: 'framework', inputValue: 'Django'},
                            { boxLabel: '.Net', name: 'framework', inputValue: '.Net'},
                            { boxLabel: 'Meteor', name: 'framework', inputValue: 'Meteor'},
                            { boxLabel: 'Laravel', name: 'framework', inputValue: 'Laravel'},
                            { boxLabel: 'Express', name: 'framework', inputValue: 'Express'},
                            { boxLabel: 'Spring', name: 'framework', inputValue: 'Spring'},
                            { boxLabel: 'Play', name: 'framework', inputValue: 'Play'}
                        ],
                        listeners:{
                            change:'Onframeworkchoose'
                        }
                    }
                ]

            },
            {
                xtype:'fieldset',
                hidden:true,
                reference:'ide',
                bind:{
                    title: '{record.id11}',
                },
                items:[
                    
                    {
                        xtype: 'textfield',
                        name:'ide',
                        listeners:{
                            change:'OnTypeIde'
                        }

                        
                        
                    }
                ]
                
            },{
                xtype: 'textfield',
                name:'level',
                hidden:true,
                reference:'level',
                listeners:{
                    change:'onLevel'
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