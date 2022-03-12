# keplr-key-to-terra

## description
when keplr wallet is created with google account - it only allows to export private key, not the seed phrase.
this private key cannot be imported as is into terra station.
code in this repo converts keplr private key to importable terra private key

## prerequisites
* the following installed of recent versions: 
  * node with npm

## setup
* clone the repo
* run 
  ```bash
  npm install
  ```
* set variables in app.js
  * must be set:
    * **KEPLR_PRIVATE_KEY** - keplr private key without 0x
    * **TERRA_ADDRESS_IN_KEPLR** - keplr terra public address (terra1...)
    * [optional] **NAME** - wallet name imported to terra station (set to keplrwallet by deafult)
    * **PASSWORD_IN_TERRA** - password for the wallet when imported to terra station

## execution
  ```bash
  npm start
  ```
* console should print the private key importable to terra

## import wallet to terra station
* use printed key in the console as private key
* use PASSWORD_IN_TERRA as password
