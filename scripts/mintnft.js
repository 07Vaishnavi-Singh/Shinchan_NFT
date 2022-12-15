require("dotenv").config();
const API_URL = process.env.API_URL;

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/nft.sol/nft.json");
console.log(JSON.stringify(contract.abi));


const contractAddress = "0xd89d8c171Ec834D41769047F7d44e7469d239eaD";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);


async function mintNFT(toeknURI){
const  nonce =await web3.eth.getTransactionCount(PUBLIC_LEY , "latest") ;

}

const tx = {
    'from': PUBLIC_KEY,
    'to': contractAddress,
   ' nonce': nonce,
    'gas': 500000,
    'data': nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI,
  };

  const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
  signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your transaction is: ",
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
            );
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            );
          }
        }
      );
    })
    .catch((err) => {
      console.log(" Promise failed:", err);
    });

mintNFT(
  "https://gateway.pinata.cloud/ipfs/QmYV2JStXaKyFTyqYUXUhVFjuY55YbbcarWuyBYWW988bY" 
);