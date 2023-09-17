import { NextResponse } from 'next/server';
import { getRepos } from './helpers';

export async function GET(request: Request) {

  try {
    return NextResponse.json(await getRepos())
  } catch (error) {
    console.dir(error)
  }


}