To install package run `npm install`

Add mongodb credentials to environment key `VIBES_MONGODB_URL`

The `university` will to renamed to `universities` when connecting to mongodb server.

Run the script `npm run start`

# Task 1
#### step 1
See data.json where you will find
`{
    studentCharges,
    elevatorInfo
}`


 and see collection stored in mongodb atlas in the following uri address you will find three attribute i
 uri = `mongodb+srv://test:test@cluster0.b6utj.mongodb.net/vibesBackendChallenge?retryWrites=true&w=majority`

`
new Schema({
        financialAid: Mixed,
        retentionAndGraduation: Mixed,
        unitId: Number
    })
`
 
  Merged those two datas (data.json and document stored in mongodb) with key of unitId present in both, and name that new collection 'university'. 

  Data.json has 9 doc and model in mongodb `aidretentionandgraduations` also has 9 doc, merge it and form a new model called `university`


# Final Merged File Should look like:


## Data types:
#### number should be converted to number
#### null or NaN should be converted to placed if no number is present
object keys such as `Full-time,_First-time,_Degree/certificate-seeking_Undergraduate_Students` can be written in more better way `firstTimeFullTimeUndergrad`
        
Final data structure in univerity collection document should look like

```javascript
{ 
        "financialAid": {
                "Student_Financial_Aid": {
                    "All_Undergraduate_Students": {
                        "Percent_receiving_aid": "",
                        "Average_amount_of_aid_received": ""
                    },
                    "Any_Grant_Or_Scholarship_Aid": {
                        "Percent_receiving_aid": "90%",
                        "Average_amount_of_aid_received": "$5,603"
                    },
                    "Pell_Grants": {
                        "Percent_receiving_aid": "69%",
                        "Average_amount_of_aid_received": "$7,845"
                    },
                    "Federal_Student_Loans": {
                        "Percent_receiving_aid": "8%",
                        "Average_amount_of_aid_received": "$3,371"
                    },
                    "Full-time,_First-time,_Degree/certificate-seeking_Undergraduate_Students": {
                        "Percent_receiving_aid": "",
                        "Average_amount_of_aid_received": ""
                    }
                }
            },
            "retentionAndGraduation": {
                "Retention_And_Graduation": {
                    "Overall_Graduation_Rates": {
                        "Rate": " "
                    },
                    "Total": {
                        "Rate": "49%"
                    },
                    "Men": {
                        "Rate": "57%"
                    },
                    "Women": {
                        "Rate": "40%"
                    },
                    "Nonresident_Alien": {
                        "Rate": "100%"
                    },
                    "Transfer_Out-rate": {
                        "Rate": "7%"
                    }
                }
            },
            "unitId": "139384",
            "elevatorInfo": {
                "Institution_Characteristics": {
                    "Unitid": "139384",
                    "Name": "Georgia Northwestern Technical College",
                    "City": "Rome",
                    "State": "GA",
                    "Web_Address": "www.gntc.edu/",
                    "Distance_Learning": "Offers undergraduate courses and/or programs"
                }
            },
            "studentCharges": {
                "Cost": {
                    "Published_Tuition_And_Required_Fees": "",
                    "In-state": "$3,062",
                    "Out-of-state": "$5,462",
                    "Books_And_Supplies": "$1,500",
                    "Off-campus_(not_With_Family)_Room_And_Board": "$5,528",
                    "Off-campus_(not_With_Family)_Other_Expenses": "$5,191",
                    "Off-campus_(with_Family)_Other_Expenses": "$2,431",
                    "Total_Cost": "",
                    "Off-campus_(not_With_Family),_In-state": "$15,281",
                    "Off-campus_(not_With_Family),_Out_Of_State": "$17,681",
                    "Off-campus_(with_Family),_In-state": "$6,993",
                    "Off-campus_(with_Family),_Out-of-state": "$9,393"
                },
                "Level_of_student": {
                    "Undergraduate": {
                        "In-state": "$3,062",
                        "Out-of-state": "$5,462"
                    },
                    "Graduate": {
                        "In-state": "",
                        "Out-of-state": ""
                    }
                }
            }
 }
```


[more information ](https://docs.google.com/document/d/1ZVUobU6QXaJGLHm6uMW5GXPjoJh09NjwammPcta8zQk/edit?usp=sharing)

