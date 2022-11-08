import dynamic from 'next/dynamic'
import '../styles/globals.css'
import { PandoraProvider } from '../context/context'
require('@solana/wallet-adapter-react-ui/styles.css')

const WalletConnectionProvider = dynamic(
  () => import('../context/walletConnectionProvider'),
  {
    ssr: false,
  },
)

function MyApp({ Component, pageProps }) {
  return (
    <WalletConnectionProvider>
      <PandoraProvider>
        <Component {...pageProps} />
      </PandoraProvider>
    </WalletConnectionProvider>
  )
}

export default MyApp