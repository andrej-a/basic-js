const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

 class DepthCalculator {
  constructor() {
      
  }
  calculateDepth(array) {
  this.res = 1;
    for(let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
          this.res += this.calculateDepth(array.flat());
          break;
      }
    }
    return this.res;
  }
}

module.exports = {
  DepthCalculator
};
