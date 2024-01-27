import {  NextResponse } from "next/server";
import { NextRequest } from "next/server"; // only type
import jwt from 'jsonwebtoken'
import { SECRET } from "@/config";

export const config ={
    matcher:'/api/ifLoggedIn'
}

export function middleware(request:NextRequest){
    console.log("reaching ehre")
    const token = request.cookies.get('userTokenCookie')?.value;
    console.log(token)
    if(token){
        let user;
        jwt.verify(token,SECRET,(err,data)=>{
            console.log(data)
        });
        console.log("user");
        
        
        
        // NextResponse.next().cookies.set("user",JSON.stringify(user))
        
        // return NextResponse.redirect(new URL("/ifLoggedIn",request.url));
    }else{
       console.log("token not found")
        // return NextResponse.redirect(new URL("/login",request.url));
    }
}