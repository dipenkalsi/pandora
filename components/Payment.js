import React,{useEffect,useState} from 'react'
import {getProgramInstance} from '../utils/utils'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { SOLANA_HOST } from '../utils/const'
import { PublicKey } from '@solana/web3.js'
import HomePage from '../pages/homepage'
import { useWallet } from '@solana/wallet-adapter-react'
import Footer from './Footer'
import Image from 'next/image'
import logo from "../assets/logo-no-background.png"
import { program } from '@project-serum/anchor/dist/cjs/spl/token'
const anchor=require('@project-serum/anchor')
const {web3}=anchor
const {SystemProgram}=web3
const utf8=anchor.utils.bytes.utf8;

const defaultAccounts={
  tokenProgram:TOKEN_PROGRAM_ID,
  clock:anchor.web3.SYSVAR_CLOCK_PUBKEY,
  systemProgram:SystemProgram.programId
}

const styles={
main:`h-screen w-screen flex flex-col items-center justify-between`,
section:`flex flex-col justify center items-center space-y-4 pt-36`,
text:`text-indigo-200 text-4xl`,
btn:`mx-3 mt-5 bg-green-700 px-5 py-3 rounded-full text-lg hover:bg-green-800 text-indigo-100`
}



const Payment = () => {
  const connection=new anchor.web3.Connection(SOLANA_HOST)
  const wallet=useWallet()
  const program=getProgramInstance(connection, wallet)
  const [payers,setPayers]=useState()
  const [isPaid,setPaid]=useState(false)
  useEffect(()=>{
    if(wallet.connected){
      getWallets();
    }
  },[wallet.connected,isPaid])
  const getWallets=async()=>{

    const payerList=await program.account.payerAccount.all()
    setPayers(payerList)
    payerList.forEach(payer=>{
      if(payer.account.wallet.toBase58()==wallet.publicKey.toBase58()){
        setPaid(true);
      }
    })
  }
  const payClicked = async () => {
    let [payerSigner] = await anchor.web3.PublicKey.findProgramAddress(
      [utf8.encode('payer'), wallet.publicKey.toBuffer()],
      program.programId,
    )

    let payerInfo

    try {
      payerInfo = await program.account.payerAccount.fetch(payerSigner)
    } catch (e) {
      try {
        await program.rpc.acceptPayment({
          accounts: {
            payerWallet: payerSigner,
            receiver: new PublicKey(
              'amR3AuwdTYrs9XJ32NVHTogMz4gyUqUCLcDN4gWK7rs',
            ),
            authority: wallet.publicKey,
            ...defaultAccounts,
          },
        })
        alert('Transaction proceed')
      } catch (e) {
        alert(e.message)
      }
    }
  }

  if(isPaid) return <HomePage/>
  return (
    <div className={styles.main}>
      <div className='mt-3'>
      <Image src={logo} width="200" height="25"/>
      </div>
      <div className={styles.section}>
      <p className={styles.text}>This is a paid service. Pay 0.1 SOL to continue.</p>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={payClicked}>
          Pay 0.1 SOL
        </button>
        <button className={`${styles.btn} bg-red-700 hover:bg-red-800`} onClick={getWallets}>
          Verify Payment
        </button>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Payment
