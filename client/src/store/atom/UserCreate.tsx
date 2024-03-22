import { atom } from "recoil";

interface userInterface  {
    email:string,
    password:string
}
const User:userInterface = {
    email:"",
    password:""
}

export const user = atom<userInterface>({
    key:"userCreate",
    default:User

})