'use client'

import { useAccount, useDisconnect } from 'wagmi'
import { useEffect, useState } from 'react'
import { AppKitButton, useAppKitNetwork } from '@reown/appkit/react'
import '../styles/ConnectButton.scss'

export default function ConnectButton() {
  const { caipNetwork, caipNetworkId, chainId, switchNetwork } = useAppKitNetwork()
  const [mounted, setMounted] = useState(false)
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()

  const [currentNetwork, setCurrentNetwork] = useState(caipNetwork?.name || 'Unknown')

  // Update network display when caipNetwork changes
  useEffect(() => {
    if (caipNetwork?.name) {
      setCurrentNetwork(caipNetwork.name)
    }
  }, [caipNetwork, caipNetworkId, chainId])

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <button className="connect-button" disabled>
        Loading...
      </button>
    )
  }

  return (
    <div className="connect-button-wrapper">
      {/* AppKitButton with network display */}
      <div className="appkit-button-with-network">
        <AppKitButton />
        {isConnected && (
          <div className="network-display">
            <span className="network-name">{currentNetwork}</span>
            {chainId && <span className="chain-id">(Chain ID: {chainId})</span>}
          </div>
        )}
      </div>

      {isConnected ? (
        <div className="connected-account">
          <span className="account-address">
            {address?.slice(0, 6)}...{address?.slice(-4)}
          </span>
          <button 
            onClick={() => disconnect()}
            className="disconnect-button"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}