// The ideia is `ENCRYPTING`, not `HASHING`

/**
 * ENCRYPTING is a two-way function.
 * It is possible to encrypt and decrypt values.
 * Works properly for sensible data
 */

const crypto = require("crypto");

const algorithm = "aes-128-cbc";
const iv = crypto.randomBytes(16);
const salt = "CHOOSE_A_SALT_YOU_WANT";
const hash = crypto.createHash("sha1");

hash.update(salt);

// `hash.digest()` returns a Buffer by default when no encoding is given
const key = hash.digest().slice(0, 16);

const encrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text);

  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString("hex");
};

const decrypt = (text) => {
  const encryptedText = Buffer.from(text, "hex");
  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString();
};

module.exports = {
  encrypt,
  decrypt,
};
