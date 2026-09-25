/**
 * API Route — Newsletter signup
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Valid email required'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // TODO: Store in Supabase + send double opt-in email via Resend
    console.log('[Newsletter Signup]', result.data.email);

    return NextResponse.json(
      { success: true, message: 'Subscribed! Check your email to confirm.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Newsletter API Error]', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred.' },
      { status: 500 }
    );
  }
}
