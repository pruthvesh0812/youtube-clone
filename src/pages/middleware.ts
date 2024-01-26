import {  NextResponse } from "next/server";
import { NextRequest } from "next/server"; // only type
import jwt from 'jsonwebtoken'
import { SECRET } from "@/config";

export const config ={
    matcher:['/ifLoggedIn']
}

export function middleware(request:NextRequest){
    const token = request.cookies.get('userTokenCookie')?.value;
    const response = NextResponse.next();
    if(token){
        const user=jwt.verify(token,SECRET);
        console.log(user);

        
        response.cookies.set("user",JSON.stringify(user))
        
        return NextResponse.redirect(new URL("/ifLoggedIn",request.url));
    }else{
       
        return NextResponse.redirect(new URL("/login",request.url));
    }
}