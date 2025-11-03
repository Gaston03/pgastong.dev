import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiMail, HiUser, HiPencil, HiChatAlt2 } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import LoadingSpinner from '../common/LoadingSpinner';

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate individual field
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim() === '' ? t('contact.form.required') : '';
      case 'email':
        if (value.trim() === '') {
          return t('contact.form.required');
        }
        return !emailRegex.test(value) ? t('contact.form.invalidEmail') : '';
      case 'subject':
        return value.trim() === '' ? t('contact.form.required') : '';
      case 'message':
        return value.trim() === '' ? t('contact.form.required') : '';
      default:
        return '';
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Clear submit status when user modifies form
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  // Handle blur event for validation
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  // Check if form is valid
  const isFormValid = () => {
    const nameError = validateField('name', formData.name);
    const emailError = validateField('email', formData.email);
    const subjectError = validateField('subject', formData.subject);
    const messageError = validateField('message', formData.message);

    return !nameError && !emailError && !subjectError && !messageError;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });

    // Validate all fields
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message)
    };

    setErrors(newErrors);

    // Check if form is valid
    if (!isFormValid()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration
      // Note: Replace these with your actual EmailJS credentials
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Tonguino Gaston Pascal',
      };

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      
      setSubmitStatus('success');
      
      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTouched({});
      setErrors({});
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Input field component
  const InputField = ({ name, type = 'text', icon: Icon, placeholder, label }) => (
    <div className="relative">
      <label htmlFor={name} className="sr-only">{label || placeholder}</label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-400" aria-hidden="true">
          <Icon className="w-5 h-5" />
        </div>
        <input
          id={name}
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          aria-label={label || placeholder}
          aria-invalid={touched[name] && errors[name] ? 'true' : 'false'}
          aria-describedby={touched[name] && errors[name] ? `${name}-error` : undefined}
          className={`w-full pl-12 pr-4 py-3 bg-dark-800/50 border rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
            touched[name] && errors[name]
              ? 'border-red-500 focus:ring-red-500/50'
              : 'border-dark-700 focus:ring-primary-500/50 focus:border-primary-500 hover:border-dark-600'
          }`}
        />
      </div>
      {touched[name] && errors[name] && (
        <motion.p
          id={`${name}-error`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-sm text-red-400"
          role="alert"
        >
          {errors[name]}
        </motion.p>
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass p-6 md:p-8 rounded-2xl"
    >
      <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
        {/* Name Field */}
        <InputField
          name="name"
          icon={HiUser}
          placeholder={t('contact.form.namePlaceholder')}
          label={t('contact.form.nameLabel', 'Your name')}
        />

        {/* Email Field */}
        <InputField
          name="email"
          type="email"
          icon={HiMail}
          placeholder={t('contact.form.emailPlaceholder')}
          label={t('contact.form.emailLabel', 'Your email address')}
        />

        {/* Subject Field */}
        <InputField
          name="subject"
          icon={HiPencil}
          placeholder={t('contact.form.subjectPlaceholder')}
          label={t('contact.form.subjectLabel', 'Message subject')}
        />

        {/* Message Field */}
        <div className="relative">
          <label htmlFor="message" className="sr-only">{t('contact.form.messageLabel', 'Your message')}</label>
          <div className="relative">
            <div className="absolute left-4 top-4 text-dark-400" aria-hidden="true">
              <HiChatAlt2 className="w-5 h-5" />
            </div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t('contact.form.messagePlaceholder')}
              rows={5}
              aria-label={t('contact.form.messageLabel', 'Your message')}
              aria-invalid={touched.message && errors.message ? 'true' : 'false'}
              aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
              className={`w-full pl-12 pr-4 py-3 bg-dark-800/50 border rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 transition-all duration-200 resize-none ${
                touched.message && errors.message
                  ? 'border-red-500 focus:ring-red-500/50'
                  : 'border-dark-700 focus:ring-primary-500/50 focus:border-primary-500 hover:border-dark-600'
              }`}
            />
          </div>
          {touched.message && errors.message && (
            <motion.p
              id="message-error"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-sm text-red-400"
              role="alert"
            >
              {errors.message}
            </motion.p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting || !isFormValid()}
          whileHover={!isSubmitting && isFormValid() ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting && isFormValid() ? { scale: 0.98 } : {}}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
            isSubmitting || !isFormValid()
              ? 'bg-dark-700 text-dark-400 cursor-not-allowed'
              : 'btn-primary'
          }`}
          aria-label={isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
        >
          {isSubmitting ? (
            <>
              <LoadingSpinner size="sm" color="white" />
              <span>{t('contact.form.sending')}</span>
            </>
          ) : (
            <>
              <HiMail className="w-5 h-5" aria-hidden="true" />
              <span>{t('contact.form.submit')}</span>
            </>
          )}
        </motion.button>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 bg-accent-500/20 border border-accent-500/50 rounded-lg text-accent-400 text-center"
            role="status"
            aria-live="polite"
          >
            <div className="flex items-center justify-center gap-2">
              <motion.svg
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </motion.svg>
              <span className="font-semibold">{t('contact.form.success')}</span>
            </div>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center"
            role="alert"
            aria-live="assertive"
          >
            <p className="font-semibold">{t('contact.form.error')}</p>
            <button
              type="button"
              onClick={() => setSubmitStatus(null)}
              className="mt-2 text-sm underline hover:text-red-300 transition-colors"
              aria-label="Retry sending message"
            >
              {t('common.retry')}
            </button>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}
