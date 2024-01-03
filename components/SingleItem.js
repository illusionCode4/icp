import React from 'react'

const SingleItem = ({ token, deploy, progress, holders, transactions }) => {
  return (
    <div className="grid grid-cols-5 rounded-lg bg-white p-4 shadow-md">
      <p className="col-span-1 flex items-center justify-center  text-black">
        {token}
      </p>
      <p className="col-span-1 flex items-center justify-center text-black">
        {deploy}
      </p>
      <p className="col-span-1 flex items-center justify-center  text-black">
        {progress}
      </p>
      <p className="col-span-1 flex items-center justify-center  text-black">
        {holders}
      </p>
      <p className="col-span-1 flex items-center justify-center  text-black">
        {transactions}
      </p>
    </div>
  )
}

export default SingleItem
