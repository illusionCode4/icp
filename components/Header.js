import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import openseaLogo from '../assets/opensea.png'
import ordiPointLogo from '../assets/ordipoint.png'
import { useRouter } from 'next/router'
import { useWeb3 } from '@3rdweb/hooks'
import Connect from './Connect'

const style = {
  accentedButton: ` relative text-lg font-semibold px-4 py-2 bg-[#2181e2] rounded-3xl  text-white hover:bg-[#42a0ff] cursor-pointer`,
  wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl font-mono`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-center flex-1 gap-10`,
  headerItem: ` px-4 font-bold  hover:text-white cursor-pointer `,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
}

const Header = () => {
  const { address, chainId, provider, disconnectWallet, connectWallet } =
    useWeb3()
  const [connected, setConnected] = useState(false)
  const [activeLink, setActiveLink] = useState('/')
  const router = useRouter()
  const active = 'text-white'
  const notactive = 'text-[#c8cacd]'
  const [principalId, setPrincipalId] = useState('')
  const [selectedCoin, setSelectedCoin] = useState('')
  const [actor, setActor] = useState(false)

  useEffect(() => {
    setActiveLink(router.pathname)
    console.log(chainId)
  }, [router.pathname, chainId])

  const handleConnect = async () => {
    setConnected(true)

    if (!window.ic.plug.agent) {
      const whitelist = ['xsffd-7qaaa-aaaar-qacta-cai']
      await window.ic?.plug?.createAgent(whitelist)
    }

    // Create an actor to interact with the NNS Canister
    // we pass the NNS Canister id and the interface factory
    const NNSUiActor = await window.ic.plug.createActor({
      canisterId: 'xsffd-7qaaa-aaaar-qacta-cai',
      interfaceFactory: idlFactory,
    })

    setActor(NNSUiActor)
  }
  useEffect(async () => {
    if (!window.ic?.plug?.agent) {
      setActor(false)
      setConnected(false)
      window.location.hash = '/connect'
    }
  }, [])

  useEffect(async () => {
    if (connected) {
      const principal = await window.ic.plug.agent.getPrincipal()

      if (principal) {
        setPrincipalId(principal.toText())
      }
    } else {
      window.location.hash = '/connect'
    }
  }, [connected])

  return (
    <div className={style.wrapper}>
      <Link href="/">
        <div className={style.logoContainer}>
          <Image src={ordiPointLogo} height={40} width={40} />
          <div className={style.logoText}>OrdiPoint</div>
        </div>
      </Link>
      {/* <div className={style.searchBar}>
        <div className={style.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input
          className={style.searchInput}
          placeholder="Search items, collections, and accounts"
        />
      </div> */}
      <div className={style.headerItems}>
        <Link href="/">
          <a
            className={`${style.headerItem} ${
              activeLink === '/' ? active : notactive
            }`}
          >
            Home
          </a>
        </Link>
        <Link href="/about">
          <a
            className={`${style.headerItem} ${
              activeLink === '/about' ? active : notactive
            }`}
          >
            Market
          </a>
        </Link>
        <Link href="/resources" onClick={() => setClicked('Resources')}>
          <a
            className={`${style.headerItem} ${
              activeLink === '/resources' ? active : notactive
            }`}
          >
            Resources
          </a>
        </Link>
        <Link href="/point">
          <a
            className={`${style.headerItem} ${
              activeLink === '/point' ? active : notactive
            }`}
          >
            Point
          </a>
        </Link>
      </div>
      {/* <div className={style.headerIcon}>
        {address && (
          <button className={style.accentedButton} onClick={disconnectWallet}>
            {address.slice(0, 6)}...{address.slice(-4)}
          </button>
        )}
        {!address && (
          <button
            className={style.accentedButton}
            onClick={() => connectWallet('injected')}
          >
            Connect Wallet
          </button>
        )}
      </div> */}
      <Connect handleConnect={handleConnect} />
    </div>
  )
}

export default Header
