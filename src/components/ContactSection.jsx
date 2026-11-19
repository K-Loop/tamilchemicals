import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Clock, Truck, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactSection() {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    enquiryType: 'Product Enquiry',
    message: ''
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus({
        state: 'error',
        message: lang === 'ta' ? 'தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்.' : 'Please enter your name.'
      });
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setStatus({
        state: 'error',
        message: lang === 'ta' ? 'தயவுசெய்து சரியான 10 இலக்க மொபைல் எண்ணை உள்ளிடவும்.' : 'Please enter a valid 10-digit mobile number.'
      });
      return;
    }

    if (!formData.message.trim()) {
      setStatus({
        state: 'error',
        message: lang === 'ta' ? 'தயவுசெய்து உங்கள் தேவை அல்லது செய்தியை குறிப்பிடவும்.' : 'Please describe your requirement or message.'
      });
      return;
    }

    setStatus({ state: 'submitting', message: '' });

    const waText = encodeURIComponent(
      `*Tamil Chemicals Web Enquiry*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Enquiry Type:* ${formData.enquiryType}\n*Message:* ${formData.message}\n*Location:* Website Visitor`
    );

    setTimeout(() => {
      setStatus({
        state: 'success',
        message: t.contact.form.successMsg
      });

      window.open(`https://wa.me/919150090912?text=${waText}`, '_blank');
      
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          enquiryType: 'Product Enquiry',
          message: ''
        });
        setStatus({ state: 'idle', message: '' });
      }, 5000);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with whileInView */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-14"
        >
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#FFB900] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#FFB900]"></span>
            <span className="text-[#102A43]">{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-sm text-slate-500">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            
            {/* Store Address Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#FFB900] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#102A43]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#102A43]">
                  {t.contact.addressTitle}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {t.contact.address}
                </p>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#159447] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-[#159447]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-[#102A43]">
                  {t.contact.phoneTitle}
                </h3>
                <p className="text-base font-extrabold text-[#102A43] mt-0.5">
                  +91 91500 90912
                </p>
                <div className="mt-3 flex gap-2">
                  <a
                    href="tel:+919150090912"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                  >
                    {lang === 'ta' ? 'அழைக்க' : 'Call Direct'}
                  </a>
                  <a
                    href="https://wa.me/919150090912"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#159447] hover:bg-[#12803c] text-white text-xs font-bold transition-colors flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white text-[#159447]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Parcel Logistics */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0879CE] flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6 text-[#0879CE]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#102A43]">
                  {t.contact.dispatchTitle}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {t.contact.dispatchDesc}
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#102A43]">
                  {t.contact.hoursTitle}
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  {t.contact.hours}
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Functional Enquiry Form with whileInView */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100"
          >
            <h3 className="text-xl font-bold text-[#102A43] mb-1">
              {t.contact.form.title}
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              {lang === 'ta' 
                ? 'உங்கள் வினவலை பூர்த்தி செய்யவும், உடனடியாக வாட்ஸ்அப்பில் எங்களை தொடர்பு கொள்ளலாம்.' 
                : 'Fill out this quick form to receive prompt product catalogs and wholesale rate sheets.'}
            </p>

            {status.state === 'success' ? (
              <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#159447] mx-auto" />
                <h4 className="text-base font-bold text-slate-900">
                  {lang === 'ta' ? 'வினவல் வெற்றிகரமாக பெறப்பட்டது!' : 'Enquiry Sent Successfully!'}
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  {status.message}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status.state === 'error' && (
                  <div className="p-3 bg-red-50 text-red-600 border border-red-200 rounded-xl text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{status.message}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.contact.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.form.namePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB900] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.contact.form.phoneLabel}
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-medium">+91</span>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.contact.form.phonePlaceholder}
                        className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB900] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.contact.form.typeLabel}
                  </label>
                  <select
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB900] focus:border-transparent bg-white"
                  >
                    {t.contact.form.typeOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.contact.form.messageLabel}
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB900] focus:border-transparent"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status.state === 'submitting'}
                  className="w-full bg-[#FFB900] hover:bg-[#E5A600] text-slate-950 font-bold py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 text-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {status.state === 'submitting' ? t.contact.form.submitting : t.contact.form.submitBtn}
                  </span>
                </motion.button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
