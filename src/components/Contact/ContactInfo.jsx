import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  HiMail, 
  HiPhone, 
  HiLocationMarker, 
  HiDownload 
} from 'react-icons/hi';
import { 
  FaLinkedin, 
  FaGithub, 
  FaTwitter 
} from 'react-icons/fa';

export default function ContactInfo() {
  const { t } = useTranslation();

  const contactDetails = [
    {
      icon: HiMail,
      label: t('contact.info.email'),
      value: 'pgastong03@gmail.com',
      href: 'mailto:pgastong03@gmail.com',
      color: 'text-primary-400'
    },
    {
      icon: HiPhone,
      label: t('contact.info.phone'),
      value: '+212 663-439441',
      href: 'tel:+212663439441',
      color: 'text-accent-400'
    },
    {
      icon: HiLocationMarker,
      label: t('contact.info.location'),
      value: 'Rabat, Morocco',
      href: null,
      color: 'text-secondary-400'
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/tonguino-gaston-pascal',
      color: 'hover:text-[#0A66C2]'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/tonguinogaston',
      color: 'hover:text-white'
    },
    {
      icon: FaTwitter,
      label: 'Twitter',
      href: 'https://twitter.com/tonguinogaston',
      color: 'hover:text-[#1DA1F2]'
    }
  ];

  const handleDownloadCV = () => {
    window.open('/application-cv.pdf', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-6"
    >
      {/* Contact Information Title */}
      <div className="glass p-6 md:p-8 rounded-2xl">
        <h3 className="text-2xl font-bold text-white mb-6">
          {t('contact.info.title')}
        </h3>

        {/* Contact Details */}
        <div className="space-y-4">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              {detail.href ? (
                <a
                  href={detail.href}
                  className="flex items-start gap-4 p-4 rounded-lg bg-dark-800/30 hover:bg-dark-800/50 transition-all duration-300 border border-transparent hover:border-dark-700"
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-dark-800 flex items-center justify-center ${detail.color} group-hover:scale-110 transition-transform`}>
                    <detail.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-dark-400 mb-1">{detail.label}</p>
                    <p className="text-white font-medium break-all">{detail.value}</p>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-4 p-4 rounded-lg bg-dark-800/30">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-dark-800 flex items-center justify-center ${detail.color}`}>
                    <detail.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-dark-400 mb-1">{detail.label}</p>
                    <p className="text-white font-medium">{detail.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Media Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="glass p-6 md:p-8 rounded-2xl"
      >
        <h3 className="text-xl font-bold text-white mb-4">
          {t('contact.info.social')}
        </h3>
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`w-12 h-12 rounded-lg bg-dark-800 flex items-center justify-center text-dark-300 transition-colors ${social.color}`}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Download CV Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.button
          onClick={handleDownloadCV}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full btn-primary py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-3"
        >
          <HiDownload className="w-5 h-5" />
          <span>{t('contact.info.downloadCV')}</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
