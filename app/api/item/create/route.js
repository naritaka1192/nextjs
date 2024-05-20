import { NextResponse } from "next/server";
import connectDB from "../../../utils/database"
import {ItemModel} from "../../../utils/schemaModels"


export async function POST(request){
  const reqBody = await request.json()

  try{
    await connectDB()
    await ItemModel.create(reqBody)
    return NextResponse.json({message:"アイテム作成完了"})
  }catch(err){
    return NextResponse.json({message:"アイテム作成失敗"})
  }


}

