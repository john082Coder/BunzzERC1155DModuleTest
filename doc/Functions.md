# WRITE(main)

## transferFrom
Transfer a particular tokenId from the token owner to an certai address if the caller have the permision to transfer it

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|from|address|The token sender||N/A|
|to|address|The token receiver||N/A|
|tokenId|uint256|The id of the token that will be transfered||N/A|


## safeTransferFrom
Safely transfers the ownership of a given token ID

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|from|address|The token sender||N/A|
|to|address|The token receiver||N/A|
|tokenId|uint256|The id of the token that will be sent||N/A|
|_data|bytes|Optional data field||N/A|

## safeTransferFrom
Safely transfers the ownership of a given token ID

|Name|Type|Description|
|--- |---|---|
|from|address|The address of the token sender|
|to|address|The id of the token that will be receiver|
|tokenId|uint256|The id of the token that will be sents|

## approve
Gives an certain address permision to move tokens for the token owner

|Name|Type|Description|
|--- |---|---|
|to|address|Account to approve to spend caller balance|
|tokenId|uint256|Token id that will be approved to be user by other account|

## _setAux
Sets the auxillary data for `owner`. (e.g. number of whitelist mint slots used).

|Name|Type|Description|
|--- |---|---|
|owner|address|Owner address|
|aux|uint64|Auxillary data slots|

## setApprovalForAll

Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf.

|Name|Type|Description|
|--- |---|---|
|operator|address|The account that will be the balance operator|
|approved|bool|Approval status|

## _safeMint
Safely mints `quantity` tokens and transfers them to `to`.

|Name|Type|Description|
|--- |---|---|
|to|address|Mint to address|
|quantity|uint256|Mint quantity|
|_data|bytes memory|Safe mint data|

## _mint
Mints `quantity` tokens and transfers them to `to`.

|Name|Type|Description|
|--- |---|---|
|to|address|Mint to address|
|quantity|uint256|Mint quantity|

## _transfer
Transfers `tokenId` from `from` to `to`.

|Name|Type|Description|
|--- |---|---|
|from|address|Transfer from address|
|to|address|Transfer to address|
|tokenId|uint256|Token ID|

## _burn
Destorys `tokenId`.

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|Token ID|
|approvalCheck|bool|True for approved|

## _approve
Approve `to` to operate on `tokenId`

|Name|Type|Description|
|--- |---|---|
|to|address|Approve to address|
|tokenId|uint256|Token ID|
|owner|address|Owner address|

## _checkContractOnERC721Received
Internal function to invoke {IERC721Receiver-onERC721Received} on a target contract.

|Name|Type|Description|
|--- |---|---|
|from|address|Address representing the previous owner of the given token ID|
|to|address|Target address that will receive the tokens|
|tokenId|uint256|ID of the token to be transferred|
|_data|bytes memory|Optional data to send along with the call|

## _beforeTokenTransfers
Hook that is called before a set of serially-ordered token ids are about to be transferred. This includes minting.

|Name|Type|Description|
|--- |---|---|
|from|address|Transfer from address|
|to|address|Transfer to address|
|startTokenId|uint256|Start Token ID|
|quantity|uint256|Transfer quantity|

# READ(main)

## _startTokenId
To change the starting tokenId, please override this function.

No arguments

## totalSupply
Returns the amount of tokens in existence

No arguments

## _totalMinted
Returns the total amount of tokens minted in the contract.

No arguments

## supportsInterface
Returns a boolean that tells us if the contract supports royalties

|Name|Type|Description|
|--- |---|---|
|interfaceId|bytes4|Id of the interface|

## balanceOf
Returns the token amount owned by an address

|Name|Type|Description|
|--- |---|---|
|owner|address|The account which you want to check the balance|

## _numberMinted
Returns the number of tokens minted by `owner`.

|Name|Type|Description|
|--- |---|---|
|owner|address|Owner address|

## _numberBurned
Returns the number of tokens burned by or on behalf of `owner`.

|Name|Type|Description|
|--- |---|---|
|owner|address|Owner address|

## _getAux
Returns the auxillary data for `owner`. (e.g. number of whitelist mint slots used).

|Name|Type|Description|
|--- |---|---|
|owner|address|Owner address|


## _ownershipOf
Gas spent here starts off proportional to the maximum mint batch size.

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|Token ID|

## ownerOf
Retrieves the owner of a token id

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The id of the token you want to check its owner of|

## name
Retrieves collection name

No arguments

## symbol
Retrieves collection name

No arguments

## tokenURI
Returns the uri of the metadata

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The id of the token|

## _baseURI
Base URI for computing {tokenURI}. If set, the resulting URI for each

No arguments

## getApproved
Gets the approved address for a token ID, or zero if no address set Reverts if the token ID does not exist.

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The token id you will retrieves the approvals|

## isApprovedForAll
Tells whether an operator is approved by a given owner.

|Name|Type|Description|
|--- |---|---|
|owner|address|The address of the tokens owner|
|operator|uint256|The account that will get the rights to operate over owner balance|

## _exists
Returns whether `tokenId` exists.

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|Token ID|