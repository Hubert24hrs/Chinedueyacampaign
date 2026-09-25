/**
 * ============================================================================
 * API Route — Donation pledge submission
 * ============================================================================
 * Handles multipart form data (for proof-of-payment uploads).
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const donateSchema = z.object({
  fullName: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional().or(z.literal('')),
  amount: z.string().transform(Number).pipe(z.number().min(100, 'Minimum donation is ₦100')),
  note: z.string().optional(),
  anonymous: z.string().transform((v) => v === 'true'),
  transferMade: z.string().transform((v) => v === 'true'),
  _hp: z.string().max(0).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Convert FormData to plain object
    const body: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        body[key] = value;
      }
    });

    // Honeypot check
    if (body._hp) {
      return NextResponse.json({ success: true, message: 'Thank you!' }, { status: 200 });
    }

    const result = donateSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;

    // Handle file upload (proof of payment)
    const proofFile = formData.get('proofOfPayment') as File | null;
    if (proofFile && proofFile.size > 0) {
      // Validate file
      const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!allowedTypes.includes(proofFile.type)) {
        return NextResponse.json(
          { success: false, message: 'Invalid file type.' },
          { status: 400 }
        );
      }

      if (proofFile.size > maxSize) {
        return NextResponse.json(
          { success: false, message: 'File too large. Maximum 5MB.' },
          { status: 400 }
        );
      }

      // TODO: Upload to Supabase storage or GCS
      // const { data: upload, error } = await supabase.storage
      //   .from('proof-of-payment')
      //   .upload(`${Date.now()}-${proofFile.name}`, proofFile);
    }

    // ─── Storage Adapter ───────────────────────────────────────────────
    // TODO: Insert into Supabase
    // const { error } = await supabase.from('donation_pledges').insert({
    //   full_name: data.anonymous ? 'Anonymous' : data.fullName,
    //   phone: data.phone,
    //   email: data.email,
    //   amount: data.amount,
    //   note: data.note,
    //   anonymous: data.anonymous,
    //   transfer_made: data.transferMade,
    //   proof_url: proofUploadUrl,
    // });

    console.log('[Donation Pledge]', JSON.stringify(data, null, 2));

    // TODO: Send email notification via Resend

    return NextResponse.json(
      { success: true, message: 'Donation pledge recorded. Thank you!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Donate API Error]', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
