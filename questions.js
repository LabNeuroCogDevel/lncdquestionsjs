var ASR = {
  name: 'Adult Self Report',
      sections: [
          {
             name: 'ID',
             type: 'normal',
             questions: [
               { 
                type: "radio",
                label: 'Your Gender',
                options: ['Male', 'Female']
               },
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
              type: 'normal',
              questions: [
                  {
                  type: 'radio',
                  label: 'What is your marital status?',
                  options: ['Never been married',
                  'Married, living with spouse',
                  'Widowed',
                  'Married but separated from spouse',
                  'Divorced',
                  'Other (please specify)'], //to do: make open text field so subjects can specify other
                  },
                  {
                  type: 'radio',
                  label: 'At any time in the past 6 months, did you live with your spouse or with a partner?',
                  options: ['No - please skip to "Family" section.',
                      'Yes - if yes fill out the section below',
                      ] 
                  }],
            },      
            {
              name: 'Spouse or Partner Description',
              type: 'grid',
              labels: ['Not True', 'Somewhat or Sometimes True', 'Very True or Often True'],
              desc: "Use the options to describe your relationship in the past 6 months",
              questions: [
                { type: 'radio', label: 'I get along well with my spouse or partner'},
                { type: 'radio', label: 'My spouse or partner and I have trouble sharing resonsibilities'},
                { type: 'radio', label: 'I feel satisfied with my spouse or partner'},
                { type: 'radio', label: 'My spouse or partner and I enjoy similar activities'}, 
                { type: 'radio', label: 'My spouse or partner and I disagree about living arangements, such as where we live'},
                { type: 'radio', label: "I have trouble with my spouse or partner's family"},
                { type: 'radio', label: "I like my spouse or partner's friends"},
                { type: 'radio', label: "My spouse or partner's behavior annoys me"},
                ]      
            },
            {
              name: 'Family',
              type: 'grid',
              labels: ['Not Applicable','Worse than Average','variable or Average','Better than Average','No Contact'],
              desc: "Compared with others, how well do you:",
              questions: [
                { type: "radio", label: 'A. Get along with your brother(s)'},
                { type: "radio", label: 'B. Get along with your sister(s)'},
                { type: "radio", label: 'C. Get along with your mother' },
                { type: "radio", label: 'D. Get along with your father' },
                { type: "radio", label: 'E.1 Get along with your Oldest child'},
                { type: "radio", label: 'E.2 Get along with your 2nd oldest child'},
                { type: "radio", label: 'E.3 Get along with your 3rd oldest child'},
                { type: "radio", label: 'E.4 Get along Other children'},
                { type: "radio", label: 'F. Get along with your stepchildren'},
              ]
           },
           {
            name: 'Job',
            type: 'normal',
            questions: [
             {
              type: 'radio',
              labels: "At any time in the past 6 months, did you have any paid jobs (including self-employment and military service)?",
              options: ["No--Please skip to 'Education' section", 
              'Yes--please describe your job(s) in the field below:'],
             },
             {
              type: 'text',
              label: 'Job Description',
             }],
           },  
           { 
             name: 'Work Experience',
             type: 'grid', 
             labels: ['Not True', 'Somewhat or Sometimes True', 'Very True or Often True'],
             desc: "Choose option 0, 1, or 2 for items A-I to describe your work experience during the past 6 months:",
              questions: [
               { type: "radio", label: 'A. I work well with others'},
               { type: "radio", label: 'B. I have trouble getting along with bosses'},
               { type: "radio", label: 'C. I do my work well'},
               { type: "radio", label: 'D. I have trouble finishing my work'},
               { type: "radio", label: 'E. I am satisfied with my work situation'},
               { type: "radio", label: 'F. I do things that may cause me to lose my job'},
               { type: "radio", label: "G. I stay away from my job even when I'm not sick or not on a vacation"},
               { type: "radio", label: 'H. My job is too stressful for me'},
               { type: "radio", label: 'I. I worry too much about work'},
               ]
           },
           {
            name: 'Education',
            type: 'normal',
            questions: [
            {
              type: 'radio',
              labels: "At any time in the past 6 months, did you attend school, college, or any other educational or training program?",
              options: ['No--Please skip to the next section',
              'Yes--What kind of school or program?'],
            },
            {
              type: 'text',
              label: 'Education Description',
            }],
          },
          {
            name: 'Education Experience',
            type: 'grid',
            labels: ['Not True', 'Somewhat or Sometimes True', 'Very True or Often True'],
            desc: "Choose option 0, 1, or 2 for items A-E to describe your educational experience during the past 6 months",
            questions: [
            { type: "radio", label: 'A. I get along well with other students'},
            { type: "radio", label: 'B. I achieve what I am capable of'},
            { type: "radio", label: 'C. I have trouble finishing assignments'},
            { type: "radio", label: 'D. I am satisfied with my educational situation'},
            { type: "radio", label: 'E. I do thingst hat may cause me to fail'},
            ],
          },
          {
            name: 'Other Questions', 
            type: 'normal',
            desc: "Do you have any illness, disability, or handicap?",
            questions: [
            {
              type: 'radio',
              options: [
              'No', 
              'Yes--please describe'],
            },
            {
              type: 'text',
              label: 'If "yes" describe below',
            }],
          },
          {
            name: 'Concerns',
            type: 'normal',
            desc: "Please describe your concerns or worries about family, work, education, or other things:",
            questions: [
            {
              type: 'text',
            },
            {
              type: 'radio',
              options: [
              'No Concerns',
              ],
            }],
          },
          {
            name: 'Describe Yourself',
            type: 'normal',
            desc: "Please describe the best things about yourself",
            questions: [
            {
              type: 'text',
            }],
          },
          { 
            name: 'Education Experience',
            type: 'grid',
            labels: ['Not True', 'Somewhat or Sometimes True', 'Very True or Often True'],
            desc: "Below is a list of items that describe people.  For each item, please circle 0, 1, or 2 to describe yourself over the past 6 month.  Please answer all items as well as you can, even if some do not seem to apply to you.",
            questions: [ 
              { type: "radio", label: '1. I am too forgetful'},
              { type: "radio", label: '2. I make good use of my opportunities'},
              { type: "radio", label: '3. I argue a lot'},
              { type: "radio", label: '4. I work up to my ability'},
              { type: "radio", label: '5. I blame others for my problems'},
              { type: "radio", label: '6. I use drugs (other than alcohol and nicotine) for nonmedical purposes (describe)'}, //make open field for this questions
              { type: "radio", label: '7. I brag'},
              { type: "radio", label: '8. I have trouble concentrating or paying attention for long'},
              { type: "radio", label: "9. I can't get my mind off certain thoughts (describe):"}, //make open field for this question
              { type: "radio", label: '10. I have trouble sitting still'},
              { type: "radio", label: '11. I am too dependent on others'},
              { type: "radio", label: '12. I feel lonely'},
              { type: "radio", label: '13. I feel confused or in a fog'},
              { type: "radio", label: '14. I cry a lot'},
              { type: "radio", label: '15. I am pretty honest'},
              { type: "radio", label: '16. I am mean to others'},
              { type: "radio", label: '17. I daydream a lot'},
              { type: "radio", label: '19. I try to get a lot of attention'},
              { type: "radio", label: '20. I damage or destroy my things'},
              { type: "radio", label: '21. I damage or destroy things belonging to others'},
              { type: "radio", label: '22. I worry about my future'},
              { type: "radio", label: '23. I break rules at work or elsewhere'},
              { type: "radio", label: "24. I don't eat as well as I should"},
              { type: "radio", label: "25. I don't get along with other people"},
              { type: "radio", label: "26. I don't feel guilty after doing something I shouldn't"},
              { type: "radio", label: '27. I am jealous of others'},
              { type: "radio", label: '28. I get along badly with my family'},
              { type: "radio", label: '29. I am afraid of certain animals, situations, or places (describe'}, //make open field for this
              { type: "radio", label: '30. My relations with the opposite sex are poor'},
              { type: "radio", label: '31. I am afraid I might think or do something bad'},
              { type: "radio", label: '32. I feel that I ahve to be perfect'},
              { type: "radio", label: '33. I feel that no one loves me'},
              { type: "radio", label: '34. I feel that others are out to get me'},
              { type: "radio", label: '35. I feel that others are out to get me'},
              { type: "radio", label: '36. I accidentally get hurt a lot, accident-prone'},
              { type: "radio", label: '37. I get in many fights'},
              { type: "radio", label: '38. My relations with neighbors are poor'},
              { type: "radio", label: '39. I hang around people who get in trouble'},
              { type: "radio", label: "40. I hear sounds or voices that other people think aren't there (describe):"}, //make open field for this
              { type: "radio", label: '41. I am impulsive or act without thinkng'},
              { type: "radio", label: '42. I would rather be alone than with others'},
              { type: "radio", label: '43. I lie or cheat'},
              { type: "radio", label: '44. I feel overwhelmed by my responsibilities'},
              { type: "radio", label: '45. I am nervous or tense'},
              { type: "radio", label: '46. Parts of my body twitch or make nervous movements (describe)'}, //make open field
              { type: "radio", label: '47. I lack self-confidence'},
              { type: "radio", label: '48. I am not liked by others'},
              { type: "radio", label: '49. I can do certain things better than other people'},
              { type: "radio", label: '50. I am too fearful or anxious'},
              { type: "radio", label: '51. I feel dizzy or lightheaded'},
              { type: "radio", label: '52. I feel too guilty'},
              { type: "radio", label: '53. I have trouble planning for the future'},
              { type: "radio", label: '54. I feel tired without good reason'},
              { type: "radio", label: '55. My moods swing between elation and depression'},
              { type: "normal", label: '56. Physical problems without known medical cause'}, //ask Will about this
              { type: "radio", label: '56a. Aches or pains (not stomach or headaches)'},
              { type: "radio", label: '56b. Headaches'},
              { type: "radio", label: '56c. Nausea, feel sick'},
              { type: "radio", label: '56d. Problems with eyes (not if corrected by glases) (describe):'}, //make open field
              { type: "radio", label: '56e. Rashes or other skin problems'},
              { type: "radio", label: '56f. Stomachaches'},
              { type: "radio", label: '56g. Vomiting, trowing up'},
              { type: "radio", label: '56h. Heart pounding or racing'},
              { type: "radio", label: '56i. Numbness or tingling in body parts'},
              { type: "radio", label: '57. I physically attack people'},
              { type: "radio", label: '58. I pick my sckin or other parts of my body (describe):'}, //make open field
              { type: "radio", label: '59. I fail to finish things I should do'},
              { type: "radio", label: '60. There is very little that I enjoy'},
              { type: "radio", label: '61. My work performance is poor'},
              { type: "radio", label: '62. I am poorly coordinated or clumsy'},
              { type: "radio", label: '63. I would rather be with older people than with people than with people of my own age'},
              { type: "radio", label: '64. I have trouble settling priorities'},
              { type: "radio", label: '65. I refuse to talk'}, 
              { type: "radio", label: '66. I repeat certain acts over and over (describe)'}, //make open field
              { type: "radio", label: '67. I have trouble making or keeping friends'},
              { type: "radio", label: '68. I scream or yell a lot'},
              { type: "radio", label: '69. I am secretive or keep things to myself'},
              { type: "radio", label: "70. I see things that other people think aren't there (describe):"},
              { type: "radio", label: '71. I am self-conscious or easily embarrassed'},
              { type: "radio", label: '72. I worry about my family'},
              { type: "radio", label: '73. I meet my responsibilities to my family'},
              { type: "radio", label: '74. I show off or clown'},
              { type: "radio", label: '75. I am too shy or timid'},
              { type: "radio", label: '76. My behavior is irresponsible'},
              { type: "radio", label: '77. I sleep more than most other people during day and/or night (describe):'}, //make open field
              { type: "radio", label: '78. I have trouble making decisions'},
              { type: "radio", label: '79. I have a speech problem (describe):'}, //make open field
              { type: "radio", label: '80. I stand up for my rights'},
              { type: "radio", label: '81. My behavior is very changeable'},
              { type: "radio", label: '82. I steal'},
              { type: "radio", label: '83. I am easily bored'},
              { type: "radio", label: '84. I do things that other people think are strange (describe):'}, //make open field
              { type: "radio", label: '85. I have thoughts that other people would think are strange (describe):'}, //make open field
              { type: "radio", label: '86. I am stubborn, sullen, or irritable'},
              { type: "radio", label: '87. My moods or feelings change suddenly'},
              { type: "radio", label: '88. I enjoy being with people'},
              { type: "radio", label: '89. I rush into things without considering the risks'},
              { type: "radio", label: '90. I drink too much alcohol or get drunk'},
              { type: "radio", label: '92. I do things that may cause me trouble with the law (describe):'}, //make open field
              { type: "radio", label: '93. I talk too much'},
              { type: "radio", label: '94. I tease others a lot'},
              { type: "radio", label: '95. I have a hot temper'},
              { type: "radio", label: '96. I think about sex too much'},
              { type: "radio", label: '97. I threaten to hurt people'},
              { type: "radio", label: '98. I like to help others'},
              { type: "radio", label: '99. I dislike staying in one place for very long'},
              { type: "radio", label: '100. I have trouble sleeping (describe):'}, // make open field
              { type: "radio", label: "101. I stay away from my job even when I'm not sick or not on vacation"},
              { type: "radio", label: "102. I don't have much energy"},
              { type: "radio", label: '103. I am unhappy, sad, or depressed'},
              { type: "radio", label: '104. I am louder than others'},
              { type: "radio", label: '105. People think I am disorganized'},
              { type: "radio", label: '106. I try to be fair to others'},
              { type: "radio", label: "107. I feel that I can't succeed"},
              { type: "radio", label: '108. I tend to lose things'},
              { type: "radio", label: '109. I like to try new things'},
              { type: "radio", label: '110. I wish I were of the opposite sex'},
              { type: "radio", label: '111. I keep from getting involved with others'},
              { type: "radio", label: '112. I worry a lot'},
              { type: "radio", label: '113. I worry about my relations with the opposite sex'},
              { type: "radio", label: '114. I fail to pay my debts or meet other financial responsibilities'},
              { type: "radio", label: '115. I feel resless or fidgety'},
              { type: "radio", label: '116. I get upset to easily'},
              { type: "radio", label: '117. I have trouble managing money or credit cards'},
              { type: "radio", label: '118. I am too impatient'},
              { type: "radio", label: '119. I am not good at details'},
              { type: "radio", label: '120. I drive too fast'},
              { type: "radio", label: '121. I tend to be late for appointments'},
              { type: "radio", label: '122. I have trouble keeping a job'},
              { type: "radio", label: '123. I am a happy person'},
            ]   
          },
          {
            name: "In the past 6 months...", 
            type: "normal",
            questions: [
              { 
                type: 'text',
                label: "In the 6 months, about how many times per day did you use tobacco (including smokeless tobacco)?",
              },
              {
                type: 'text',
                label: "In the past 6 months, about how many times per day did you use tobacco (including smokeless tobacco)?",
              },
              { 
                type: 'text',
                label: "In the past 6 months, on how many days did you use drugs for nonmedical purposes (including marijuana, cocaine, and other drugs, except alcohol and nicotine)?",
              }
              ]
          }  
    ]        
};

    var RewardRanking = {
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
      };

    var Demographic = {
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
      };
  
    var questioneers = [
    ASR,
    RewardRanking,
    Demographic
    ]
  