import { useState } from "react"



export default function Description() {
    const [moreClicked, setMoreClicked] = useState(false);
    const handleMore = () => {
        setMoreClicked(prev => { return !prev })
        {console.log(moreClicked)}
    }

    return (
        
        <div className={`relative rounded-md bg-stone-600/50 w-full p-3 my-3 hover:bg-stone-600/70 ${moreClicked ? "h-52" : "h-auto"}`}   >
            <div className="text-slate-100 text-md">
                Welcome to another episode of React Explorers! 🚀 In today's video, we dive deep into the world of React Hooks, exploring their functionality and use cases.
                Whether you're a beginner or an experienced React developer, this tutorial has something for everyone.
                <label className="text-slate-100 font-medium hover:text-blue-400" onClick={handleMore}>{`${moreClicked ? "" : "...more"}`}</label>
            </div>
            <label className="text-slate-100 font-medium absolute bottom-2 right-2 hover:text-blue-400 " onClick={handleMore}>{`${moreClicked ? "Show less" : ""}`}</label>

        </div>
    )
}
