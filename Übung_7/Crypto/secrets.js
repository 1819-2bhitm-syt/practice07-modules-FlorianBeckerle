encrypt = require("./encrypt.js");
decrypt = require("./decrypt.js");

let passwort = "#1234IchTrinkGerneBier";
let plaintext = "You will never guess this text! XD";

console.log("Bitte geben Sie einen Text ein: ");
console.log(plaintext);
console.log(" ");
console.log("Bitte geben sie ihr Passwort für die Verschlüsselung ein:");
console.log(passwort);
console.log(" ");

 encrypt = encrypt.Encrypt(passwort, plaintext);

 console.log("Verschlüsselter Text:");
 console.log(encrypt);

 decrypt = decrypt.decryptText(passwort, encrypt);

 console.log("");
console.log("Entschlüsselter Text:");
console.log(decrypt);
