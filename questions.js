

    var questioneers =  [ 
     {
        name: 'Adult Self Report',
        sections: [
	        {
	           name: 'ID',
	           type: 'normal',
	           questions: [
	             { 
	              type: "radio",
	              label: 'Your Gender',
	              options: ['Male','Female']},
	             {
	              label: 'Age',
	              type:'text',
	             },
	             {	            
	             	label: 'Birthdate mm/dd/yyyy',
	             	type: 'text',
	             	//to do: the date needs to be formatted into a series of dropdown menus
	             },
	           ]
	        },
	        {
	           name: 'Education and Work',
	           type: 'normal',
	           questions: [
	             { 
	              type: "radio",
	              label: 'Highest Level Of Education',
	              options: ['No highschool diploma and no GED',
	                     'GED', 
	                     'High school graduate',
	                     'Some college but no college degree',
	                     "Associate's Degree",
	                     "Bachelor's or RN Degree",
	                     'Some graduate school but no graduate degree',
	                     "Master's Degree",
	                     'Docoral or Law Degree', 
	                     'Other education (sepcify)', //to do: put a free text field so people can specify their 'other education'
	                       ]
	             },
	             {
	             	label: 'Your Usual Types of Work',
	             	type:'text',
	             	desc:  'Please be specific',
	             },
	             {
	             	label: "Your Spouse or Partner's Usual Types of Work",
	             	type: 'text',
	             	desc: 'Please be specific',
	             },
	           ]
        	},
        	{
        		name: 'Friends',
        		type: 'normal',
        		questions: [
        		 {
        		 	type: 'radio',
        		 	label: 'About how many close friends do you have? (Do not include family members.)',
                    options: ['None', 
                    		'1',
                    		'2 or 3',
                    		'4 or more',
                    		]
                  },
                  { 		
                	type: 'radio',
                	label: 'About how many times a month do you have contact with any of your close friends? (Include in-person contacts, phone, letters, e-mail.)',
                	options: ['Less than 1',
                			'1 or 2',
                			'3 or 4',
                			'5 or more',
                			]
                },
                {
                    type: 'radio',
                    label: 'How well do you get along with your close friends?',
                    options: ["Not as well as I'd like",
                    		'Average',
                    		'Above average',
                    		'Far above average',
                    		]
               	},
               	{
               		type: 'radio',
               		label: 'About how many times a month do any friends ro family visit you?',
               		options: ['Less than 1',
               				'1 or 2',
               				'3 or 4',
               				'5 or more',
               				]

                }], 
           	},
           	{
           		name: 'Spouse or Partner',
           	},
        	{
	           name: 'Family',
	           type: 'grid',
	           labels: ['Not Applicable','Worse than Average','variable or Average','Better than Average','No Contact'],
	           desc: "Compared with others, how well do you:",
	           questions: [
	             { type: "radio", label: 'Get along with your brother(s)'},
	             { type: "radio", label: 'Get along with your sister(s)'},
	             { type: "radio", label: 'Get along with your mother' },
	             { type: "radio", label: 'Get along with your father' },
	           ]
        	}
        ]

      },
      {
      	name: 'Reward Ranking',
      	sections: [
      	   	{
	           name: 'Reward',
	           type: 'rank',
	           desc: "rank what you like 1(best) to 13 (worst):",
	           questions: [
	             { label: "Applebee's"},
	             { label: "Domino's Pizza"},
	             { label: "Starbucks"},
	             { label: "American Eagle" },
	           ]
        	}
        ]
      },
            {
      	name: 'Demographic',
      	sections: [
      	   	{
	           name: 'Background',
	           type: 'normal',
	           questions: [
	             { 
	              type: "radio",
	              label: 'Do you Consider yourself to be Hispanic or Latina?',
	              desc: '<b>Hispanic or Latino</b>: A person of Mexican, Puerto Rican, Cuban, South or Central American, ...',
	              options: ['Hispanic or Latino','Not Hispanic or Latino']
	             },
	             {
	             	label: 'What race do you consider yourself',
	             	desc: 'Select one or more of the following',
	             	type:'checkbox',
	             	/* array of objects because we need to set value indepenently for each option/label */
	             	options: [{value:0, label:'American Indian'},
	             	          {value:0, label:'Asian'},
	             	          {value:0, label:'Black or African American'},
	             	          {value:0, label:'Native Hawaiian or Other Pacific Islander'},
	             	          {value:0, label:'White'},
	             	          {value:0, label:'Do not wish to provide'}]
	             	
	             }
	           ]
        	}
        ]
      }
    ];
