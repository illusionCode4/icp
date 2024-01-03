import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import SingleItem from './SingleItem.js'
//8436206D1596BAE3154DC3CE65828AA9
//c8a1ae1c-a324-4435-97c2-41a25e831c82
const ListComponent = ({ tokenList }) => {
  const [chain, setChain] = useState('brc-20')

  const changeChain = (chain) => {
    setChain(chain)
  }
  return (
    <div className="mx-auto mb-10 mt-12 w-[1160px] max-w-full rounded-2xl bg-[#d0d7de] py-6 px-5 xl:px-7">
      <div className="flex flex-col gap-9 pb-10">
        <div className="flex items-baseline justify-between">
          <h1 className="font-mono text-3xl font-bold text-black">Explorer</h1>
          <a
            href="https://domo-2.gitbook.io/brc-20-experiment"
            target="blank"
            className="text-14 font-semibold text-black"
          >
            What is BRC-20?
          </a>
        </div>
      </div>
      <div className="mb-4 flex  justify-between ">
        <div className="flex gap-2">
          <button
            onClick={() => {
              changeChain('brc-20')
            }}
            className="cursor-pointer rounded-2xl bg-[#2181e2] px-4 py-1 text-lg  font-semibold text-white hover:bg-[#42a0ff]"
          >
            BRC-20
          </button>
          <button
            onClick={() => {
              changeChain('arc-20')
            }}
            className="cursor-pointer rounded-2xl bg-[#2181e2] px-4 py-1 text-lg  font-semibold text-white hover:bg-[#42a0ff]"
          >
            ARC-20
          </button>
          <button
            onClick={() => {
              changeChain('drc-20')
            }}
            className="cursor-pointer rounded-2xl bg-[#2181e2] px-4 py-1 text-lg  font-semibold text-white hover:bg-[#42a0ff]"
          >
            Drc-20
          </button>
          <button
            onClick={() => {
              changeChain('ierc-20')
            }}
            className="cursor-pointer rounded-2xl bg-[#2181e2] px-4 py-1 text-lg  font-semibold text-white hover:bg-[#42a0ff]"
          >
            IERC-20
          </button>
          <button
            onClick={() => {
              changeChain('BNB-20')
            }}
            className="cursor-pointer rounded-2xl bg-[#2181e2] px-4 py-1 text-lg  font-semibold text-white hover:bg-[#42a0ff]"
          >
            BNB-20
          </button>
        </div>
        <div
          className={`w-max-[120px] mx-[0.8rem] flex  items-center rounded-[0.8rem] bg-[#363840] hover:bg-[#4c505c]`}
        >
          <div className={`mx-3 text-lg font-bold text-[#8a939b]`}>
            <AiOutlineSearch />
          </div>
          <input
            className={`w-border-0 h-[2.6rem] bg-transparent px-2 pl-0 text-[#e6e8eb] outline-0 ring-0 placeholder:text-[#8a939b]`}
            placeholder="Search Tick"
          />
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-4">
        <div className="grid grid-cols-5 ">
          <h1 className="col-span-1 flex items-center justify-center  font-mono text-2xl text-gray-600">
            Tick
          </h1>

          <h1 className="col-span-1 flex items-center justify-center font-mono text-2xl text-gray-600">
            Deploy Time
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              dataSlot="icon"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </h1>
          <h1 className="col-span-1 flex items-center justify-center  font-mono text-2xl text-gray-600">
            Progress
          </h1>
          <h1 className="col-span-1 flex items-center justify-center  font-mono text-2xl text-gray-600">
            Holders
          </h1>
          <h1 className="col-span-1 flex items-center justify-center  font-mono text-2xl text-gray-600">
            Transactions
          </h1>
        </div>
        {tokenList
          .filter((item) => item.from === chain)
          .map((item, index) => (
            <SingleItem
              key={index}
              token={item.token}
              deploy={item.deploy}
              progress={item.progress}
              holders={item.holders}
              transactions={item.transactions}
            />
          ))}
      </div>
    </div>
  )
}

export default ListComponent
