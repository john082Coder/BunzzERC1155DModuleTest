import { ethers } from 'ethers';

import BigNumber from 'bignumber.js';
import { useWeb3React } from "@web3-react/core";
import {
  // SUBTRACT_GAS_LIMIT,
  contractAddresses,
} from './lib/constants.js';
import { bnToDec } from './utils';
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});




export const getErc1155DContract = (bunzz) => {
  return bunzz && bunzz.contracts && bunzz.contracts.erc1155D;
}


export const setErc20ContractAddress = (bunzz, address) => {
  bunzz.contracts.erc20.options.address = address;
}
export const getAllowance = async (
  erc20Contract,
  escrowContract,
  account
) => {
  try {
    const allowance = await erc20Contract.methods
      .allowance(account, escrowContract.options.address)
      .call()
    return allowance
  } catch (e) {
    return '0'
  }
}
export const getDecimal = async (
  erc20Contract,
) => {
  try {
    const decimal = await erc20Contract.methods
      .decimals()
      .call()
      return new BigNumber(decimal);
  } catch (e) {
    return new BigNumber(0);
  }
}



export const mint = async (erc1155DContract, id, data, account) => {
  return erc1155DContract.methods.Mint(id, data).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const mintSingle = async (erc1155DContract, id,  account) => {
  return erc1155DContract.methods.MintSingle(id).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const setURI = async (erc1155DContract, uri,  account) => {
  return erc1155DContract.methods.setURI(uri).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}
