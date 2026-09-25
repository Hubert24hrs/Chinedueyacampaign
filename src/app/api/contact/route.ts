/**
 * API Route — Contact form
 */
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(2),
  message: z.string().min(10),
  _hp: z.string().max(0).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (body._hp) return NextResponse.json({ success: true }, { status: 200 });

    const result = schema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ success: false, message: 'Validation failed' }, { status: 400 });
    }

    // TODO: Store in Supabase + send email via Resend
    console.log('[Contact Form]', JSON.stringify(result.data, null, 2));

    return NextResponse.json({ success: true, message: 'Message sent!' }, { status: 200 });
  } catch (error) {
    console.error('[Contact API Error]', error);
    return NextResponse.json({ success: false, message: 'An error occurred.' }, { status: 500 });
  }
}
