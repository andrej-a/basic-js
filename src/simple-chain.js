const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  string: "",
  getLength() {
    return this.string.split("~~").length - 1;
  },
  addLink( value ) {
    this.string += this.string.length > 0 ? `~~( ${"" + value} )` : `( ${"" + value} )`;
    return this;
  },
  removeLink(position) {
      if (isNaN(position) ||
      position > this.getLength() ||
      !Number.isInteger(position)||
      position <= 0) {
          this.string = "";
          throw new Error("You can't remove incorrect link!");
      }

      let start = this.string.split("~~").splice(0, position - 1);
      let end = this.string.split("~~").splice(position);
      this.string = [...start, ...end].join("~~");
      return this;
  },
  reverseChain() {
      this.string = this.string.split("~~").reverse().join("~~");
      return this;
  },
  finishChain() {
      let res = this.string;
      this.string = "";
    return res;
  }
};

module.exports = {
  chainMaker
};
