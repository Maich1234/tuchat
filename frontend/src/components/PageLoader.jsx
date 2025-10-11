import React from 'react'

function PageLoader() {
  return (
    <div className='flex flex-col items-center bg-transparent justify-center h-screen'>
      <span className="loading loading-infinity loading-xl size-10"></span>
      <p>Loading. Please wait...</p>
    </div>
  )
}

export default PageLoader
