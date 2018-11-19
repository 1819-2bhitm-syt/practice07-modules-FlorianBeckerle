function Encrypt(passwort, plaintext){
    const crypto = require('crypto');
    const cipher = crypto.createCipher('aes192', passwort);

    this.passwort = passwort;
    this.plaintext = plaintext;
    this.encrypted = cipher.update(this.plaintext, 'utf8', 'hex');
    this.encrypted += cipher.final('hex');
    return this.encrypted;
}

module.exports.Encrypt = Encrypt;
