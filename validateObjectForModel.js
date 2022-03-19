// Assuming string having any numeric value to be float
const tryStrToFloat = s => {
    s = s.replace(/[^\d.-]/g, '')
    s = parseFloat(s)
    return s.toString() == 'NaN' ? null : s
}

const dfs = jsObject => {
    if (typeof (jsObject) === 'number') return jsObject
    if (typeof (jsObject) === 'string') return tryStrToFloat(jsObject)

    let newObj = {}
    for (const [key, val] of Object.entries(jsObject)) {
        if (key === 'elevatorInfo'){
            newObj[key] = val
            continue
        }
        newObj[key] = dfs(val)
    }
    return newObj
}

const validateObjectForModel = jsObject => {
    console.log('------------ From validateObject ------------')
    console.log(jsObject)
    const newData = dfs(jsObject)

    // Converting previously ignoured value into Int Number
    newData.elevatorInfo.Institution_Characteristics.Unitid = parseInt(newData.elevatorInfo.Institution_Characteristics.Unitid, 10) 
    return newData
}

module.exports = validateObjectForModel