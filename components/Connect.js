import React from 'react'
import PlugConnect from '@psychedelic/plug-connect'

const Connect = ({ handleConnect }) => {
  const network = 'https://mainnet.dfinity.network/'
  const whitelist = [
    'xsffd-7qaaa-aaaar-qacta-cai' || 'ryjl3-tyaaa-aaaaa-aaaba-cai',
  ]

  return (
    <>
      <PlugConnect
        host={network}
        whitelist={whitelist}
        dark
        onConnectCallback={handleConnect}
      />
    </>
  )
}

export default Connect
