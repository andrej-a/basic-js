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
    this.arraysArray = [];
    this.counterArray = [];
    this.counter = 1;
  }

  getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

  calculateDepth(array) {
    if (array.length === 0) {
      return 1;
    }
    array.map((elem, i) => {
      if (Array.isArray(elem)) {
        this.counter += 1;
        return this.calculateDepth(elem);
      } else {
        this.counterArray.push(this.counter);
        this.counter = 1;
        console.log(this.getMaxOfArray(this.counterArray));
        return this.getMaxOfArray(this.counterArray) + 1;
      }
    });
  }
}

module.exports = {
  DepthCalculator
};
