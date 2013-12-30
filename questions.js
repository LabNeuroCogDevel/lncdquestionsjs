

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
	                     'Docoral or Law Degree'
	                    ]
	             },
	             {
	             	label: 'You Usual Types of Work',
	             	type:'text',
	             	desc:  'Please be specific',
	             }
	           ]
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
