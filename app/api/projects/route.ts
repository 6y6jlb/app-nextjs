import { NextResponse } from 'next/server';
import { getRepos } from './helpers';

export async function GET(request: Request,) {

  try {
    return NextResponse.json(await getRepos())
  } catch (error:any) {
    console.dir(error)
    return NextResponse.json(error.message)
  }


}