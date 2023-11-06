import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { contacts, name, message }: FeedBackForm = await request.json()

    const response = await fetch(process.env.LBAS_HOST + "/api/notification/email/send", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        senderContacts: contacts,
        senderName: name,
        body: message,
      }),

    })


    return NextResponse.json(response)

  } catch (error: any) {

    console.dir(error)
    return NextResponse.json(error.message)
  }


}


interface FeedBackForm {
  name: string;
  contacts: string;
  message: string

}