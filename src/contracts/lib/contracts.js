// import Web3 from 'web3'
import * as Types from './types.js';
import {
  // SUBTRACT_GAS_LIMIT,
  contractAddresses,

} from './constants.js';

import EscrowAbi from './abi/escrowContract.json';
import Erc20Abi from './abi/erc20.json';
import PaymentSplitterAbi from './abi/paymentSplitter.json'
import VestingWalletAbi from './abi/vestingWallet.json'
import Erc721AAbi from './abi/erc721A.json' 
import Erc1155DAbi from './abi/erc1155D.json'

export class Contracts {
  constructor(provider, networkId, web3, options) {
    this.web3 = web3;
    this.defaultConfirmations = options.defaultConfirmations;
    this.autoGasMultiplier = options.autoGasMultiplier || 1.5;
    this.confirmationType =
        options.confirmationType || Types.ConfirmationType.Confirmed;
    this.defaultGas = options.defaultGas;
    this.defaultGasPrice = options.defaultGasPrice;
    console.log("this web3 = ", this.web3);
   
  
    this.erc1155D = new this.web3.eth.Contract(Erc1155DAbi);



    this.setProvider(provider, networkId);
    this.setDefaultAccount(this.web3.eth.defaultAccount);
  }

  setProvider(provider, networkId) {
    const setProvider = (contract, address) => {
      contract.setProvider(provider);
      if (address) contract.options.address = address;
      else console.error('Contract address not found in network', networkId);
    }


    setProvider(this.erc1155D, contractAddresses.erc1155D[networkId]);
   

   
  }

  setDefaultAccount(account) {
    //this.escrow.options.from = account;
  }
}
