import { atom } from "recoil";

export const videoDetails = atom({
    key:"videoDetails",
    default: {
          videoTitle:"",
          videoDescription:"",
          likeCount: 0,
          viewCount: 0,
          publishedDate: "",
          thumbnailImageLink: "",
          fileName: ""
    }
})