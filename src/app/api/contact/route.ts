import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Console logging / logger simulation
    console.log(`[Contact API] Message from ${name} (${email}): ${subject || 'No subject'}`);

    return NextResponse.json({
      success: true,
      message: 'Message received successfully.'
    });
  } catch {
    return NextResponse.json({ error: 'Failed to process message' }, { status: 500 });
  }
}
