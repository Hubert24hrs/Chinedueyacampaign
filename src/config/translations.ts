/**
 * ============================================================================
 * i18n Translations — English & Igbo
 * ============================================================================
 */

export type Locale = 'en' | 'ig';

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.agenda': 'Agenda',
    'nav.constituency': 'Constituency',
    'nav.news': 'News & Updates',
    'nav.events': 'Events',
    'nav.gallery': 'Gallery',
    'nav.getInvolved': 'Get Involved',
    'nav.donate': 'Donate',
    'nav.contact': 'Contact',
    'nav.vote': 'Voter Info',
    'nav.media': 'Media & Press',

    // Hero
    'hero.cta.donate': 'Donate Now',
    'hero.cta.volunteer': 'Join the Movement',
    'hero.countdown.days': 'Days',
    'hero.countdown.hours': 'Hours',
    'hero.countdown.minutes': 'Minutes',
    'hero.countdown.seconds': 'Seconds',
    'hero.countdown.label': 'Until Election Day',

    // Common
    'common.readMore': 'Read More',
    'common.learnMore': 'Learn More',
    'common.submit': 'Submit',
    'common.sending': 'Sending...',
    'common.success': 'Success!',
    'common.error': 'Something went wrong. Please try again.',
    'common.required': 'Required',
    'common.optional': 'Optional',
    'common.download': 'Download',
    'common.share': 'Share',
    'common.close': 'Close',
    'common.previous': 'Previous',
    'common.next': 'Next',
    'common.viewAll': 'View All',
    'common.backToTop': 'Back to Top',

    // Donate
    'donate.title': 'Support the Campaign',
    'donate.subtitle': 'Your contribution powers change in our constituency',
    'donate.bankTransfer': 'Bank Transfer Details',
    'donate.copyAccount': 'Copy Account Number',
    'donate.copied': 'Copied!',
    'donate.pledgeForm': 'Record Your Donation',
    'donate.amount': 'Donation Amount (₦)',
    'donate.customAmount': 'Custom Amount',
    'donate.fullName': 'Full Name',
    'donate.phone': 'Phone Number',
    'donate.email': 'Email Address',
    'donate.note': 'Note (Optional)',
    'donate.anonymous': 'Donate anonymously',
    'donate.transferMade': 'I have made the transfer',
    'donate.uploadProof': 'Upload proof of payment',
    'donate.compliance': 'I confirm this donation is from a Nigerian source and complies with applicable limits',
    'donate.warning': 'Only donate to the official account shown on this page. Beware of scams.',
    'donate.thankYou': 'Thank You!',
    'donate.thankYouMessage': 'Your generous support brings us closer to a better future for our constituency.',

    // Volunteer
    'volunteer.title': 'Get Involved',
    'volunteer.subtitle': 'Join thousands of volunteers building a better future',
    'volunteer.name': 'Full Name',
    'volunteer.phone': 'Phone Number',
    'volunteer.whatsapp': 'WhatsApp Number',
    'volunteer.lga': 'Local Government Area',
    'volunteer.ward': 'Ward',
    'volunteer.skills': 'Skills & How You Can Help',
    'volunteer.availability': 'Availability',
    'volunteer.submit': 'Join the Movement',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We want to hear from you',
    'contact.name': 'Your Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.subject': 'Subject',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.whatsapp': 'Chat on WhatsApp',
    'contact.office': 'Campaign Office',

    // About
    'about.title': 'About Hon. Chinedu Eya',
    'about.bio': 'Biography & Story',
    'about.values': 'Values & Vision',
    'about.career': 'Career & Public Service',
    'about.education': 'Education',
    'about.personalMessage': 'A Personal Message',

    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.donationPolicy': 'Donation Policy',
    'footer.disclaimer':
      'This website is maintained by the campaign of Hon. Chinedu Eya for Member, Federal House of Assembly, Igbo Eze North / Udenu Constituency, Nigeria. Paid for by the Chinedu Eya Campaign Organization.',
    'footer.copyright': '© {year} Chinedu Eya Campaign. All rights reserved.',

    // Newsletter
    'newsletter.title': 'Stay Updated',
    'newsletter.subtitle': 'Get the latest campaign news delivered to your inbox',
    'newsletter.email': 'Your email address',
    'newsletter.subscribe': 'Subscribe',
    'newsletter.whatsapp': 'Join WhatsApp Community',

    // Voter Info
    'voter.title': 'Voter Information',
    'voter.pvc': 'Get Your PVC',
    'voter.pollingUnit': 'Find Your Polling Unit',
    'voter.checklist': 'Election Day Checklist',
    'voter.reminder': 'Set a Reminder',
  },

  ig: {
    // Navigation
    'nav.home': 'Ụlọ',
    'nav.about': 'Maka',
    'nav.agenda': 'Atụmatụ',
    'nav.constituency': 'Ọgbakọ',
    'nav.news': 'Akụkọ',
    'nav.events': 'Mmemme',
    'nav.gallery': 'Foto',
    'nav.getInvolved': 'Sonye',
    'nav.donate': 'Nye Ego',
    'nav.contact': 'Kpọtụrụ Anyị',
    'nav.vote': 'Ozi Ntuli Aka',
    'nav.media': 'Mgbasa Ozi',

    // Hero
    'hero.cta.donate': 'Nye Ego Ugbu A',
    'hero.cta.volunteer': 'Sonye n\'Ọgbakọ',
    'hero.countdown.days': 'Ụbọchị',
    'hero.countdown.hours': 'Awa',
    'hero.countdown.minutes': 'Nkeji',
    'hero.countdown.seconds': 'Sekọnd',
    'hero.countdown.label': 'Ruo Ụbọchị Ntuli Aka',

    // Common
    'common.readMore': 'Gụkwuo',
    'common.learnMore': 'Mụtakwuo',
    'common.submit': 'Zipu',
    'common.sending': 'Na-ezipu...',
    'common.success': 'Ọ gaara nke ọma!',
    'common.error': 'Ihe adịghị mma mere. Biko nwaa ọzọ.',
    'common.required': 'Achọrọ ya',
    'common.optional': 'Nhọrọ',
    'common.download': 'Budata',
    'common.share': 'Kekọrịta',
    'common.close': 'Mechie',
    'common.previous': 'Nke Gara Aga',
    'common.next': 'Nke Ọzọ',
    'common.viewAll': 'Hụ Niile',
    'common.backToTop': 'Laghachi n\'Elu',

    // Donate
    'donate.title': 'Kwado Ọgbakọ',
    'donate.subtitle': 'Onyinye gị na-akwado mgbanwe n\'ọgbakọ anyị',
    'donate.bankTransfer': 'Nkọwa Bank Transfer',
    'donate.copyAccount': 'Detuo Nọmba Akaụntụ',
    'donate.copied': 'Edetụọla!',
    'donate.pledgeForm': 'Dee Onyinye Gị',
    'donate.amount': 'Ego Onyinye (₦)',
    'donate.customAmount': 'Ego Ọzọ',
    'donate.fullName': 'Aha Zuru Oke',
    'donate.phone': 'Nọmba Ekwentị',
    'donate.email': 'Adreesị Email',
    'donate.note': 'Okwu (Nhọrọ)',
    'donate.anonymous': 'Nye ego n\'aha nzuzo',
    'donate.transferMade': 'Ezigala m ego ahụ',
    'donate.uploadProof': 'Bulite ihe akaebe',
    'donate.compliance': 'Ana m ekwenye na onyinye a sitere na Nigeria ma kwekọrọ na iwu',
    'donate.warning': 'Nye ego naanị n\'akaụntụ gọọmentị e gosiri n\'ibe a. Kpachara anya.',
    'donate.thankYou': 'Daalụ!',
    'donate.thankYouMessage': 'Enyemaka gị na-eme ka anyị nọọ nso n\'ọdịnihu ka mma maka ọgbakọ anyị.',

    // Volunteer
    'volunteer.title': 'Sonye',
    'volunteer.subtitle': 'Jikọọ na puku ndị na-arụ ọrụ afọ ofufo',
    'volunteer.name': 'Aha Zuru Oke',
    'volunteer.phone': 'Nọmba Ekwentị',
    'volunteer.whatsapp': 'Nọmba WhatsApp',
    'volunteer.lga': 'Ọchịchị Obodo',
    'volunteer.ward': 'Wọọdụ',
    'volunteer.skills': 'Nkà & Otu I Ga-esi Nyere Aka',
    'volunteer.availability': 'Oge Dị Gị',
    'volunteer.submit': 'Sonye n\'Ọgbakọ',

    // Contact
    'contact.title': 'Kpọtụrụ Anyị',
    'contact.subtitle': 'Anyị chọrọ ịnụ olu gị',
    'contact.name': 'Aha Gị',
    'contact.email': 'Adreesị Email',
    'contact.phone': 'Nọmba Ekwentị',
    'contact.subject': 'Isiokwu',
    'contact.message': 'Ozi Gị',
    'contact.send': 'Zipu Ozi',
    'contact.whatsapp': 'Kparịta Ụka na WhatsApp',
    'contact.office': 'Ụlọ Ọrụ Ọgbakọ',

    // About
    'about.title': 'Maka Hon. Chinedu Eya',
    'about.bio': 'Akụkọ Ndụ',
    'about.values': 'Uru na Ọhụụ',
    'about.career': 'Ọrụ na Ọrụ Ọha',
    'about.education': 'Agụmakwụkwọ',
    'about.personalMessage': 'Ozi Onwe',

    // Footer
    'footer.quickLinks': 'Njikọ Ngwa Ngwa',
    'footer.legal': 'Iwu',
    'footer.privacy': 'Iwu Nzuzo',
    'footer.terms': 'Usoro Ojiji',
    'footer.donationPolicy': 'Iwu Onyinye',
    'footer.disclaimer':
      'Weebụsaịtị a bụ nke ọgbakọ Hon. Chinedu Eya maka Ụlọ Mgbakọ Federal, Igbo Eze North / Udenu, Nigeria.',
    'footer.copyright': '© {year} Ọgbakọ Chinedu Eya. Ikike niile echekwara.',

    // Newsletter
    'newsletter.title': 'Nọgidenụ N\'oge',
    'newsletter.subtitle': 'Nweta akụkọ ọgbakọ ọhụrụ',
    'newsletter.email': 'Adreesị email gị',
    'newsletter.subscribe': 'Debanye Aha',
    'newsletter.whatsapp': 'Sonye WhatsApp',

    // Voter Info
    'voter.title': 'Ozi Ntuli Aka',
    'voter.pvc': 'Nweta PVC Gị',
    'voter.pollingUnit': 'Chọta Ebe Ị Na-atụ Vootu',
    'voter.checklist': 'Ndepụta Ụbọchị Ntuli Aka',
    'voter.reminder': 'Tụọ Ncheta',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

export function t(key: TranslationKey, locale: Locale = 'en', vars?: Record<string, string>): string {
  let text: string = translations[locale]?.[key] || translations.en[key] || key;
  if (vars) {
    Object.entries(vars).forEach(([k, v]) => {
      text = text.replace(`{${k}}`, v);
    });
  }
  return text;
}

export default translations;
