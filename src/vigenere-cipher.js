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
  constructor(reverse = true) {
    if (typeof reverse !== 'boolean') {
      throw new Error('Reverse parameter must be a boolean.');
    }

    this.reverse = reverse;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  checkArgs(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
  }

  encrypt(message, key) {
    this.checkArgs(message, key);

    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptedMessage = "";

    for (let i = 0, j = 0; i < message.length; i++) {
      const char = message[i];

      if (this.alphabet.indexOf(char) === -1) {
        encryptedMessage += char;
      } else {
        const charCode = (message.charCodeAt(i) + key.charCodeAt(j % key.length)) % 26;
        encryptedMessage += this.alphabet.charAt(charCode);
        j++;
      }
    }

    return this.reverse ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    this.checkArgs(encryptedMessage, key);

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let decryptedMessage = "";

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage[i];

      if (this.alphabet.indexOf(char) === -1) {
        decryptedMessage += char;
      } else {
        const charCode = (encryptedMessage.charCodeAt(i) - key.charCodeAt(j % key.length) + 26) % 26;
        decryptedMessage += this.alphabet.charAt(charCode);
        j++;
      }
    }

    return this.reverse ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

console.log(directMachine.encrypt('attack at dawn!', 'alphonse')); // 'AEIHQX SX DLLU!'
console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')); // 'ATTACK AT DAWN!'
console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse')); // '!ULLD XS XQHIEA'
console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')); // '!NWAD TA KCATTA'

module.exports = {
  VigenereCipheringMachine
};
