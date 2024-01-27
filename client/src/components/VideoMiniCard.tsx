import { title } from "process"

export default function VideoMiniCard(props:any){
    const truncatedTitle = props.title.substring(0,50);
    return (
        <div className="grid grid-cols-8">
            <img 
                src="/thumbnailPhoto.jpg" 
                alt="mini thumbnail"
                className="col-span-3 rounded-md" />
            
            <div className="col-span-5  ml-2 w-[70%]">
                <label className="font-medium text-md">{truncatedTitle}...</label>

                <h2 className="mt-3 text-gray-400 text-sm">{props.profileName}</h2>
                <h3 className=" text-gray-400 text-sm">{props.views} | {props.publishedOn}</h3>
            </div>

        </div>
    )
}