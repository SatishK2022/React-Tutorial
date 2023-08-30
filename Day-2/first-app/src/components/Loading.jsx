
const ShimmerCard = () => {
  return (
    <div className="w-full md:w-[45%] lg:w-[30%] h-96 rounded-lg mb-8 bg-slate-100 overflow-hidden">
      <div className="h-60 bg-slate-300 animate-pulse"></div>
      <div className="p-5">
        <div className="w-full h-8 rounded-full bg-slate-300 animate-pulse "></div>
        <div className="flex mt-3 justify-between">
          <div className="w-3/4 h-5 rounded-full bg-slate-300 animate-pulse "></div>
          <div className="h-5 w-1/5 rounded-full bg-slate-300 animate-pulse "></div>
        </div>
        <div className="h-5 w-full rounded-full bg-slate-300 mt-3 animate-pulse "></div>
      </div>
    </div>
  )
}


const Loading = () => {
  return (
    <>
    <div className="pt-20 md:pt-28 lg:pt-32 flex items-center justify-center flex-col gap-5 px-5">
      <div className="h-10 rounded w-full md:w-3/4 lg:w-1/2 bg-slate-300 animate-pulse"></div>
      <div className="h-10 rounded w-28 bg-slate-300 animate-pulse"></div>
    </div>
    <div className='flex items-start flex-wrap justify-evenly mt-10 px-5 md:8 lg:px-10 '>
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