import CryptoJS from 'crypto-js';

const keySize = 256;
const iterations = 100;

export const encrypt = (msg, pass) => {
  try {
    const salt = CryptoJS.lib.WordArray.random(128 / 8);

    const key = CryptoJS.PBKDF2(pass, salt, {
      keySize: keySize / 32,
      iterations: iterations,
    })

    const iv = CryptoJS.lib.WordArray.random(128 / 8);

    const encrypted = CryptoJS.AES.encrypt(msg, key, {
      iv: iv,
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC,
    })

    const transitmessage = salt.toString() + iv.toString() + encrypted.toString();
    return transitmessage;
  } catch (error) {
    return ''
  }
}

const KEPLR_PRIVATE_KEY = "***";
const TERRA_ADDRESS_IN_KEPLR = "***";
const NAME = "keplrwallet";
const PASSWORD_IN_TERRA = "***";
const ENCRYPTED_KEY = encrypt(KEPLR_PRIVATE_KEY, PASSWORD_IN_TERRA);
const key = Buffer.from(`{
    "name":"${NAME}",
    "address":"${TERRA_ADDRESS_IN_KEPLR}",
    "encrypted_key":"${ENCRYPTED_KEY}"
}`).toString('base64');

console.log(key);
