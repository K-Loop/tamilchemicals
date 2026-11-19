import React, { useState } from 'react';
import { X, CheckCircle2, MessageSquare, Send, PhoneCall } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function EnquiryModal({ isOpen, onClose, prefilledProduct = null }) {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    enquiryType: prefilledProduct ? 'Product Enquiry' : 'Wholesale / Bulk Order',
    message: prefilledProduct ? `Inquiry regarding: ${lang === 'ta' ? prefilledProduct.nameTa : prefilledProduct.nameEn}` : ''
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || formData.phone.length < 10) {
      setStatus({
        state: 'error',
        message: lang === 'ta' ? 'தயவுசெய்து உங்கள் பெயர் மற்றும் 10 இலக்க மொபைல் எண்ணை உள்ளிடவும்.' : 'Please enter your name and a valid 10-digit mobile number.'
      });
      return;
    }

    setStatus({ state: 'submitting', message: '' });

    // Format WhatsApp message
    const waText = encodeURIComponent(
      `*Tamil Chemicals Enquiry*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Enquiry Type:* ${formData.enquiryType}\n*Details:* ${formData.message}\n*Source:* Tamil Chemicals Website`
    );

    setTimeout(() => {
      setStatus({
        state: 'success',
        message: lang === 'ta' ? 'நன்றி! வாட்ஸ்அப் வழியாக தமிழ் கெமிக்கல்ஸ் குழுவுடன் உரையாட இணைக்கப்படுகிறீர்கள்...' : 'Thank you! Connecting you to Tamil Chemicals team via WhatsApp...'
      });

      // Open WhatsApp chat
      window.open(`https://wa.me/919150090912?text=${waText}`, '_blank');
      
      setTimeout(() => {
        onClose();
        setStatus({ state: 'idle', message: '' });
      }, 2500);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="bg-[#102A43] text-white p-6 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFB900] flex items-center justify-center text-slate-900 font-bold">
                <MessageSquare className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  {lang === 'ta' ? 'விலை வினவல் & ஆர்டர்' : 'Product & Bulk Enquiry'}
                </h3>
                <p className="text-xs text-slate-300">
                  {lang === 'ta' ? 'தமிழ் கெமிக்கல்ஸ் - மதுரை | நேரடி பதில்' : 'Tamil Chemicals Madurai | Instant Support'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          {prefilledProduct && (
            <div className="mt-3 p-2.5 rounded-lg bg-white/10 text-xs text-yellow-300 font-medium">
              {lang === 'ta' ? 'தேர்ந்தெடுக்கப்பட்ட தயாரிப்பு: ' : 'Selected Product: '}
              <span className="text-white font-semibold">
                {lang === 'ta' ? prefilledProduct.nameTa : prefilledProduct.nameEn}
              </span>
            </div>
          )}
        </div>

        {/* Content / Form */}
        <div className="p-6">
          {status.state === 'success' ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <p className="text-slate-800 font-semibold">{status.message}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status.state === 'error' && (
                <div className="p-3 text-xs bg-red-50 text-red-600 border border-red-200 rounded-lg">
                  {status.message}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'ta' ? 'உங்கள் பெயர் *' : 'Your Full Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={lang === 'ta' ? 'எ.கா: கே. ராமநாதன்' : 'e.g. S. Ramanathan'}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB900] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'ta' ? 'வாட்ஸ்அப் மொபைல் எண் *' : 'WhatsApp Mobile Number *'}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs font-medium text-slate-400">+91</span>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="91500 90912"
                    className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB900] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'ta' ? 'தேவை வகை *' : 'Enquiry Type *'}
                </label>
                <select
                  value={formData.enquiryType}
                  onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB900] focus:border-transparent bg-white"
                >
                  <option value="Product Enquiry">Product Enquiry (தயாரிப்பு வினவல்)</option>
                  <option value="Wholesale / Bulk Order">Wholesale / Bulk Order (மொத்த கொள்முதல்)</option>
                  <option value="Raw Materials Supply">Raw Materials Supply (மூலப்பொருட்கள்)</option>
                  <option value="Business Startup Opportunity">Business Startup Opportunity (தொழில் வாய்ப்பு)</option>
                  <option value="Packing Kits">Packing Kits (பேக்கிங் கிட்கள்)</option>
                  <option value="Other">Other (மற்றவை)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'ta' ? 'தேவை விவரம் / இடம் *' : 'Your Requirement / Location *'}
                </label>
                <textarea
                  rows="3"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={lang === 'ta' ? 'தேவையான அளவு மற்றும் ஊர் குறிப்பிடவும்...' : 'Specify quantity, products needed, or your location...'}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB900] focus:border-transparent"
                ></textarea>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="submit"
                  disabled={status.state === 'submitting'}
                  className="flex-1 bg-[#FFB900] hover:bg-[#E5A600] text-slate-950 font-bold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-all shadow-md shadow-yellow-500/20 active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {status.state === 'submitting' 
                      ? (lang === 'ta' ? 'அனுப்புகிறது...' : 'Connecting...') 
                      : (lang === 'ta' ? 'வாட்ஸ்அப்பில் விசாரிக்க' : 'Send via WhatsApp')}
                  </span>
                </button>
              </div>
            </form>
          )}

          {/* Quick Call Direct */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>{lang === 'ta' ? 'உடனடி அழைப்புக்கு:' : 'Prefer direct phone call?'}</span>
            <a 
              href="tel:+919150090912" 
              className="text-[#102A43] font-bold flex items-center gap-1 hover:text-[#0879CE]"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#159447]" />
              +91 91500 90912
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
