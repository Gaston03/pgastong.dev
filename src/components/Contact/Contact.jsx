import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section-padding bg-dark-900">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto mt-4">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Contact Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form - Left Side */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Info - Right Side */}
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
}
