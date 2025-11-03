import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/gaston-pascal-tonguino03',
      color: 'hover:text-[#0077B5]',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/Gaston03',
      color: 'hover:text-white',
    },
  ];

  return (
    <footer className="relative bg-dark-900 border-t border-white/10 py-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright and Built With */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <p className="text-dark-300 text-sm">
              {t('footer.copyright')}
            </p>
          </div>

          {/* Social Media Links */}
          <nav className="flex items-center gap-4" aria-label="Social media links">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-lg bg-white/5 text-dark-300 transition-colors duration-200 ${social.color}`}
                aria-label={`Visit ${social.name} profile`}
              >
                <social.icon className="w-5 h-5" aria-hidden="true" />
              </motion.a>
            ))}
          </nav>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-primary-500/20 transition-shadow duration-200"
            aria-label="Scroll back to top of page"
          >
            <FaArrowUp className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">{t('footer.backToTop')}</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
