import '../styles/globals.css'
import { ThirdwebProvider } from '@3rdweb/react'

/**
 * The chain ID 4 represents the Rinkeby network
 * The `injected` connector is a web3 connection method used by Metamask
 */
const supportedChainIds = [1, 4]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-[#202225]">
      <ThirdwebProvider
        connectors={connectors}
        supportedChainIds={supportedChainIds}
      >
        <Component {...pageProps} />
      </ThirdwebProvider>
    </div>
  )
}

export default MyApp
