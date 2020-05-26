// The goal is `ENCRYPTING`, not `HASHING`
const { encrypt, decrypt } = require("./lib/encryption");

const saveIdentity = (identity) => {
  const { ssn, ...identityValues } = identity;

  const encryptedSsn = encrypt(ssn);
  const decryptedSsn = decrypt(encryptedSsn);

  const normalizedIdentity = {
    ...identityValues,
    plainSsn: ssn,
    encryptedSsn,
    decryptedSsn,
  };

  console.log({ normalizedIdentity });
};

const identityMock = {
  name: "Foo Bar",
  key: "social security",
  // ssn: "078-05-1120",
  ssn: "078051120",
  placeOfIssue: "US",
};

saveIdentity(identityMock);
