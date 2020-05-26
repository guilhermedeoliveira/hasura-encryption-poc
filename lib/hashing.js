/**
 * HASHING is a one-way function.
 * It is not possible to retrieve the value once it is hashed.
 * It can only be compared: `compare(plainText, hashedText)`
 * works properly for password
 */

const bcrypt = require("bcrypt");

const saltRounds = 10;

export const encryptValue = async (plainText) => {
  try {
    const hashedValue = await bcrypt.hash(plainText, saltRounds);
    return hashedValue;
  } catch (error) {
    console.log({ error });
  }
};

export const decryptedValue = async (plainText) => {
  try {
    const hashedValue = await bcrypt.compare(plainText, saltRounds);
    return hashedValue;
  } catch (error) {
    console.log({ error });
  }
};
