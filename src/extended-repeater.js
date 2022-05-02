const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options;
  [str, addition].forEach(elem => {
      elem = elem ? elem.toString() : elem;
  });
  separator = separator ? separator : "+";
  additionSeparator = additionSeparator ? additionSeparator : '|';

  function setAddition() {
      let additionString = "";
      if (!additionRepeatTimes && addition) {
          return addition;
      }
      for (let i = 1; i <= additionRepeatTimes; i++) {
          if (i < additionRepeatTimes) {
              additionString = (additionString + addition + additionSeparator);
          } else {
              additionString = (additionString + addition);
          }
      }
      return additionString;
  }

  function setResult() {
      let result = "";
      if (!repeatTimes) {
          return str + setAddition();
      }

      for (let i = 1; i <= repeatTimes; i++) {
          if (i < repeatTimes) {
              result = result + str + setAddition() + separator;
          } else {
              result = result + str + setAddition();
          }
      }
      return result;
  }
  
  return setResult();
}


module.exports = {
  repeater
};
