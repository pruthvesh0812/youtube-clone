import SideBar from "@/components/SideBar";
import { videoAtom} from "@/store/atom/VideoAtom";
import { useRecoilState, useRecoilValue } from "recoil";

export default function uploadVideo() {
  const video = useRecoilValue(videoAtom);
  const setVideo = useRecoilState(videoAtom);
  return (
    <div className="flex">
        <SideBar />
        <div className="px-40">
            
            <input className="my-4 border rounded-md h-3 bg-transparent border-slate-200 hover:border-b-blue-900" 
                   type="text" 
                   value={video.videoTitle}
                   placeholder="Enter video title" 
                   onChange={(e)=>{setVideo( {...video,videoTitle:e.target.value})}}/>

            <input className="my-4 border rounded-md h-3 bg-transparent border-slate-200 hover:border-b-blue-900"
                   type="text" 
                   value={video.videoDescription} 
                   placeholder="Enter video description" 
                   onChange={(e)=>{setVideo( {...video,videoDescription:e.target.value})}}/>

            <input className="my-4 border rounded-md h-3 bg-transparent border-slate-200 hover:border-b-blue-900"
                   type="file"  
                   placeholder="Upload Video" />

            <input className="my-4 border rounded-md h-3 bg-transparent border-slate-200 hover:border-b-blue-900"
                   type="file"  
                   placeholder="Upload Thumbnail image" />
        </div>
    </div>
  )
}
