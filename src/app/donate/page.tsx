/**
 * ============================================================================
 * DONATE PAGE: Campaign donation with bank transfer and pledge form
 * ============================================================================
 * Mobile-friendly, trustworthy donation flow with compliance and anti-fraud
 * measures. Account number loaded from server config only.
 */
'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Heart, Copy, CheckCircle, Upload, AlertTriangle,
  Shield, ChevronDown, ChevronUp, Phone, Mail, Info
} from 'lucide-react';
import { candidate, donation, features } from '@/config/site.config';
import { useLocale } from '@/context/LocaleContext';
import Section from '@/components/ui/Section';
import type { Metadata } from 'next';

// ─── Bank Transfer Card ──────────────────────────────────────────────────────

function BankTransferCard() {
  const [copied, setCopied] = useState(false);
  const { t } = useLocale();

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText(donation.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = donation.accountNumber;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="card p-6 md:p-8 border-2 border-primary/20 bg-gradient-to-br from-primary-light/30 to-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
          <Shield className="w-5 h-5" />
        </div>
        <h3 className="font-display font-bold text-xl text-dark">
          {t('donate.bankTransfer')}
        </h3>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <p className="text-dark-muted text-sm font-medium mb-1">Bank Name</p>
          <p className="font-display font-bold text-lg text-dark">{donation.bankName}</p>
        </div>
        <div>
          <p className="text-dark-muted text-sm font-medium mb-1">Account Name</p>
          <p className="font-display font-bold text-lg text-dark">{donation.accountName}</p>
        </div>
        <div>
          <p className="text-dark-muted text-sm font-medium mb-1">Account Number</p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="font-display font-bold text-xl sm:text-2xl text-primary tracking-wider select-all">
              {donation.accountNumber}
            </p>
            <button
              onClick={copyAccountNumber}
              className={`flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg font-display font-semibold text-sm transition-all w-full sm:w-auto min-h-[44px] ${
                copied
                  ? 'bg-secondary text-white'
                  : 'bg-primary text-white hover:bg-primary-dark'
              }`}
              aria-label={t('donate.copyAccount')}
            >
              {copied ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  {t('donate.copied')}
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  {t('donate.copyAccount')}
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Anti-scam warning */}
      <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
        <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
        <div>
          <p className="font-display font-bold text-sm text-amber-800">
            {t('donate.warning')}
          </p>
          <p className="text-amber-700 text-xs mt-1">
            For verification, contact the campaign at {candidate.phone} or {candidate.email}.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Amount Selector ─────────────────────────────────────────────────────────

function AmountSelector({
  selected,
  onSelect,
  customAmount,
  onCustomChange,
}: {
  selected: number | null;
  onSelect: (amount: number | null) => void;
  customAmount: string;
  onCustomChange: (val: string) => void;
}) {
  const { t } = useLocale();
  const [showCustom, setShowCustom] = useState(false);

  return (
    <div className="mb-6">
      <label className="form-label">{t('donate.amount')}</label>
      <div className="grid grid-cols-2 gap-3 mb-3">
        {donation.suggestedAmounts.map((amount) => (
          <button
            key={amount}
            type="button"
            onClick={() => {
              onSelect(amount);
              setShowCustom(false);
              onCustomChange('');
            }}
            className={`py-3 px-4 rounded-xl font-display font-bold text-lg transition-all ${
              selected === amount && !showCustom
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-surface-muted text-dark hover:bg-primary-light hover:text-primary'
            }`}
          >
            ₦{amount.toLocaleString()}
          </button>
        ))}
        <button
          type="button"
          onClick={() => {
            setShowCustom(true);
            onSelect(null);
          }}
          className={`col-span-2 py-3 px-4 rounded-xl font-display font-bold text-base transition-all ${
            showCustom
              ? 'bg-primary text-white shadow-lg'
              : 'bg-surface-muted text-dark hover:bg-primary-light hover:text-primary'
          }`}
        >
          {t('donate.customAmount')}
        </button>
      </div>

      {showCustom && (
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-muted font-bold">₦</span>
          <input
            type="number"
            value={customAmount}
            onChange={(e) => onCustomChange(e.target.value)}
            placeholder="Enter amount"
            className="form-input pl-8"
            min="100"
            step="100"
          />
        </div>
      )}

      {/* Impact statement */}
      {selected && donation.impactStatements[selected] && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-secondary text-sm font-medium mt-3 flex items-center gap-2"
        >
          <Info className="w-4 h-4" />
          ₦{selected.toLocaleString()}: {donation.impactStatements[selected]}
        </motion.p>
      )}
    </div>
  );
}

// ─── Donor Pledge Form ───────────────────────────────────────────────────────

function DonorPledgeForm() {
  const { t } = useLocale();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [transferMade, setTransferMade] = useState(false);
  const [complianceConfirmed, setComplianceConfirmed] = useState(false);
  const [proofFile, setProofFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const finalAmount = selectedAmount || (customAmount ? parseInt(customAmount) : 0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!(donation.allowedUploadTypes as readonly string[]).includes(file.type)) {
      setErrorMsg('Invalid file type. Please upload JPEG, PNG, WebP, or PDF.');
      return;
    }

    // Validate file size
    if (file.size > donation.maxUploadSizeMB * 1024 * 1024) {
      setErrorMsg(`File too large. Maximum size is ${donation.maxUploadSizeMB}MB.`);
      return;
    }

    setProofFile(file);
    setErrorMsg('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!complianceConfirmed) {
      setErrorMsg('Please confirm the compliance checkbox.');
      return;
    }
    if (!finalAmount || finalAmount < 100) {
      setErrorMsg('Please select or enter a valid donation amount.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    formData.set('amount', finalAmount.toString());
    formData.set('anonymous', anonymous.toString());
    formData.set('transferMade', transferMade.toString());
    if (proofFile) {
      formData.set('proofOfPayment', proofFile);
    }

    try {
      const res = await fetch('/api/donate', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setStatus('success');
      } else {
        const data = await res.json();
        setErrorMsg(data.message || t('common.error'));
        setStatus('error');
      }
    } catch {
      setErrorMsg(t('common.error'));
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card p-8 md:p-12 text-center"
      >
        <div className="w-20 h-20 rounded-full bg-secondary-light text-secondary mx-auto mb-6 flex items-center justify-center">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h2 className="font-display text-3xl font-bold text-dark mb-4">{t('donate.thankYou')}</h2>
        <p className="text-dark-muted text-lg mb-6 max-w-md mx-auto">
          {t('donate.thankYouMessage')}
        </p>
        <p className="text-dark-muted text-sm">
          If you&apos;ve already made the transfer, our team will verify and send you a confirmation.
          For questions, contact us at {candidate.phone}.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 md:p-8">
      <h3 className="font-display font-bold text-xl text-dark mb-6">
        {t('donate.pledgeForm')}
      </h3>

      {/* Amount selector */}
      <AmountSelector
        selected={selectedAmount}
        onSelect={setSelectedAmount}
        customAmount={customAmount}
        onCustomChange={setCustomAmount}
      />

      {/* Donor details */}
      {!anonymous && (
        <>
          <div className="form-group">
            <label htmlFor="donate-name" className="form-label">{t('donate.fullName')} *</label>
            <input
              id="donate-name"
              name="fullName"
              type="text"
              required={!anonymous}
              className="form-input"
              placeholder="Enter your full name"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="form-group">
              <label htmlFor="donate-phone" className="form-label">{t('donate.phone')} *</label>
              <input
                id="donate-phone"
                name="phone"
                type="tel"
                required={!anonymous}
                className="form-input"
                placeholder="+234..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="donate-email" className="form-label">{t('donate.email')}</label>
              <input
                id="donate-email"
                name="email"
                type="email"
                className="form-input"
                placeholder="you@example.com"
              />
            </div>
          </div>
        </>
      )}

      {/* Note */}
      <div className="form-group">
        <label htmlFor="donate-note" className="form-label">{t('donate.note')}</label>
        <textarea
          id="donate-note"
          name="note"
          className="form-input form-textarea"
          rows={3}
          placeholder="Any message for the campaign..."
        />
      </div>

      {/* Anonymous toggle */}
      <label className="flex items-center gap-3 mb-4 cursor-pointer">
        <input
          type="checkbox"
          checked={anonymous}
          onChange={(e) => setAnonymous(e.target.checked)}
          className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
        />
        <span className="text-sm text-dark-muted">{t('donate.anonymous')}</span>
      </label>

      {/* Transfer made checkbox */}
      <label className="flex items-center gap-3 mb-4 cursor-pointer">
        <input
          type="checkbox"
          checked={transferMade}
          onChange={(e) => setTransferMade(e.target.checked)}
          className="w-5 h-5 rounded border-border text-secondary focus:ring-secondary"
        />
        <span className="text-sm text-dark-muted font-medium">{t('donate.transferMade')}</span>
      </label>

      {/* Proof of payment upload */}
      {transferMade && (
        <div className="form-group">
          <label className="form-label">{t('donate.uploadProof')}</label>
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-border rounded-xl p-6 text-center cursor-pointer hover:border-primary transition-colors"
          >
            <Upload className="w-8 h-8 text-dark-muted mx-auto mb-2" />
            {proofFile ? (
              <p className="text-sm text-secondary font-medium">{proofFile.name}</p>
            ) : (
              <p className="text-sm text-dark-muted">
                Click to upload (JPEG, PNG, WebP, PDF, max {donation.maxUploadSizeMB}MB)
              </p>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept={donation.allowedUploadTypes.join(',')}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      )}

      {/* Compliance checkbox */}
      <label className="flex items-start gap-3 mb-6 cursor-pointer">
        <input
          type="checkbox"
          checked={complianceConfirmed}
          onChange={(e) => setComplianceConfirmed(e.target.checked)}
          required
          className="w-5 h-5 rounded border-border text-primary focus:ring-primary mt-0.5"
        />
        <span className="text-xs text-dark-muted leading-relaxed">
          {t('donate.compliance')}
        </span>
      </label>

      {/* Honeypot field (anti-spam) */}
      <input type="text" name="_hp" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Error message */}
      {errorMsg && (
        <div className="flex items-center gap-2 text-primary text-sm mb-4">
          <AlertTriangle className="w-4 h-4" />
          {errorMsg}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        className="btn btn-primary btn-lg w-full"
        disabled={status === 'loading' || !complianceConfirmed}
      >
        {status === 'loading' ? (
          t('common.sending')
        ) : (
          <>
            <Heart className="w-5 h-5" />
            Record My Donation
          </>
        )}
      </button>
    </form>
  );
}

// ─── Donation Progress Meter ─────────────────────────────────────────────────

function DonationProgress() {
  if (!features.donationProgress) return null;

  const percentage = Math.min(
    (features.donationCurrent / features.donationGoal) * 100,
    100
  );

  return (
    <div className="card p-6 mb-8">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-display font-bold text-dark">Campaign Fund Progress</h4>
        <span className="text-primary font-bold text-sm">{percentage.toFixed(0)}%</span>
      </div>
      <div className="h-3 bg-surface-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="h-full gradient-primary rounded-full"
        />
      </div>
      <div className="flex justify-between mt-2 text-xs text-dark-muted">
        <span>₦{features.donationCurrent.toLocaleString()} raised</span>
        <span>₦{features.donationGoal.toLocaleString()} goal</span>
      </div>
    </div>
  );
}

// ─── Main Donate Page ────────────────────────────────────────────────────────

export default function DonatePage() {
  const { t } = useLocale();

  return (
    <>
      {/* Emotive Header */}
      <section className="relative gradient-hero pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
              {t('donate.title')}
            </h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              {t('donate.subtitle')}. Every naira brings us closer to building the future our constituency deserves.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 -mt-8">
        <DonationProgress />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Bank Transfer + Trust */}
          <div className="space-y-6">
            <BankTransferCard />

            {/* Security & Trust Note */}
            <div className="card p-6">
              <h4 className="font-display font-bold text-dark mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-secondary" />
                How Your Donation Helps
              </h4>
              <ul className="space-y-2.5">
                {[
                  'Fund grassroots mobilisation and community outreach',
                  'Support campaign materials and voter education',
                  'Power town hall meetings and constituency engagement',
                  'Cover logistics for rallies and community events',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-dark-muted">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-dark-muted mt-4 border-t border-border pt-3">
                To verify your donation or ask questions, contact the campaign office at{' '}
                <a href={`tel:${candidate.phone}`} className="text-primary font-medium">
                  {candidate.phone}
                </a>
              </p>
            </div>

            {/* Compliance Notice */}
            <div className="card p-6 bg-surface-muted border-0">
              <h4 className="font-display font-bold text-dark text-sm mb-2">
                Compliance Notice
              </h4>
              <p className="text-xs text-dark-muted leading-relaxed">
                {donation.complianceNotice}
              </p>
              <p className="text-xs text-dark-muted leading-relaxed mt-2">
                {donation.donorLimitNotice}
              </p>
            </div>
          </div>

          {/* Right: Pledge Form */}
          <DonorPledgeForm />
        </div>
      </div>
    </>
  );
}
