import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { headers} from 'next/headers'

export async function GET(req ,res){
      
    return  NextResponse.json({name:"Mahmud wali",age:23,email:'mahmud.wali29@gmail.com'})
}