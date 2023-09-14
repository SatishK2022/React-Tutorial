import { useEffect } from "react"
import { YOUTUBE_VIDEO_API } from "../utils/constants"
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  async function getVideos() {
    const response = await fetch(YOUTUBE_VIDEO_API);
    const data = await response.json();
    console.log(data)
  }

  useEffect(() => {
    getVideos()
  }, [])

  return (
      <div className="flex flex-wrap items-center px-5 justify-between mt-16 ml-20">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
  )
}

export default VideoContainer