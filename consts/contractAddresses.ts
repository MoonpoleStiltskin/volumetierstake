export const nftDropContractAddress =
  "0xC97Ebf1a9cC3D347A4b539D11AE7325b9BF4a9C8";
export const tokenContractAddress =
  "0xaFAc854c2b83f40B21c6dB1Dc02D419b6286cb13";
export const nftDropContractABI = [
	{
	  "type": "constructor",
	  "name": "",
	  "inputs": [
		{
		  "type": "string",
		  "name": "_name",
		  "internalType": "string"
		},
		{
		  "type": "string",
		  "name": "_symbol",
		  "internalType": "string"
		},
		{
		  "type": "address",
		  "name": "_royaltyRecipient",
		  "internalType": "address"
		},
		{
		  "type": "uint128",
		  "name": "_royaltyBps",
		  "internalType": "uint128"
		},
		{
		  "type": "address",
		  "name": "_primarySaleRecipient",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "error",
	  "name": "ApprovalCallerNotOwnerNorApproved",
	  "inputs": [],
	  "outputs": []
	},
	{
	  "type": "error",
	  "name": "ApprovalQueryForNonexistentToken",
	  "inputs": [],
	  "outputs": []
	},
	{
	  "type": "error",
	  "name": "ApprovalToCurrentOwner",
	  "inputs": [],
	  "outputs": []
	},
	{
	  "type": "error",
	  "name": "ApproveToCaller",
	  "inputs": [],
	  "outputs": []
	},
	{
	  "type": "error",
	  "name": "BalanceQueryForZeroAddress",
	  "inputs": [],
	  "outputs": []
	},
	{
	  "type": "error",
	  "name": "MintToZeroAddress",
	  "inputs": [],
	  "outputs": []
	},
	{
	  "type": "error",
	  "name": "MintZeroQuantity",
	  "inputs": [],
	  "outputs": []
	},
	{
	  "type": "error",
	  "name": "OperatorNotAllowed",
	  "inputs": [
		{
		  "type": "address",
		  "name": "operator",
		  "internalType": "address"
		}
	  ],
	  "outputs": []
	},
	{
	  "type": "error",
	  "name": "OwnerQueryForNonexistentToken",
	  "inputs": [],
	  "outputs": []
	},
	{
	  "type": "error",
	  "name": "TransferCallerNotOwnerNorApproved",
	  "inputs": [],
	  "outputs": []
	},
	{
	  "type": "error",
	  "name": "TransferFromIncorrectOwner",
	  "inputs": [],
	  "outputs": []
	},
	{
	  "type": "error",
	  "name": "TransferToNonERC721ReceiverImplementer",
	  "inputs": [],
	  "outputs": []
	},
	{
	  "type": "error",
	  "name": "TransferToZeroAddress",
	  "inputs": [],
	  "outputs": []
	},
	{
	  "type": "error",
	  "name": "URIQueryForNonexistentToken",
	  "inputs": [],
	  "outputs": []
	},
	{
	  "type": "event",
	  "name": "Approval",
	  "inputs": [
		{
		  "type": "address",
		  "name": "owner",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "approved",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "tokenId",
		  "indexed": true,
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "ApprovalForAll",
	  "inputs": [
		{
		  "type": "address",
		  "name": "owner",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "operator",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "bool",
		  "name": "approved",
		  "indexed": false,
		  "internalType": "bool"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "ClaimConditionUpdated",
	  "inputs": [
		{
		  "type": "tuple",
		  "name": "condition",
		  "components": [
			{
			  "type": "uint256",
			  "name": "startTimestamp",
			  "internalType": "uint256"
			},
			{
			  "type": "uint256",
			  "name": "maxClaimableSupply",
			  "internalType": "uint256"
			},
			{
			  "type": "uint256",
			  "name": "supplyClaimed",
			  "internalType": "uint256"
			},
			{
			  "type": "uint256",
			  "name": "quantityLimitPerWallet",
			  "internalType": "uint256"
			},
			{
			  "type": "bytes32",
			  "name": "merkleRoot",
			  "internalType": "bytes32"
			},
			{
			  "type": "uint256",
			  "name": "pricePerToken",
			  "internalType": "uint256"
			},
			{
			  "type": "address",
			  "name": "currency",
			  "internalType": "address"
			},
			{
			  "type": "string",
			  "name": "metadata",
			  "internalType": "string"
			}
		  ],
		  "indexed": false,
		  "internalType": "struct IClaimCondition.ClaimCondition"
		},
		{
		  "type": "bool",
		  "name": "resetEligibility",
		  "indexed": false,
		  "internalType": "bool"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "ContractURIUpdated",
	  "inputs": [
		{
		  "type": "string",
		  "name": "prevURI",
		  "indexed": false,
		  "internalType": "string"
		},
		{
		  "type": "string",
		  "name": "newURI",
		  "indexed": false,
		  "internalType": "string"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "DefaultRoyalty",
	  "inputs": [
		{
		  "type": "address",
		  "name": "newRoyaltyRecipient",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "newRoyaltyBps",
		  "indexed": false,
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "OperatorRestriction",
	  "inputs": [
		{
		  "type": "bool",
		  "name": "restriction",
		  "indexed": false,
		  "internalType": "bool"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "OwnerUpdated",
	  "inputs": [
		{
		  "type": "address",
		  "name": "prevOwner",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "newOwner",
		  "indexed": true,
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "PrimarySaleRecipientUpdated",
	  "inputs": [
		{
		  "type": "address",
		  "name": "recipient",
		  "indexed": true,
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "RoyaltyForToken",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "tokenId",
		  "indexed": true,
		  "internalType": "uint256"
		},
		{
		  "type": "address",
		  "name": "royaltyRecipient",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "royaltyBps",
		  "indexed": false,
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "TokenURIRevealed",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "index",
		  "indexed": true,
		  "internalType": "uint256"
		},
		{
		  "type": "string",
		  "name": "revealedURI",
		  "indexed": false,
		  "internalType": "string"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "TokensClaimed",
	  "inputs": [
		{
		  "type": "address",
		  "name": "claimer",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "receiver",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "startTokenId",
		  "indexed": true,
		  "internalType": "uint256"
		},
		{
		  "type": "uint256",
		  "name": "quantityClaimed",
		  "indexed": false,
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "TokensLazyMinted",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "startTokenId",
		  "indexed": true,
		  "internalType": "uint256"
		},
		{
		  "type": "uint256",
		  "name": "endTokenId",
		  "indexed": false,
		  "internalType": "uint256"
		},
		{
		  "type": "string",
		  "name": "baseURI",
		  "indexed": false,
		  "internalType": "string"
		},
		{
		  "type": "bytes",
		  "name": "encryptedBaseURI",
		  "indexed": false,
		  "internalType": "bytes"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "Transfer",
	  "inputs": [
		{
		  "type": "address",
		  "name": "from",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "to",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "tokenId",
		  "indexed": true,
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "function",
	  "name": "OPERATOR_FILTER_REGISTRY",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "address",
		  "name": "",
		  "internalType": "contract IOperatorFilterRegistry"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "approve",
	  "inputs": [
		{
		  "type": "address",
		  "name": "operator",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "tokenId",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "balanceOf",
	  "inputs": [
		{
		  "type": "address",
		  "name": "owner",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "burn",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "_tokenId",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "claim",
	  "inputs": [
		{
		  "type": "address",
		  "name": "_receiver",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "_quantity",
		  "internalType": "uint256"
		},
		{
		  "type": "address",
		  "name": "_currency",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "_pricePerToken",
		  "internalType": "uint256"
		},
		{
		  "type": "tuple",
		  "name": "_allowlistProof",
		  "components": [
			{
			  "type": "bytes32[]",
			  "name": "proof",
			  "internalType": "bytes32[]"
			},
			{
			  "type": "uint256",
			  "name": "quantityLimitPerWallet",
			  "internalType": "uint256"
			},
			{
			  "type": "uint256",
			  "name": "pricePerToken",
			  "internalType": "uint256"
			},
			{
			  "type": "address",
			  "name": "currency",
			  "internalType": "address"
			}
		  ],
		  "internalType": "struct IDropSinglePhase.AllowlistProof"
		},
		{
		  "type": "bytes",
		  "name": "_data",
		  "internalType": "bytes"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "payable"
	},
	{
	  "type": "function",
	  "name": "claimCondition",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "startTimestamp",
		  "internalType": "uint256"
		},
		{
		  "type": "uint256",
		  "name": "maxClaimableSupply",
		  "internalType": "uint256"
		},
		{
		  "type": "uint256",
		  "name": "supplyClaimed",
		  "internalType": "uint256"
		},
		{
		  "type": "uint256",
		  "name": "quantityLimitPerWallet",
		  "internalType": "uint256"
		},
		{
		  "type": "bytes32",
		  "name": "merkleRoot",
		  "internalType": "bytes32"
		},
		{
		  "type": "uint256",
		  "name": "pricePerToken",
		  "internalType": "uint256"
		},
		{
		  "type": "address",
		  "name": "currency",
		  "internalType": "address"
		},
		{
		  "type": "string",
		  "name": "metadata",
		  "internalType": "string"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "contractURI",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "string",
		  "name": "",
		  "internalType": "string"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "encryptDecrypt",
	  "inputs": [
		{
		  "type": "bytes",
		  "name": "data",
		  "internalType": "bytes"
		},
		{
		  "type": "bytes",
		  "name": "key",
		  "internalType": "bytes"
		}
	  ],
	  "outputs": [
		{
		  "type": "bytes",
		  "name": "result",
		  "internalType": "bytes"
		}
	  ],
	  "stateMutability": "pure"
	},
	{
	  "type": "function",
	  "name": "encryptedData",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "type": "bytes",
		  "name": "",
		  "internalType": "bytes"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getApproved",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "tokenId",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "type": "address",
		  "name": "",
		  "internalType": "address"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getBaseURICount",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getBatchIdAtIndex",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "_index",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getDefaultRoyaltyInfo",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "address",
		  "name": "",
		  "internalType": "address"
		},
		{
		  "type": "uint16",
		  "name": "",
		  "internalType": "uint16"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getRevealURI",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "_batchId",
		  "internalType": "uint256"
		},
		{
		  "type": "bytes",
		  "name": "_key",
		  "internalType": "bytes"
		}
	  ],
	  "outputs": [
		{
		  "type": "string",
		  "name": "revealedURI",
		  "internalType": "string"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getRoyaltyInfoForToken",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "_tokenId",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "type": "address",
		  "name": "",
		  "internalType": "address"
		},
		{
		  "type": "uint16",
		  "name": "",
		  "internalType": "uint16"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getSupplyClaimedByWallet",
	  "inputs": [
		{
		  "type": "address",
		  "name": "_claimer",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "isApprovedForAll",
	  "inputs": [
		{
		  "type": "address",
		  "name": "owner",
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "operator",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "type": "bool",
		  "name": "",
		  "internalType": "bool"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "isEncryptedBatch",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "_batchId",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "type": "bool",
		  "name": "",
		  "internalType": "bool"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "lazyMint",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "_amount",
		  "internalType": "uint256"
		},
		{
		  "type": "string",
		  "name": "_baseURIForTokens",
		  "internalType": "string"
		},
		{
		  "type": "bytes",
		  "name": "_data",
		  "internalType": "bytes"
		}
	  ],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "batchId",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "multicall",
	  "inputs": [
		{
		  "type": "bytes[]",
		  "name": "data",
		  "internalType": "bytes[]"
		}
	  ],
	  "outputs": [
		{
		  "type": "bytes[]",
		  "name": "results",
		  "internalType": "bytes[]"
		}
	  ],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "name",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "string",
		  "name": "",
		  "internalType": "string"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "nextTokenIdToClaim",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "nextTokenIdToMint",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "operatorRestriction",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "bool",
		  "name": "",
		  "internalType": "bool"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "owner",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "address",
		  "name": "",
		  "internalType": "address"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "ownerOf",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "tokenId",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "type": "address",
		  "name": "",
		  "internalType": "address"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "primarySaleRecipient",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "address",
		  "name": "",
		  "internalType": "address"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "reveal",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "_index",
		  "internalType": "uint256"
		},
		{
		  "type": "bytes",
		  "name": "_key",
		  "internalType": "bytes"
		}
	  ],
	  "outputs": [
		{
		  "type": "string",
		  "name": "revealedURI",
		  "internalType": "string"
		}
	  ],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "royaltyInfo",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "tokenId",
		  "internalType": "uint256"
		},
		{
		  "type": "uint256",
		  "name": "salePrice",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "type": "address",
		  "name": "receiver",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "royaltyAmount",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "safeTransferFrom",
	  "inputs": [
		{
		  "type": "address",
		  "name": "from",
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "to",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "tokenId",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "safeTransferFrom",
	  "inputs": [
		{
		  "type": "address",
		  "name": "from",
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "to",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "tokenId",
		  "internalType": "uint256"
		},
		{
		  "type": "bytes",
		  "name": "data",
		  "internalType": "bytes"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setApprovalForAll",
	  "inputs": [
		{
		  "type": "address",
		  "name": "operator",
		  "internalType": "address"
		},
		{
		  "type": "bool",
		  "name": "approved",
		  "internalType": "bool"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setClaimConditions",
	  "inputs": [
		{
		  "type": "tuple",
		  "name": "_condition",
		  "components": [
			{
			  "type": "uint256",
			  "name": "startTimestamp",
			  "internalType": "uint256"
			},
			{
			  "type": "uint256",
			  "name": "maxClaimableSupply",
			  "internalType": "uint256"
			},
			{
			  "type": "uint256",
			  "name": "supplyClaimed",
			  "internalType": "uint256"
			},
			{
			  "type": "uint256",
			  "name": "quantityLimitPerWallet",
			  "internalType": "uint256"
			},
			{
			  "type": "bytes32",
			  "name": "merkleRoot",
			  "internalType": "bytes32"
			},
			{
			  "type": "uint256",
			  "name": "pricePerToken",
			  "internalType": "uint256"
			},
			{
			  "type": "address",
			  "name": "currency",
			  "internalType": "address"
			},
			{
			  "type": "string",
			  "name": "metadata",
			  "internalType": "string"
			}
		  ],
		  "internalType": "struct IClaimCondition.ClaimCondition"
		},
		{
		  "type": "bool",
		  "name": "_resetClaimEligibility",
		  "internalType": "bool"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setContractURI",
	  "inputs": [
		{
		  "type": "string",
		  "name": "_uri",
		  "internalType": "string"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setDefaultRoyaltyInfo",
	  "inputs": [
		{
		  "type": "address",
		  "name": "_royaltyRecipient",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "_royaltyBps",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setOperatorRestriction",
	  "inputs": [
		{
		  "type": "bool",
		  "name": "_restriction",
		  "internalType": "bool"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setOwner",
	  "inputs": [
		{
		  "type": "address",
		  "name": "_newOwner",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setPrimarySaleRecipient",
	  "inputs": [
		{
		  "type": "address",
		  "name": "_saleRecipient",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setRoyaltyInfoForToken",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "_tokenId",
		  "internalType": "uint256"
		},
		{
		  "type": "address",
		  "name": "_recipient",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "_bps",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "supportsInterface",
	  "inputs": [
		{
		  "type": "bytes4",
		  "name": "interfaceId",
		  "internalType": "bytes4"
		}
	  ],
	  "outputs": [
		{
		  "type": "bool",
		  "name": "",
		  "internalType": "bool"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "symbol",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "string",
		  "name": "",
		  "internalType": "string"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "tokenURI",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "_tokenId",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "type": "string",
		  "name": "",
		  "internalType": "string"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "totalSupply",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "transferFrom",
	  "inputs": [
		{
		  "type": "address",
		  "name": "from",
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "to",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "tokenId",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "verifyClaim",
	  "inputs": [
		{
		  "type": "address",
		  "name": "_claimer",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "_quantity",
		  "internalType": "uint256"
		},
		{
		  "type": "address",
		  "name": "_currency",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "_pricePerToken",
		  "internalType": "uint256"
		},
		{
		  "type": "tuple",
		  "name": "_allowlistProof",
		  "components": [
			{
			  "type": "bytes32[]",
			  "name": "proof",
			  "internalType": "bytes32[]"
			},
			{
			  "type": "uint256",
			  "name": "quantityLimitPerWallet",
			  "internalType": "uint256"
			},
			{
			  "type": "uint256",
			  "name": "pricePerToken",
			  "internalType": "uint256"
			},
			{
			  "type": "address",
			  "name": "currency",
			  "internalType": "address"
			}
		  ],
		  "internalType": "struct IDropSinglePhase.AllowlistProof"
		}
	  ],
	  "outputs": [
		{
		  "type": "bool",
		  "name": "isOverride",
		  "internalType": "bool"
		}
	  ],
	  "stateMutability": "view"
	}
  ]
export const stakingContractAddress =
  "0x97405970cBd9e9154B9eE18Ac11BB2B3edaE642e";
export const stakingContractABI = [
	{
		"inputs": [],
		"name": "claimRewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "users",
				"type": "address[]"
			}
		],
		"name": "emergencyWithdrawNFTs",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "users",
				"type": "address[]"
			}
		],
		"name": "emergencyZero",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endStakingPeriodEarly",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"name": "onERC721Received",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "",
				"type": "bytes4"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_nftCollection",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_rewardToken",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "reward",
				"type": "uint256"
			}
		],
		"name": "RewardAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "reward",
				"type": "uint256"
			}
		],
		"name": "RewardPaid",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "RewardZeroed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newAmount",
				"type": "uint256"
			}
		],
		"name": "RewardsAmountUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newDuration",
				"type": "uint256"
			}
		],
		"name": "RewardsDurationUpdated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_emergencyUnlock",
				"type": "bool"
			}
		],
		"name": "setEmergencyUnlock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_state",
				"type": "bool"
			}
		],
		"name": "setEndStakingOnZeroBalance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "limit",
				"type": "uint256"
			}
		],
		"name": "setMaxStakingLimit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_requiredGlobalStakes",
				"type": "uint256"
			}
		],
		"name": "setRequiredGlobalStakes",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_duration",
				"type": "uint256"
			}
		],
		"name": "setStakingPeriod",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "thresholds",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "multipliers",
				"type": "uint256[]"
			}
		],
		"name": "setTiersAndMultipliers",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "stake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Staked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "StakingPeriodEndedEarly",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "StakingPeriodSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "StakingPeriodStarted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_duration",
				"type": "uint256"
			}
		],
		"name": "triggerImmediateStaking",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Withdrawn",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "recipient",
				"type": "address"
			}
		],
		"name": "withdrawStuckETH",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract IERC20",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "withdrawStuckTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "accountStakes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "accountStakingLimit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "accountTotalBoost",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "earned",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "emergencyUnlock",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endStakingOnZeroBalance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRewardForDuration",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_distributedTokens",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRewardPerToken",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_rewardPerToken",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRewardTokenBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_rewardTokenBalance",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getStakingStatus",
		"outputs": [
			{
				"internalType": "enum ERC721Staking.StakingStatus",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTimeUntilUnlock",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "getTotalBoost",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getWithdrawalStatus",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lastTimeRewardApplicable",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_lastRewardsApplicable",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lastUpdateTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nftCollection",
		"outputs": [
			{
				"internalType": "contract IERC721",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "numTiers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "periodFinish",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "requiredGlobalStakes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "rewardBalances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardPerToken",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardsAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardsDuration",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardToken",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "stakedAssets",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stakingAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stakingDuration",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stakingPeriodInitialized",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stakingPeriodSet",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stakingStatus",
		"outputs": [
			{
				"internalType": "enum ERC721Staking.StakingStatus",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tiers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "threshold",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "multiplier",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokenIdToIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokensStaked",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalStakedSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userRewardPerTokenPaid",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "userStakeInfo",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "_tokensStaked",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256",
				"name": "_availableRewards",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]