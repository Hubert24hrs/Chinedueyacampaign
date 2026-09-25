/**
 * TERMS OF USE
 */
import { candidate, seo } from '@/config/site.config';

export const metadata = { title: 'Terms of Use' };

export default function TermsPage() {
  return (
    <div className="pt-28 pb-16 md:pt-36">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-dark mb-8">Terms of Use</h1>
        <div className="prose prose-lg max-w-none text-dark-muted space-y-6">
          <p><strong>Effective Date:</strong> September 2026</p>

          <p>By accessing and using this website ({seo.siteUrl}), you agree to these terms of use. This website is operated by the campaign of {candidate.fullName} for the Federal House of Representatives.</p>

          <h2>1. Purpose</h2>
          <p>This website is a campaign communication tool. All content is provided for informational purposes to support the election campaign of {candidate.fullName}.</p>

          <h2>2. Content Accuracy</h2>
          <p>We strive to ensure all information on this website is accurate and up-to-date. However, campaign information may change. We are not liable for any decisions made based on information on this site.</p>

          <h2>3. User Submissions</h2>
          <p>By submitting information through our forms (volunteer signup, donation pledge, contact form), you confirm that the information you provide is truthful and accurate.</p>

          <h2>4. Intellectual Property</h2>
          <p>All content, logos, images, and materials on this website are the property of the {candidate.fullName} campaign and may not be reproduced without permission, except for personal, non-commercial sharing in support of the campaign.</p>

          <h2>5. External Links</h2>
          <p>This website may contain links to external sites (e.g., INEC, social media platforms). We are not responsible for the content or privacy practices of external sites.</p>

          <h2>6. Prohibited Use</h2>
          <p>You may not use this website to spread misinformation, defame any person, attempt unauthorised access, or engage in any activity that violates Nigerian law.</p>

          <h2>7. Limitation of Liability</h2>
          <p>This website is provided &quot;as is&quot; without warranties. We are not liable for any damages arising from your use of this site.</p>

          <h2>8. Changes to Terms</h2>
          <p>We may update these terms at any time. Continued use of the website constitutes acceptance of updated terms.</p>

          <h2>9. Contact</h2>
          <p>For questions about these terms, contact us at <a href={`mailto:${candidate.email}`}>{candidate.email}</a>.</p>

          <p className="text-xs italic">{'{{TO_VERIFY_WITH_CLIENT: Review terms with legal counsel.}}'}</p>
        </div>
      </div>
    </div>
  );
}
