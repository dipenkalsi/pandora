import React from 'react'
import Image from 'next/image'
import Footer from './Footer'
import logo from "../assets/logo-no-background.png"
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import walletConnectionProvider from '../context/walletConnectionProvider'
import Payment from './Payment'
const styles={
    loginPage:`w-screen h-screen flex flex-col items-center justify-between`,
    text:`text-4xl text-indigo-200 mb-5 mt-10`
}
const Login = () => {
    const wallet=useWallet()
    if(wallet.connected) return <Payment/>
  return (
    <div className={styles.loginPage}>
        <div className='flex flex-col items-center justify-center mt-32'>
        <Image src={logo} height="75" width="600"></Image>
      <p className={styles.text}>Log In to access the app.</p>
      <WalletMultiButton/>
      </div>
      <div className='bottom-0'>

        <Footer/>
      </div>
    </div>
  )
}

export default Login
