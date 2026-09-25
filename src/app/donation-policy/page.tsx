/**
 * ============================================================================
 * DONATION & REFUND POLICY
 * ============================================================================
 * Aligned with Nigerian Electoral Act, INEC campaign finance guidelines,
 * and campaign transparency principles.
 */
import React from 'react';
import Link from 'next/link';
import { ShieldCheck, AlertCircle, FileText, ArrowRight, Heart } from 'lucide-react';
import { candidate, donation, seo } from '@/config/site.config';

export const metadata = {
  title: `Donation & Refund Policy: ${candidate.fullName}`,
  description: `Official campaign donation and refund policy for the ${candidate.fullName} campaign in accordance with Nigerian electoral laws.`,
};

export default function DonationPolicyPage() {
  return (
    <div className="pt-28 pb-16 md:pt-36">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" />
            Compliance & Transparency
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-dark mb-4">
            Donation & Refund Policy
          </h1>
          <p className="text-dark/70 text-base md:text-lg max-w-2xl mx-auto">
            Our commitment to legal compliance, financial integrity, and ethical campaigning under Nigerian law.
          </p>
          <p className="text-xs text-dark/50 mt-2">
            Last Updated: September 2026 &bull; Igbo Eze North / Udenu Federal Constituency
          </p>
        </div>

        {/* Official Account Warning */}
        <div className="mb-10 p-6 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-lg font-bold text-amber-900 mb-1">
              Official Account Warning
            </h2>
            <p className="text-sm text-amber-800 leading-relaxed">
              Donations should <strong>only</strong> be made into the official campaign bank account listed on our{' '}
              <Link href="/donate" className="underline font-semibold hover:text-amber-950">
                official donation page
              </Link>.
              No campaign staff member, volunteer, or intermediary is authorised to collect cash or direct bank transfers to personal accounts.
            </p>
          </div>
        </div>

        {/* Policy Content */}
        <div className="prose prose-lg max-w-none text-dark/80 space-y-8">
          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-dark/10 shadow-sm">
            <h2 className="text-xl font-display font-bold text-dark mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">1</span>
              Legal Framework & Eligibility
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              All political donations to the {candidate.fullName} Campaign are regulated by the <strong>Electoral Act</strong> of Nigeria, relevant Independent National Electoral Commission (INEC) campaign finance guidelines, and anti-money laundering regulations.
            </p>
            <ul className="text-sm space-y-2 list-disc pl-5">
              <li>Donations can only be accepted from eligible Nigerian citizens and registered indigenous entities.</li>
              <li>Under Nigerian law, political campaigns are strictly prohibited from receiving foreign donations or funds originating from anonymous offshore accounts.</li>
              <li>Contributions must not exceed the statutory donation thresholds established by the Electoral Act for National Assembly elections.</li>
            </ul>
          </section>

          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-dark/10 shadow-sm">
            <h2 className="text-xl font-display font-bold text-dark mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">2</span>
              Donor Verification & Record Keeping
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              To guarantee transparency and fulfill statutory reporting obligations to INEC:
            </p>
            <ul className="text-sm space-y-2 list-disc pl-5">
              <li>Donors making bank transfers are urged to complete the pledge and confirmation form on our website with accurate legal name, phone number, and state/LGA of residence.</li>
              <li>The campaign maintains rigorous internal ledgers recording all contributions, donor details, dates, and bank transaction references.</li>
              <li>Donor personal contact information is held securely according to our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> and the Nigeria Data Protection Act (NDPA).</li>
            </ul>
          </section>

          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-dark/10 shadow-sm">
            <h2 className="text-xl font-display font-bold text-dark mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">3</span>
              Use of Funds
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              100% of contributions received go towards legitimate campaign activities within the Igbo Eze North / Udenu Federal Constituency, including:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
              {[
                'Grassroots voter education & town halls in all wards',
                'Production of flyers, posters, and campaign materials',
                'Logistics and transport for ward coordinators',
                'Constituency poll agent training and mobilization',
                'Radio, community broadcasts, and digital communication',
                'Election day monitoring and integrity safeguarding'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs bg-dark/5 p-3 rounded-xl font-medium">
                  <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-xs text-dark/60 italic">
              Donations do not constitute an investment, do not purchase political influence, and confer no entitlement to special treatment or contracts.
            </p>
          </section>

          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-dark/10 shadow-sm">
            <h2 className="text-xl font-display font-bold text-dark mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">4</span>
              Refund Policy
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              Because political contributions are immediately committed to ongoing campaign planning and field mobilization, donations are generally <strong>non-refundable</strong>.
            </p>
            <p className="text-sm leading-relaxed mb-3">
              However, the campaign will review and process a refund in the following limited situations:
            </p>
            <ul className="text-sm space-y-2 list-disc pl-5">
              <li><strong>Duplicate Transaction:</strong> If a technical error or bank malfunction caused an unintended double debit.</li>
              <li><strong>Ineligible Contribution:</strong> If a donation was discovered to have come from a source disqualified under the Nigerian Electoral Act (e.g., foreign source or non-compliant entity), such funds will be promptly returned or reported to the statutory authorities.</li>
              <li><strong>Unauthorised Transaction:</strong> If evidence is provided of fraudulent card or account usage.</li>
            </ul>
            <p className="text-xs text-dark/60 mt-3">
              Refund requests must be lodged within 7 days of the transaction by contacting{' '}
              <a href={`mailto:${candidate.email}`} className="text-primary hover:underline">{candidate.email}</a>{' '}
              with proof of payment and bank transaction narrative.
            </p>
          </section>

          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-dark/10 shadow-sm">
            <h2 className="text-xl font-display font-bold text-dark mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">5</span>
              Contact & Enquiries
            </h2>
            <p className="text-sm leading-relaxed">
              If you have any questions about this policy, donor verification, or campaign expenditure audits, please contact our Finance & Compliance Directorate:
            </p>
            <div className="mt-4 p-4 rounded-xl bg-dark/5 text-sm space-y-1">
              <p><strong>Email:</strong> {candidate.email}</p>
              <p><strong>Phone:</strong> {candidate.phone}</p>
              <p><strong>Address:</strong> {candidate.officeAddress}</p>
            </div>
          </section>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link href="/donate" className="btn btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-base">
            <Heart className="w-5 h-5" />
            Proceed to Donation Page
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
