import React, {useState} from 'react'
import ConnectWallet from '../components/ConnectWallet/ConnectWallet'
import Connected from "../components/Connected/Connected";
import Layout from "../components/Layout/Layout";

function index() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const connectWalletHandler = () => {
    setIsWalletConnected(true);
  }

  return (
    <div>
      {!isWalletConnected ? (
        <ConnectWallet connectWalletHandler={connectWalletHandler}/>
      ) : (
        <Layout>
          <Connected/>
        </Layout>
      )}
    </div>
  )
}

export default index
