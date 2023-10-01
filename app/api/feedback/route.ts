import { NextResponse } from 'next/server';

export async function POST(request: Request,) {

  try {
    const data = request.body
    return NextResponse.json(data)

  } catch (error: any) {
    
    console.dir(error)
    return NextResponse.json(error.message)
  }


}
