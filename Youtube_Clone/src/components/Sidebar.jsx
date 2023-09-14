import { MdOutlineSubscriptions, MdOutlineVideoLibrary, MdOutlineWatchLater, MdOutlineSlowMotionVideo } from 'react-icons/md'
import { AiOutlineLike, AiOutlineShopping } from 'react-icons/ai'
import { GoHistory, GoHomeFill } from 'react-icons/go'
import {RiVideoLine} from 'react-icons/ri'
import {BsFire, BsMusicNote} from 'react-icons/bs'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    // Early Return
    if (!isMenuOpen) 
        return (
            <div className='px-1.5 h-[90vh] bg-white fixed left-0 z-20 shadow-lg'>
                <ul className='flex flex-col gap-5'>
                    <li className='flex flex-col items-center cursor-pointer hover:bg-gray-100 py-2 rounded-md'>
                        <GoHomeFill size={25}/>
                        <p className='text-xs'>Home</p>
                    </li>
                    <li className='flex flex-col items-center cursor-pointer hover:bg-gray-100 py-2 rounded-md'>
                        <MdOutlineSlowMotionVideo size={25}/>
                        <p className='text-xs'>Shorts</p>
                    </li>
                    <li className='flex flex-col items-center cursor-pointer hover:bg-gray-100 py-2 rounded-md'>
                        <MdOutlineSubscriptions size={25}/>
                        <p className='text-xs'>Subscriptions</p>
                    </li>
                    <li className='flex flex-col items-center cursor-pointer hover:bg-gray-100 py-2 rounded-md'>
                        <MdOutlineVideoLibrary size={25}/>
                        <p className='text-xs'>Library</p>
                    </li>
                </ul>
            </div>
        );

  return (
    <div className="flex flex-col gap-5 h-[90vh] px-5 w-56 text-sm bg-white fixed left-0 z-20 shadow-lg">
        <ul className="border-b border-gray-500 pb-3">
            <li className="py-2 px-2 hover:bg-gray-100 cursor-pointer rounded-md flex items-center gap-5 font-semibold"><GoHomeFill size={20}/> Home</li>
            <li className="py-2 px-2 hover:bg-gray-100 cursor-pointer rounded-md flex items-center gap-5"><MdOutlineSlowMotionVideo size={20}/> Shorts</li>
            <li className="py-2 px-2 hover:bg-gray-100 cursor-pointer rounded-md flex items-center gap-5"><MdOutlineSubscriptions size={20}/> Subscriptions</li>
        </ul>
        <ul className="border-b border-gray-500 pb-3">
            <li className="py-2 px-2 hover:bg-gray-100 cursor-pointer rounded-md flex items-center gap-5"><MdOutlineVideoLibrary size={20}/> Library</li>
            <li className="py-2 px-2 hover:bg-gray-100 cursor-pointer rounded-md flex items-center gap-5"><GoHistory size={20}/> History</li>
            <li className="py-2 px-2 hover:bg-gray-100 cursor-pointer rounded-md flex items-center gap-5"><RiVideoLine size={20}/> Your videos</li>
            <li className="py-2 px-2 hover:bg-gray-100 cursor-pointer rounded-md flex items-center gap-5"><MdOutlineWatchLater size={20}/> Watch later</li>
            <li className="py-2 px-2 hover:bg-gray-100 cursor-pointer rounded-md flex items-center gap-5"><AiOutlineLike size={20}/> Liked videos</li>
        </ul>
        <ul>
            <h2 className="font-semibold text-lg px-2 pb-2">Explore</h2>
            <li className="py-2 px-2 hover:bg-gray-100 cursor-pointer rounded-md flex items-center gap-5"><BsFire size={20}/>Trending</li>
            <li className="py-2 px-2 hover:bg-gray-100 cursor-pointer rounded-md flex items-center gap-5"><AiOutlineShopping size={20}/>Shopping</li>
            <li className="py-2 px-2 hover:bg-gray-100 cursor-pointer rounded-md flex items-center gap-5"><BsMusicNote size={20}/>Music</li>
        </ul>
    </div>
  )
}

export default Sidebar