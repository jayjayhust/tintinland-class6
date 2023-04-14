let web3;
let chainId;
let accountAddress;
let contract_abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol_",
				"type": "string"
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
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fee",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "charger",
				"type": "address"
			}
		],
		"name": "transferWithFee",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "burnAmount",
				"type": "uint256"
			}
		],
		"name": "transferWithTokenBurn",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
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
		"name": "balanceOf",
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
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]; // from remix

async function connect() {
  if(window.ethereum) {
    try {
      await window.ethereum.enable();
    } catch (error) {
      console.error("User denied account access!");
    }
    web3 = new Web3(window.ethereum); // Web3构造函数，构建Web3实例
  } else if(window.web3) {
    web3 = new Web3(window.ethereum); // Web3构造函数，构建Web3实例
  } else {
    alert("Please install wallet!");
  }

  // query data
  chainId = await web3.eth.getChainId();
  var blockNumber = await web3.eth.getBlockNumber();
  var block = await web3.eth.getBlock(blockNumber);
  var blockTimestamp = block.timestamp;
  var account = await web3.eth.getAccounts();
  accountAddress = account[0];
  var balance = await web3.eth.getBalance(accountAddress);

  // update UI
  document.getElementById("chain_id").innerText = chainId;
  document.getElementById("block_number").innerText = blockNumber;
  document.getElementById("block_timestamp").innerText = blockTimestamp;
  document.getElementById("account_address").innerText = accountAddress;
  document.getElementById("account_balance").innerText = balance;
}

async function read() {
  var contractAddress = document.getElementById("contract_address").value; // 0x052D9f2e4E565E4D203A64928bD32b91AFF8dCc8
  var instance = new web3.eth.Contract(contract_abi, contractAddress);

  // query data
  var tokenSymbol = await instance.methods.symbol().call(); // 只读
  var tokenTotalSupply = await instance.methods.totalSupply().call(); // 只读
  var tokenBalance = await instance.methods.balanceOf(accountAddress).call(); // 只读

  // update UI
  document.getElementById("token_symbol").innerText = tokenSymbol;
  document.getElementById("total_supply").innerText = tokenTotalSupply;
  document.getElementById("token_balance").innerText = tokenBalance;
}

async function transfer() {
  var contractAddress = document.getElementById("contract_address").value; // 0x052D9f2e4E565E4D203A64928bD32b91AFF8dCc8
  var instance = new web3.eth.Contract(contract_abi, contractAddress);
  var toAddress = document.getElementById("to_address").value; 
  var transferAmount = document.getElementById("transfer_amount").value; 

  // prepare transfer data
  //var transferData = instance.methods.transfer(toAddress, web3.utils.toWei(transferAmount)).encodeABI();
  //var transferData = instance.methods.transfer(toAddress, web3.utils.toWei(transferAmount, 'ether')).encodeABI();
  var transferData = instance.methods.transfer(toAddress, transferAmount).encodeABI();
  console.log(web3.utils.toWei(transferAmount));

  // query gas and gas price
  var estimateGasRes = await web3.eth.estimateGas({
    to: contractAddress,
    data: transferData,
    from: accountAddress,
    value: '0x0'
  });
  var gasPrice = await web3.eth.getGasPrice();
  // update UI
  document.getElementById("estimate_gas").innerText = estimateGasRes;
  //document.getElementById("gas_price").innerText = gasPrice;
  document.getElementById("gas_price").innerText = web3.utils.fromWei(
    gasPrice,
    "gwei"
  );

  // get nounce
  let nonce = await web3.eth.getTransactionCount(accountAddress);

  // prepare tranaction data for transfer
  let rawTransaction = {
    from: accountAddress,
    to: contractAddress, // here is the contract address
    nonce: web3.utils.toHex(nonce),
    gasPrice: gasPrice,
    gas: estimateGasRes * 2,
    value: '0x0',
    data: transferData,
    chainId: chainId
  };

  // send transaction
  web3.eth.sendTransaction(rawTransaction).on("transactionHash", function(hash){
    console.log("txHash: ", hash);
  });
}

async function mint() {
  var contractAddress = document.getElementById("contract_address").value; 
  var instance = new web3.eth.Contract(contract_abi, contractAddress);
  var mintAmount = document.getElementById("mint_amount").value; 

  var transferData = instance.methods.mint(accountAddress, mintAmount).encodeABI();

  // query gas and gas price
  var estimateGasRes = await web3.eth.estimateGas({
    to: contractAddress,
    data: transferData,
    from: accountAddress,
    value: '0x0'
  });
  var gasPrice = await web3.eth.getGasPrice();
  // update UI
  document.getElementById("estimate_gas").innerText = estimateGasRes;
  //document.getElementById("gas_price").innerText = gasPrice;
  document.getElementById("gas_price").innerText = web3.utils.fromWei(
    gasPrice,
    "gwei"
  );

  // get nounce
  let nonce = await web3.eth.getTransactionCount(accountAddress);

  // prepare tranaction data for transfer
  let rawTransaction = {
    from: accountAddress,
    to: contractAddress, // here is the contract address
    nonce: web3.utils.toHex(nonce),
    gasPrice: gasPrice,
    gas: estimateGasRes * 2,
    value: '0x0',
    data: transferData,
    chainId: chainId
  };

  // send transaction
  web3.eth.sendTransaction(rawTransaction).on("transactionHash", function(hash){
    console.log("txHash: ", hash);
  });
}

async function burn() {
  var contractAddress = document.getElementById("contract_address").value; 
  var instance = new web3.eth.Contract(contract_abi, contractAddress);
  var burnAmount = document.getElementById("burn_amount").value;

  var transferData = instance.methods.burn(burnAmount).encodeABI();

  // query gas and gas price
  var estimateGasRes = await web3.eth.estimateGas({
    to: contractAddress,
    data: transferData,
    from: accountAddress,
    value: '0x0'
  });
  var gasPrice = await web3.eth.getGasPrice();
  // update UI
  document.getElementById("estimate_gas").innerText = estimateGasRes;
  //document.getElementById("gas_price").innerText = gasPrice;
  document.getElementById("gas_price").innerText = web3.utils.fromWei(
    gasPrice,
    "gwei"
  );

  // get nounce
  let nonce = await web3.eth.getTransactionCount(accountAddress);

  // prepare tranaction data for transfer
  let rawTransaction = {
    from: accountAddress,
    to: contractAddress, // here is the contract address
    nonce: web3.utils.toHex(nonce),
    gasPrice: gasPrice,
    gas: estimateGasRes * 2,
    value: '0x0',
    data: transferData,
    chainId: chainId
  };

  // send transaction
  web3.eth.sendTransaction(rawTransaction).on("transactionHash", function(hash){
    console.log("txHash: ", hash);
  });
}