const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr)) {
  
  let newarray = [];
  for (let i = 0; i < arr.length; i++) {
   if (arr[i] === `--discard-next` || arr[i] === `--discard-prev` || arr[i] === `--double-next` || arr[i] ===  `--double-prev`) {
     switch(arr[i]) {
       case `--discard-next`: 
       if (typeof arr[i+1] !== 'undefined') {
       i+=2;
       }
       break;
       case `--discard-prev`: 
       if (typeof arr[i-1] !== 'undefined') {
       let newInd = newarray.indexOf(arr[i-1]);
       newarray.splice(newInd, 1);
       }
       break;
       case `--double-next`: 
       if (typeof arr[i+1] !== 'undefined') {
       newarray.push(arr[i+1]);
       }
       break;
       case `--double-prev`: 
       if (typeof arr[i-1] !== 'undefined') {
       newarray.push(arr[i-1]);
       }
       break;
     }
   } else  {
     newarray.push(arr[i]);
   }
  } 
  return newarray;
} else {
  throw new Error("'arr' parameter must be an instance of the Array!");
}
}

module.exports = {
  transform
};
