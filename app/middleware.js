import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request){
  const token ="eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15QGdtYWlsLmNvbSIsImV4cCI6MTcxNjU1MzA0MX0.eaF1n7MB0RSZPp4VXVnBYZyFD-xb_UHY0j_F75K650Y"

  //await request.headers.get("Authorization")?.split(" ")[1]

  if(!token){
    return NextResponse.json({message:"トークンがありません"})
  }

  try{
    const secretKey = new TextEncoder().encode("next-market-app-book")
    const decodedJwt =await jwtVerify(token,secretKey)
    return NextResponse.next()
  }catch(err){
    return NextResponse.json({message:"トークンが正しくないのでログインしてください"})
  }
}

export const config={
  matcher:["/api/item/create","/api/item/update/:path*","/api/item/delete/:path*"],
}