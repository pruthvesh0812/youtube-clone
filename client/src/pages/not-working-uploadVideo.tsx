import SideBar from "@/components/SideBar";
import { videoAtom} from "@/store/atom/VideoAtom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import axios from 'axios'
import { useState , ChangeEvent, FormEvent} from "react";

export default function uploadVideo() {

//   const video = useRecoilValue(videoAtom);
//   const setVideo = useSetRecoilState(videoAtom);
  const [imgsrc,setImgSrc] = useState("");

  const formdata = new FormData()

  function getBase64(file: File): Promise<string> {
       return new Promise((resolve, reject) => {
         const reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = () => resolve(reader.result?.toString().split(',')[1] || "");
         reader.onerror = error => reject(error);
       });
     }

     const handleOnChange = (e: ChangeEvent<HTMLInputElement>) =>{
       const inputEle = e.target as HTMLInputElement;
       
       if(inputEle.files && inputEle.files.length > 0){

       const reader = new FileReader();

       reader.onload = function(onLoadEvent){
              setImgSrc(onLoadEvent.target?.result as string)
              console.log(onLoadEvent.target)
       }

       reader.readAsDataURL(inputEle.files[0])   
     }

     const handleOnSubmit = (e:FormEvent<HTMLFormElement>) =>{
       e.preventDefault()
     }

  return (
    <div className="flex">
        {/* <SideBar /> */}
        <div className="px-40 flex flex-col">

              <form method="post"  onSubmit={handleOnSubmit}>
              <input className="my-4 border rounded-md h-8 bg-transparent border-slate-200 hover:border-b-blue-900"
                     type="file"  
                     onChange={handleOnChange}
                     placeholder="Upload Video" />


              {/* <button className="py-3 px-6 border-blue-500 bg-cyan-950 text-teal-50" 
                      onClick={async ()=>{
                            
                            try{
                                   const fileInput = document.querySelector<HTMLInputElement>('#files > input[type="file"]');
                                   console.log(fileInput,"sdfdf")
                                   const file = fileInput?.files?.[0];
       
                                   if (file) {
                                          getBase64(file).then(
                                            data => {console.log(data)
                                            formdata.append('video_base64', data);}
                                          );
                                        } else {
                                          console.error("No file selected.");
                                          return
                                        }
                                  
                                   document.cookie = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsImVtYWlsIjoicHJ1dGh2ZXNoQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicHJ1dGh2ZXNoIiwiZXhwIjoxNzA3MDMzMzUxLCJpYXQiOjE3MDcwMjI1NTEsIm5iZiI6MTcwNzAyMjU1MX0.V7aHwVlVFP_Vm_nS1UkyqvAbBrAsEtQCS8hG6bZzYEk; path=/`;
                                   axios.post("http://localhost:3000/api/uploadVideo",formdata,{
                                          headers: {
                                                 'Content-Type': 'multipart/form-data',
                                               },
                                          withCredentials: true,
                                   }).then((res)=>{
                                    console.log(res)
                                   }) 
                            }
                            catch(err){
                                   console.log(err,"some error occured")
                            }
                            
                           
                     
                      }}>Upload</button> */}
              </form>
            
            {/* <input className="my-4 border rounded-md h-8 bg-transparent border-slate-200 hover:border-b-blue-900" 
                   type="text" 
                   value={video.videoTitle}
                   placeholder="Enter video title" 
                   onChange={(e)=>{setVideo( {...video,videoTitle:e.target.value})}}/>

            <input className="my-4 border rounded-md h-8 bg-transparent border-slate-200 hover:border-b-blue-900"
                   type="text" 
                   value={video.videoDescription} 
                   placeholder="Enter video description" 
                   onChange={(e)=>{setVideo( {...video,videoDescription:e.target.value})}}/> */}

            

            {/* <input className="my-4 border rounded-md h-8 bg-transparent border-slate-200 hover:border-b-blue-900"
                   type="file"  
                   placeholder="Upload Thumbnail image" /> */}
                   
              
        </div>
        {/* {video.videoTitle}
        {video.videoDescription} */}
        
    </div>
  )
}}
