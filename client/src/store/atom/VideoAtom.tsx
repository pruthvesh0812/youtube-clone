import { atom } from "recoil";
const video = {
    videoTitle:"",
    videoDescription:"",
    videoFile:null,
    thumbnail:null
}
export const videoAtom = atom({
    key:"videoAtom",
    default:video
})