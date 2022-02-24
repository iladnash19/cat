import Card from './Card'
import Middle from './Middle'
import RightBar from './RightBar'
import React, { useState, useEffect } from 'react'
import { useMoralis } from "react-moralis";

const Container = () => {
let [walletBalance, setBalance] = useState(0);
let [marketingBalance, setMarketing] = useState(0);
let [buyBackBalance, setBuyBack] = useState(0);
let [walletBnb, setWalletBnb] = useState(0);
let [walletAddress,setWalletAddress] = useState(0);

const { authenticate, isAuthenticated, user ,logout } = useMoralis();
const Web3 = require("web3");
const avaxProvider ="https://api.avax.network/ext/bc/C/rpc"
const bnbProvider="https://bsc-dataseed.binance.org/"
const Web3AVAXClient = new Web3(new Web3.providers.HttpProvider(avaxProvider));
const Web3BNBClient = new Web3(new Web3.providers.HttpProvider(bnbProvider));
const minABI= [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"isExcluded","type":"bool"}],"name":"ExcludeFromFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"accounts","type":"address[]"},{"indexed":false,"internalType":"bool","name":"isExcluded","type":"bool"}],"name":"ExcludeMultipleAccountsFromFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"newValue","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"oldValue","type":"uint256"}],"name":"GasForProcessingUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newKusWallet","type":"address"},{"indexed":true,"internalType":"address","name":"oldKusWallet","type":"address"}],"name":"KusWalletUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newLiquidityWallet","type":"address"},{"indexed":true,"internalType":"address","name":"oldLiquidityWallet","type":"address"}],"name":"LiquidityWalletUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newMarketingWallet","type":"address"},{"indexed":true,"internalType":"address","name":"oldMarketingWallet","type":"address"}],"name":"MarketingWalletUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"iterations","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"claims","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastProcessedIndex","type":"uint256"},{"indexed":true,"internalType":"bool","name":"automatic","type":"bool"},{"indexed":false,"internalType":"uint256","name":"gas","type":"uint256"},{"indexed":true,"internalType":"address","name":"processor","type":"address"}],"name":"ProcessedDividendTracker","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"_enabled","type":"bool"}],"name":"Rewards","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SendDividends","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"pair","type":"address"},{"indexed":true,"internalType":"bool","name":"value","type":"bool"}],"name":"SetAutomatedMarketMakerPair","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"},{"indexed":true,"internalType":"address","name":"oldAddress","type":"address"}],"name":"UpdateDividendTracker","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"},{"indexed":true,"internalType":"address","name":"oldAddress","type":"address"}],"name":"UpdateDividendsToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"},{"indexed":true,"internalType":"address","name":"oldAddress","type":"address"}],"name":"UpdateUniswapV2Router","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"isBlacklisted","type":"bool"}],"name":"blacklist","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"_enabled","type":"bool"}],"name":"burningUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"isExcluded","type":"bool"}],"name":"isElon","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"_enabled","type":"bool"}],"name":"tradingUpdated","type":"event"},{"inputs":[],"name":"DividendsToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"liquidityTokenAddress","type":"address"}],"name":"SetupLiquidityTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TeamReleaseLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"secondsUntilUnlock","type":"uint256"}],"name":"TeamUnlockLiquidityInSeconds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TeamlimitLiquidityReleaseTo20Percent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_isElon","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"addLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"automatedMarketMakerPairs","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnRemainingToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"burning","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"burningEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractTokenBalanceAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deadAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dividendTracker","outputs":[{"internalType":"contract DividendTracker","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_toExclude","type":"address"}],"name":"excludeFromDividends","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"excluded","type":"bool"}],"name":"excludeFromFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"gasForProcessing","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastProcessedIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLiquidityReleaseTimeInSeconds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumberOfDividendTokenHolders","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFees","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"letsGetStarted","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"letsGoLive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"liquidityRelease20Percent","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"processDividendTracker","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"setAutomatedMarketMakerPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapTokensAtAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalBuyFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSellFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"tradingEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"newBuyLiquidityFee","type":"uint8"},{"internalType":"uint8","name":"newBuyMarketingFee","type":"uint8"},{"internalType":"uint8","name":"newBuyRewardsFee","type":"uint8"},{"internalType":"uint8","name":"newBuyKusFee","type":"uint8"}],"name":"updateBuyFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"claimWait","type":"uint256"}],"name":"updateClaimWait","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"updateDividendToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"updateGasForProcessing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"elon","type":"bool"}],"name":"updateIsElon","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newKusWallet","type":"address"}],"name":"updateKusWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newLiquidityWallet","type":"address"}],"name":"updateLiquidityWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newMarketingWallet","type":"address"}],"name":"updateMarketingWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMaxBuy","type":"uint256"},{"internalType":"uint256","name":"newMaxSell","type":"uint256"}],"name":"updateMaxBuySell","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMaxWallet","type":"uint256"}],"name":"updateMaxWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"minimumTokenBalanceForDividends","type":"uint256"}],"name":"updateMinimumTokenRequirement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"newSellLiquidityFee","type":"uint8"},{"internalType":"uint8","name":"newSellMarketingFee","type":"uint8"},{"internalType":"uint8","name":"newSellRewardsFee","type":"uint8"},{"internalType":"uint8","name":"newSellKusFee","type":"uint8"}],"name":"updateSellFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateSwapAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"updateUniswapV2Router","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"updatedividendTracker","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"bep20","type":"address"},{"internalType":"address","name":"account","type":"address"}],"name":"withdrawRemainingBEP20Token","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"percent","type":"uint256"}],"name":"withdrawRemainingETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"withdrawRemainingToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];

