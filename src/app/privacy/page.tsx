/**
 * PRIVACY POLICY — Aligned with Nigeria Data Protection Act (NDPA)
 */
import { candidate, seo } from '@/config/site.config';

export const metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for the ${candidate.fullName} campaign website.`,
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-16 md:pt-36">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-dark mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-dark-muted space-y-6">
          <p><strong>Effective Date:</strong> September 2026</p>
          <p><strong>Last Updated:</strong> September 2026</p>

          <p>This Privacy Policy explains how the campaign of {candidate.fullName} (&quot;we,&quot; &quot;us,&quot; or &quot;the Campaign&quot;) collects, uses, and protects your personal information through this website ({seo.siteUrl}). This policy is aligned with the Nigeria Data Protection Act (NDPA) 2023 and the Nigeria Data Protection Regulation (NDPR).</p>

          <h2>1. Information We Collect</h2>
          <p>We collect only the minimum personal data necessary for campaign operations:</p>
          <ul>
            <li><strong>Contact Information:</strong> Name, phone number, email address, WhatsApp number</li>
            <li><strong>Location Information:</strong> LGA, ward, and general location within the constituency</li>
            <li><strong>Volunteer Data:</strong> Skills, availability, and areas of interest</li>
            <li><strong>Donation Information:</strong> Donor name, contact details, donation amount, and proof of payment</li>
            <li><strong>Communication Data:</strong> Messages, questions, and feedback submitted through our forms</li>
            <li><strong>Technical Data:</strong> Browser type, device information, and anonymised usage analytics</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To coordinate volunteer activities and campaign operations</li>
            <li>To process and verify donation pledges</li>
            <li>To respond to your enquiries and messages</li>
            <li>To send campaign updates (only with your consent)</li>
            <li>To comply with electoral law and INEC campaign finance regulations</li>
            <li>To improve our website and user experience</li>
          </ul>

          <h2>3. Legal Basis for Processing</h2>
          <p>We process your personal data based on:</p>
          <ul>
            <li><strong>Consent:</strong> You voluntarily provide information through our forms</li>
            <li><strong>Legitimate Interest:</strong> Campaign coordination and communication</li>
            <li><strong>Legal Obligation:</strong> Compliance with electoral and data protection laws</li>
          </ul>

          <h2>4. Data Sharing</h2>
          <p>We do NOT sell, rent, or trade your personal information. We may share data with:</p>
          <ul>
            <li>Campaign team members who need it for legitimate campaign activities</li>
            <li>Service providers (email, hosting) under data processing agreements</li>
            <li>Regulatory authorities when required by law (e.g., INEC campaign finance reports)</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>We implement reasonable technical and organisational measures to protect your data, including encryption, access controls, and secure hosting.</p>

          <h2>6. Your Rights</h2>
          <p>Under the NDPA, you have the right to:</p>
          <ul>
            <li>Access your personal data held by us</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent at any time</li>
            <li>Object to processing of your data</li>
            <li>Lodge a complaint with the Nigeria Data Protection Commission (NDPC)</li>
          </ul>

          <h2>7. Data Retention</h2>
          <p>We retain personal data only for as long as necessary for campaign purposes and legal compliance. After the election cycle, data will be securely deleted unless retention is required by law.</p>

          <h2>8. Cookies</h2>
          <p>This website uses minimal, privacy-friendly cookies for essential functionality. We do not use tracking cookies without your consent.</p>

          <h2>9. Contact Us</h2>
          <p>For privacy-related enquiries or to exercise your rights, contact us at:</p>
          <p>Email: <a href={`mailto:${candidate.email}`}>{candidate.email}</a><br />Phone: {candidate.phone}<br />Address: {candidate.officeAddress}</p>

          <p className="text-xs italic">{'{{TO_VERIFY_WITH_CLIENT: Review and confirm all privacy policy details with legal counsel before launch.}}'}</p>
        </div>
      </div>
    </div>
  );
}
