//Alternative für Aufgabe 1
/*function Decrypt(passwort, encrypt){
    this.encrypt = encrypt;
    this.passwort = passwort;
    const crypto = require('crypto');
    const decipher = crypto.createDecipher('aes192', this.passwort);


    this.decrypted = decipher.update(this.encrypt, 'hex', 'utf8');
    this.decrypted += decipher.update('utf8');

    return this.decrypted;
}


module.exports.Decrypt = Decrypt;*/

function decryptText(password, plaintext){
    const crypto = require('crypto');
    const decipher = crypto.createDecipher('aes192', password);
    let decrypted;
    try {
        decrypted = decipher.update(plaintext, 'hex', 'utf8');
    } catch (err) {
        console.error('HASH-Code invalid!');
    }
    try {
        decrypted += decipher.final();
    } catch (err) {
        console.error('Authentication failed!');
    }
    return decrypted;
}

module.exports.decryptText = decryptText;