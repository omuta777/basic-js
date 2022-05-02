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
  if (options.separator ===  undefined) {
    options.separator = '+';
  }
  if (options.additionSeparator ===  undefined) {
    options.additionSeparator = '|';
  }
function repeating (separator, string = '', repeatTimes = 1) {
  let newarray = [];
  for (let i = 0; i < repeatTimes; i++) {
    newarray.push(String(string));

  } 
  return newarray.join(separator);
}
const endResult = repeating (options.additionSeparator, options.addition, options.additionRepeatTimes);
options.separator  = endResult + options.separator;
return repeating(options.separator, str, options.repeatTimes) + endResult;
} 

module.exports = {
  repeater
};
