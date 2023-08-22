import React from 'react'

const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className='shimmer-bg shimmer-img'></div>
      <div className="shimmer-content">
        <div className="shimmer-bg shimmer-title"></div>
        <div className="shimmer-ratings">
          <div className="shimmer-bg shimmer-cuisines"></div>
          <div className="shimmer-bg shimmer-rating"></div>
        </div>
        <div className="shimmer-bg shimmer-location"></div>
      </div>
    </div>
  )
}



const Loading = () => {
  return (
    <>
    <div className="shimmer-search-container">
      <div className="shimmer-bg shimmer-search"></div>
      <div className="shimmer-bg shimmer-btn"></div>
    </div>
    <div className='shimmer-container'>
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
    </>
  )
}

export default Loading