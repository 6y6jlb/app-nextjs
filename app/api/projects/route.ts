import { NextResponse } from 'next/server';
import { getRepos } from '../../../service/repos';

export async function GET(request: Request,) {

  try {
    return NextResponse.json(await getRepos())
  } catch (error:any) {
    console.dir(error)
    return NextResponse.json(error.message)
  }


}