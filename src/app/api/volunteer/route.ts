/**
 * ============================================================================
 * API Route — Volunteer signup
 * ============================================================================
 * Validates input, checks honeypot, stores submission.
 * In production, connect to Supabase and send email via Resend.
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const volunteerSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number required'),
  whatsapp: z.string().optional(),
  email: z.string().email().optional().or(z.literal('')),
  lga: z.string().min(1, 'LGA is required'),
  ward: z.string().optional(),
  skills: z.string().optional(),
  availability: z.string().optional(),
  _hp: z.string().max(0).optional(), // honeypot
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot check
    if (body._hp) {
      return NextResponse.json({ success: true, message: 'Thank you!' }, { status: 200 });
    }

    const result = volunteerSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;

    // ─── Storage Adapter ───────────────────────────────────────────────
    // TODO: Replace with Supabase insert
    // const { data: row, error } = await supabase.from('volunteers').insert(data);
    console.log('[Volunteer Signup]', JSON.stringify(data, null, 2));

    // TODO: Send email notification via Resend
    // await resend.emails.send({
    //   from: 'campaign@chinedueya.ng',
    //   to: 'info@chinedueya.ng',
    //   subject: `New Volunteer: ${data.fullName}`,
    //   text: `Name: ${data.fullName}\nPhone: ${data.phone}\nLGA: ${data.lga}\nWard: ${data.ward}\nSkills: ${data.skills}`,
    // });

    return NextResponse.json(
      { success: true, message: 'Thank you for volunteering! We will contact you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Volunteer API Error]', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
