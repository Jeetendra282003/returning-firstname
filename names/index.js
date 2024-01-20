const getArrayNames = require('../country/state/city/index')
const getName = require('../utilities/utils/index')

console.log(getArrayNames)
console.log(getName)

const getPeopleInCity = nameList => {
  return getName(nameList)
}

module.exports = getPeopleInCity
