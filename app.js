const mongoose = require('mongoose') // A high level mongodb interface for general purpose
const AidretentionandgraduationsModel = require('./models/aidretentionandgraduationsModel')
const UniversityModel = require('./models/universityModel')
const  validateObjectForModel = require('./validateObjectForModel')
const fs = require('fs');

// Connect to database
mongoose.connect(process.env.VIBES_MONGODB_URL, {
  keepAliveInitialDelay: 36000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: false,
})

const queryCollection = async query => {
  return await AidretentionandgraduationsModel.find(
    {},
    "unitId financialAid retentionAndGraduation -_id"
  ).exec()
}

// Parsing the data.js file
const readFile = async file => {
  const dataBuffer = await fs.readFileSync(file);
  return JSON.parse(dataBuffer);
}

// Add document to univeristy collection
const init = async query => {
  try {
    const response = await queryCollection()
    console.log('------- response ----------')
    console.log(response)

    const data = await readFile('data.json')
    console.log('------- data.json ----------')
    console.log(data);

    let universityCollection = []
    for (d of data) {
      for (r of response) {
        if (d.elevatorInfo.Institution_Characteristics.Unitid == r._doc.unitId) {
          const document = { ...r._doc, studentCharges : d.studentCharges, elevatorInfo: d.elevatorInfo }
          universityCollection.push(validateObjectForModel(document))
        }
      }
    }
    console.log('------- University Collection ----------')
    console.log(universityCollection)

    // Creating new object to store in university model
    univeristyResult = await UniversityModel.insertMany(universityCollection)

  } catch (error) {
    console.log(error)
  } finally {
    mongoose.connection.close()
  }
}

init()