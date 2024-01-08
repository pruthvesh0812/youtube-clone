
const SideBarComponentsArray = [
    {
        imgLink:"/home.png",
        sideBarComponentTitle:"Home",
    },
    {
        imgLink:"/home.png",
        sideBarComponentTitle:"Shorts",
    },
    {
        imgLink:"/home.png",
        sideBarComponentTitle:"Subscriptions",
    }
]

const SideBarComponents = ({clicked,imgLink,sideBarComponentTitle}:any)=>{
    return(
        <button className="rounded-lg h-10 grid grid-cols-5  w-full items-center hover:bg-stone-800/80">
            
            <img 
                src={imgLink}
                alt={sideBarComponentTitle} 
                className="col-span-1 ml-3"
                />

            <label className="col-span-4 text-white text-left ml-2">{sideBarComponentTitle}</label>
        </button>
    )
}

export default function SideBar(){
    return (
        <div className="w-1/3 mx-3">
            {
                SideBarComponentsArray.map(compo => {
                    return(
                        <SideBarComponents 
                            clicked=""
                            imgLink={compo.imgLink}
                            sideBarComponentTitle={compo.sideBarComponentTitle}
                            />
                    )
                })
            }
            <hr className="w-11/12 mx-4 my-3"/>
            {
                SideBarComponentsArray.map(compo => {
                    return(
                        <SideBarComponents 
                            clicked=""
                            imgLink={compo.imgLink}
                            SideBarComponents={compo.sideBarComponentTitle}
                            />
                    )
                })
            }
        </div>
    )
}