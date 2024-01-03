import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import ordiPointLogo from '../assets/ordipoint.png'
import { useRouter } from 'next/router'
import { useWeb3 } from '@3rdweb/hooks'
import PlugConnect from '@psychedelic/plug-connect'
import { idlFactory } from './idlFactory.did.js'
import { Principal } from '@dfinity/principal'

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
  // const { address, chainId, provider, disconnectWallet, connectWallet } =
  //   useWeb3()
  const [activeLink, setActiveLink] = useState('/')
  const [address, setAddress] = useState('')
  const router = useRouter()
  const active = 'text-white'
  const notactive = 'text-[#c8cacd]'
  let whitelist = ['xsffd-7qaaa-aaaar-qacta-cai']

  useEffect(() => {
    setActiveLink(router.pathname)
    // console.log(chainId)
  }, [router.pathname])

  const verifyConnectionAndAgent = async () => {
    const connected = await window.ic.plug.isConnected()
    console.log(connected)
    console.log(window.ic.plug.principalId)
    if (window.ic.plug.principalId) {
      const add = `${window.ic.plug.principalId.slice(
        0,
        6
      )}...${window.ic.plug.principalId.slice(-4)}`
      setAddress(add)
    }

    if (!connected) window.ic.plug.requestConnect({ whitelist })
    if (connected && !window.ic.plug.agent) {
      window.ic.plug.createAgent({ whitelist })
    }
    // await window?.ic?.plug?.requestConnect({
    //   whitelist,
    // })

    const NNSUiActor = await window.ic.plug.createActor({
      canisterId: 'xsffd-7qaaa-aaaar-qacta-cai',
      interfaceFactory: idlFactory,
    })
    const principal = Principal.fromText(
      'hda74-hg2vk-bv5bx-wosfd-vgexp-v36ta-yyy7k-6zcbl-6v36n-2wh3d-yqe'
    )
    const stats = await NNSUiActor.balanceOf(principal)

    console.log('NNS stats', stats)
  }

  useEffect(async () => {
    verifyConnectionAndAgent()
  }, [])

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
      <PlugConnect
        dark
        whitelist={['xsffd-7qaaa-aaaar-qacta-cai']}
        title={address ? address : 'Connect to Plug'}
        onConnectCallback={verifyConnectionAndAgent}
      />
    </div>
  )
}

export default Header
