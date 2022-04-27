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
  if ( !(arr instanceof Array) ) {
      throw Error("'arr' parameter must be an instance of the Array!");
  }

  let transformArray = arr.slice(0);

  transformArray.map((item, i) => {
      if (item === '--double-next') {
          transformArray[i + 1] ? transformArray.splice(i, 1, transformArray[i + 1]) : transformArray.splice(i, 1);    
      } else if (item === '--discard-next') {
          transformArray[i + 1] ? transformArray.splice(i, 2, undefined) : transformArray.splice(i, 1);
      } else if (item === '--double-prev') {
          transformArray[i - 1] ? transformArray.splice(i, 1, transformArray[i - 1]) : transformArray.splice(i, 1);
      } else if (item === '--discard-prev') {
          transformArray[i - 1] ? transformArray.splice(i - 1, 2, undefined) : transformArray.splice(i, 1);
      }
  });

  transformArray = transformArray.filter(item => item);

  return transformArray;

}

module.exports = {
  transform
};
