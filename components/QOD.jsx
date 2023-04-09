// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';


export default function SafetySurvey(){
  const surveyJson = {
    elements: [
      {
        name: "q1",
        title: "What should you do in case of a fire?",
        type: "radiogroup",
        choices: [
          {
            value: "a",
            text: "Stay inside the building"
          },
          {
            value: "b",
            text: "Call a friend"
          },
          {
            value: "c",
            text: "Evacuate the building immediately"
          }
        ],
        correctAnswer: "c",
        validators: [
          {
            type: "expression",
            text: "Incorrect answer. The correct answer is: Evacuate the building immediately",
            expression: "{q1} = 'c'"
          }
        ]
      },
      {
        name: "q2",
        title: "What type of equipment should you wear when working with hazardous chemicals?",
        type: "radiogroup",
        choices: [
          {
            value: "a",
            text: "No equipment is necessary"
          },
          {
            value: "b",
            text: "Personal Protective Equipment (PPE)"
          },
          {
            value: "c",
            text: "Safety shoes"
          }
        ],
        correctAnswer: "b",
        validators: [
          {
            type: "expression",
            text: "Incorrect answer. The correct answer is: Personal Protective Equipment (PPE)",
            expression: "{q2} = 'b'"
          }
        ]
      },
      {
        name: "q3",
        title: "What should you do if you suspect a gas leak?",
        type: "radiogroup",
        choices: [
          {
            value: "a",
            text: "Light a match to see if there is a gas leak"
          },
          {
            value: "b",
            text: "Call the gas company or emergency services"
          },
          {
            value: "c",
            text: "Ignore it and go to bed"
          }
        ],
        correctAnswer: "b",
        validators: [
          {
            type: "expression",
            text: "Incorrect answer. The correct answer is: Call the gas company or emergency services",
            expression: "{q3} = 'b'"
          }
        ]
      },
        {
          name: "q4",
          title: "What is the best way to prevent a slip, trip, or fall?",
          type: "radiogroup",
          choices: [
            {
              value: "a",
              text: "Wear shoes with high heels"
            },
            {
              value: "b",
              text: "Walk quickly"
            },
            {
              value: "c",
              text: "Wear slip-resistant shoes and watch your step"
            }
          ],
          correctAnswer: "c",
          validators: [
            {
              type: "expression",
              text: "Incorrect answer. The correct answer is: Wear slip-resistant shoes and watch your step",
              expression: "{q4} = 'c'"
            }
          ]
        },
        {
          name: "q5",
          title: "What should you do if you see a suspicious package or letter in the mail?",
          type: "radiogroup",
          choices: [
            {
              value: "a",
              text: "Open it to see what's inside"
            },
            {
              value: "b",
              text: "Leave it alone and ignore it"
            },
            {
              value: "c",
              text: "Report it to the authorities immediately"
            }
          ],
          correctAnswer: "c",
          validators: [
            {
              type: "expression",
              text: "Incorrect answer. The correct answer is: Report it to the authorities immediately",
              expression: "{q5} = 'c'"
            }
          ]
        },
        {
          name: "q6",
          title: "What should you do if you spill a hazardous chemical?",
          type: "radiogroup",
          choices: [
            {
              value: "a",
              text: "Leave it there and hope someone else cleans it up"
            },
            {
              value: "b",
              text: "Clean it up immediately using the appropriate procedures and equipment"
            },
            {
              value: "c",
              text: "Ignore it and go home"
            }
          ],
          correctAnswer: "b",
          validators: [
            {
              type: "expression",
              text: "Incorrect answer. The correct answer is: Clean it up immediately using the appropriate procedures and equipment",
              expression: "{q6} = 'b'"
            }
          ]
        },
          
            {
              name: "q7",
              title: "What should you do if you smell gas in your home?",
              type: "radiogroup",
              choices: [
                {
                  value: "a",
                  text: "Light a match to see if there's really a gas leak"
                },
                {
                  value: "b",
                  text: "Turn off the gas supply and open the windows and doors"
                },
                {
                  value: "c",
                  text: "Call a friend to come over and help"
                }
              ],
              correctAnswer: "b",
              validators: [
                {
                  type: "expression",
                  text: "Incorrect answer. The correct answer is: Turn off the gas supply and open the windows and doors",
                  expression: "{q7} = 'b'"
                }
              ]
            },
            {
              name: "q8",
              title: "What should you do if you witness a workplace accident?",
              type: "radiogroup",
              choices: [
                {
                  value: "a",
                  text: "Keep working and pretend you didn't see anything"
                },
                {
                  value: "b",
                  text: "Report the accident to your supervisor or HR department immediately"
                },
                {
                  value: "c",
                  text: "Blame the accident on someone else to avoid getting in trouble"
                }
              ],
              correctAnswer: "b",
              validators: [
                {
                  type: "expression",
                  text: "Incorrect answer. The correct answer is: Report the accident to your supervisor or HR department immediately",
                  expression: "{q8} = 'b'"
                }
              ]
            },
            {
              name: "q9",
              title: "What should you do if you see someone experiencing an electric shock?",
              type: "radiogroup",
              choices: [
                {
                  value: "a",
                  text: "Touch the person to try to get them to stop shaking"
                },
                {
                  value: "b",
                  text: "Call 911 or your local emergency number immediately"
                },
                {
                  value: "c",
                  text: "Pour water on the person to try to stop the electric shock"
                }
              ],
              correctAnswer: "b",
              validators: [
                {
                  type: "expression",
                  text: "Incorrect answer. The correct answer is: Call 911 or your local emergency number immediately",
                  expression: "{q9} = 'b'"
                }
              ]
            },
              {
                name: "q10",
                title: "What is the most common cause of house fires?",
                type: "radiogroup",
                choices: [
                  {
                    value: "a",
                    text: "Leaving the stove on"
                  },
                  {
                    value: "b",
                    text: "Overloaded electrical outlets"
                  },
                  {
                    value: "c",
                    text: "Candles left burning"
                  }
                ],
                correctAnswer: "b",
                validators: [
                  {
                    type: "expression",
                    text: "Incorrect answer. The correct answer is: Overloaded electrical outlets",
                    expression: "{q10} = 'b'"
                  }
                ]
              }
            ]
          };
        
  
  const survey = new Model(surveyJson);

  return <Survey model={survey} />;
}
