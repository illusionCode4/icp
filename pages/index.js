import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import ListComponent from '../components/ListComponent'
import CryptoJS from 'crypto-js'

const dummyData = [
  {
    token: 'ordi',
    from: 'brc-20',
    deploy: '2023/3/8 12:16:31',
    progress: '100.00%',
    holders: '13,480',
    transactions: '223,680',
  },
  {
    token: 'meme',
    from: 'brc-20',
    deploy: '2023/3/8 20:44:22',
    progress: '100.00%',
    holders: '5,161',
    transactions: '126,751',
  },
  {
    token: 'punk',
    from: 'brc-20',
    deploy: '2023/3/9 11:52:13',
    progress: '100.00%',
    holders: '2,324',
    transactions: '16,475',
  },
  {
    token: 'gold',
    from: 'brc-20',
    deploy: '2023/3/9 13:16:42',
    progress: '100.00%',
    holders: '715',
    transactions: '26,787',
  },
  {
    token: 'BAYC',
    from: 'brc-20',
    deploy: '2023/3/9 13:32:14',
    progress: '100.00%',
    holders: '963',
    transactions: '12,901',
  },
  {
    token: '<10K',
    from: 'brc-20',
    deploy: '2023/3/9 13:32:14',
    progress: '100.00%',
    holders: '493',
    transactions: '11,019',
  },
  {
    token: 'sats',
    from: 'brc-20',
    deploy: '2023/3/9 13:32:14',
    progress: '100.00%',
    holders: '47,379',
    transactions: '21,605,487',
  },
  {
    token: 'dogim',
    from: 'drc-20',
    deploy: '2023/3/8 12:16:31',
    progress: '100.00%',
    holders: '13,130',
    transactions: '223,680',
  },
  {
    token: 'ATOM',
    from: 'arc-20',
    deploy: '2023/3/8 12:16:31',
    progress: '100.00%',
    holders: '2,252',
    transactions: '223,680',
  },
  {
    token: 'REALM',
    from: 'arc-20',
    deploy: '2023/3/8 12:16:31',
    progress: '100.00%',
    holders: '1,919',
    transactions: '223,680',
  },
  {
    token: 'AVM',
    from: 'arc-20',
    deploy: '2023/3/8 12:16:31',
    progress: '100.00%',
    holders: '4,243',
    transactions: '223,680',
  },
  {
    token: 'DMINT',
    from: 'arc-20',
    deploy: '2023/3/8 12:16:31',
    progress: '100.00%',
    holders: '1,919',
    transactions: '223,680',
  },

  {
    token: 'ethi',
    from: 'ierc-20',
    deploy: '2023/7/1 12:16:31',
    progress: '100.00%',
    holders: '5,971',
    transactions: '48,490',
  },
  {
    token: 'ierc',
    from: 'ierc-20',
    deploy: '2023/7/8 12:16:31',
    progress: '100.00%',
    holders: '2,562',
    transactions: '25,700',
  },
  {
    token: 'eths',
    from: 'ierc-20',
    deploy: '2023/7/8 12:16:31',
    progress: '100.00%',
    holders: '2,585',
    transactions: '48,490',
  },

  {
    token: 'BNBN',
    from: 'BNB-20',
    deploy: '2023/7/1 12:16:31',
    progress: '100.00%',
    holders: '4,304',
    transactions: '5,490',
  },
  {
    token: 'BNBS',
    from: 'BNB-20',
    deploy: '2023/7/1 12:16:31',
    progress: '100.00%',
    holders: '3,304',
    transactions: '5,620',
  },
]

const Home = () => {
  return (
    <>
      <Header />
      <ListComponent tokenList={dummyData} />
    </>
  )
}

export default Home
