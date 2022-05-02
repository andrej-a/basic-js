const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

 class VigenereCipheringMachine {
  constructor(order = true){
      this.alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  }

  letterToNumber(message, key) {
      let m = message.replace(/[^A-Z]/gi, "").toUpperCase();//убираем все, кроме букв
      let k = key.length > m.length ? key.slice(0, m.length).toUpperCase() : key.toUpperCase();//если ключ длиннее -- обрезаем
      let messageNumbers = [];//массив для цифр сообщения
      let keyNumber = []; //массив для цифр ключа

      this.alph.map((lett, i) => {
          for (let j = 0; j < m.length; j++) {
              if (lett === m[j]) {
                  messageNumbers.push(i + 1);
                  console.log(messageNumbers);
              }
          }
      });

      this.alph.map((lett, i) => {
          for (let j = 0; j < k.length; j++) {
              if (lett === k[j]) {
                  keyNumber.push(i + 1);
              }
          }
      });

  }

  encrypt(message, key) {
      if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    
  }
  decrypt(message, key) {
      if (!message || !key) {
          throw new Error("Incorrect arguments!");
      }  
  }
}

module.exports = {
  VigenereCipheringMachine
};
