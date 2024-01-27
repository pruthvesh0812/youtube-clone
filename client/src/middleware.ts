import {  NextResponse } from "next/server";
import { NextRequest } from "next/server"; // only type
import jwt from 'jsonwebtoken'
import {SignJWT, jwtVerify, type JWTPayload} from 'jose';

import { SECRET } from "@/config";

export const config ={
    matcher:'/api/ifLoggedIn'
}

export async function middleware(request:NextRequest){
    console.log("reaching ehre")
    const token = request.cookies.get('userTokenCookie')?.value;
    if(token){
        console.log(token)
        const user = await jwtVerify(token, new TextEncoder().encode(SECRET))
        console.log(user);
        // let user;
        // jwt.verify(token,SECRET,(err,data)=>{
        //     console.log(data)
        // });
        // console.log("user");
        
        
        
        // NextResponse.next().cookies.set("user",JSON.stringify(user))
        
        // return NextResponse.redirect(new URL("/ifLoggedIn",request.url));
    }else{
       console.log("token not found")
        // return NextResponse.redirect(new URL("/login",request.url));
    }
}