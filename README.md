# keplr-key-to-terra

## description
converts keplr private key to terra private key

## prerequisites
* the following installed of recent versions: 
  * node with npm
  * yarn (optional)

## setup
* clone the repo
* run 
  ```bash
  yarn install 
  ```
  or 
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
  yarn start 
  ```    
  or 
  ```bash
  npm start
  ```
* console should print the private key importable to terra