const tokenAddress = "0xa6e94f95FC4027d820E2FB12ec2593468A9ED8A3";
const rewardToken = "0x9BE51c4c910d5b31d9E4f9fC4841F90cd51F0372";
const buyBackAddress="0xFd45537E9354716d4d6a431dfBfc49B4772c26e7";
const marketingAddress="0xF6265Bf11084515B4AF469A255fF20aBA197C46a";

const tokenContract = new Web3BNBClient.eth.Contract(minABI, tokenAddress);


function updateWallets(){
    
    var buybbalance = Web3BNBClient.eth.getBalance(buyBackAddress, function   (error, wei) {
        if (!error) {
            setBuyBack(Web3BNBClient.utils.fromWei(wei, 'ether'))
            
        }
      });
      
  
var markbalance = Web3BNBClient.eth.getBalance(marketingAddress, function   (error, wei) {
    if (!error) {
        setMarketing(Web3BNBClient.utils.fromWei(wei, 'ether'))
        
    }

  });



  setTimeout(updateWallets, 20000);}
  updateWallets();

  

/*********************/
useEffect(() => {
    async function fetchMyAPI() {
        if (isAuthenticated) {
            setWalletAddress(user.attributes.ethAddress);
            var waletBnbBalance = Web3BNBClient.eth.getBalance(user.attributes.ethAddress, function   (error, wei) {
                if (!error) {
                    setWalletBnb(Web3BNBClient.utils.fromWei(wei, 'ether'))
                    
                }
                
            
              });

            let walletB = await tokenContract.methods.balanceOf(user.attributes.ethAddress).call();
            let walletBalance = Web3BNBClient.utils.fromWei(walletB);
            setBalance(walletBalance*10**9);    
           
            



        
          }
   

/*
        let marketingB = await bnbContract.methods.balanceOf(marketingAddress).call();
        let marketingBalance = Web3Client.utils.fromWei(marketingB);
        marketingBalance)
        
     

        let buyBackB = await bnbContract.methods.balanceOf(buyBackAddress).call();
        let buyBackBalance = Web3Client.utils.fromWei(buyBackB);
        setBuyBack(buyBackBalance)
*/
        

    }

    fetchMyAPI()
  }, [isAuthenticated])


    return (
        <div className=" bg-gray h-full " > 
          
            
            <div className="flex   p-4 space-x-3">
                <Card title="BALANCE" balance={walletBalance+" $CKING"} icon={0} />
                <Card title="MARKETING WALLET" balance={marketingBalance+" BNB"} link='' icon={1} />
                <Card title="WALLET BNB" balance={walletBnb+" BNB"}  icon={3} />
                <Card title="TOTAL SUPPLY" balance={"1,000,000,000,000,000"} link='' icon={2} />
                

            </div>
            <div className="flex  ml-3 mt-6 space-x-2  mr-4 ">
                <Middle />
            </div>
        </div>
    )
}


export default Container

