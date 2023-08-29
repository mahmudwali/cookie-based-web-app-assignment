import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { headers } from 'next/headers';

export async function GET(req ,res){
      
        const lang= req.cookies.get('language')
    return  NextResponse.json({language:lang.value},{
            status:200,
            headers:{
                  'Set-cookie':'language=en;path=/'
            }
      })
}