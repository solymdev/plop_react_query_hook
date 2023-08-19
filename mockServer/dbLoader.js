const test6Data = require('./data/test6Data.json')
const testingData = require('./data/testingData.json');
const testData = require('./data/testData.json');
// IMPORT JSON FILES

module.exports = function () {
  return {
    ...test6Data,
    	...testingData,
	...testData,
// EXPORT JSON FILES
  }
}
