
export default function VideoCard({imgSrc,title,profileName,views,publishedOn}:any){
    return (
        <div>
            <img src={imgSrc} className="rounded-xl"/>
            <div className="grid grid-cols-8 pt-3 w-full">
                <div className="col-span-1">
                    <img className="rounded-full w-8 h-8 " src="/profile photo.jpg" />
                </div>
                <div className="col-span-7 pl-3 text-md">
                    <div>
                        {title}
                        
                    </div>
                    <div className="text-gray-400">
                        {profileName}
                    
                    </div>
                    <div className="text-gray-400">
                 {views}| {publishedOn}
                    </div>
                </div>
            </div>
        </div>
    )
}