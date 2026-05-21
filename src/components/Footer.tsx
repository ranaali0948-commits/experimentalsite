import { motion } from 'framer-motion';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Utensils, MapPin, Phone, Clock } from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight border-t border-gold/10 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Utensils size={24} className="text-gold" />
              <h3 className="text-2xl font-playfair font-bold text-gold">
                {siteConfig.restaurantName}
              </h3>
            </div>
            <p className="text-cream/50 leading-relaxed font-light text-sm">
              {siteConfig.footer.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-bold text-cream mb-4 tracking-widest uppercase">
              {siteConfig.footer.navigationTitle}
            </h4>
            <ul className="space-y-2">
              {siteConfig.navigation.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-cream/50 hover:text-gold transition-colors duration-300 text-sm font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-bold text-cream mb-4 tracking-widest uppercase">
              {siteConfig.footer.hoursTitle}
            </h4>
            <ul className="space-y-2 text-cream/50 text-sm font-light">
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-gold/50" />
                {siteConfig.hours.days}
              </li>
              <li className="pl-[22px]">{siteConfig.hours.time}</li>
              <li className="flex items-center gap-2 pt-2">
                <MapPin size={14} className="text-gold/50" />
                {siteConfig.address.full}
              </li>
              <li className="flex items-center gap-2 pt-1">
                <Phone size={14} className="text-gold/50" />
                {siteConfig.phone.display}
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-bold text-cream mb-4 tracking-widest uppercase">
              {siteConfig.footer.socialTitle}
            </h4>
            <div className="flex gap-3">
              {siteConfig.footer.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 glass-gold hover:bg-gold hover:text-midnight text-gold/60 rounded-full flex items-center justify-center transition-all duration-300 font-bold text-xs"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gold/10 pt-8 text-center text-cream/30 text-xs tracking-wide"
        >
          <p>
            &copy; {currentYear} {siteConfig.restaurantName}.{' '}
            {siteConfig.footer.copyrightText}
          </p>
          <p className="mt-2">
            {siteConfig.footer.taglinePrefix} |{' '}
            {siteConfig.footer.taglineItems.map((item, index) => (
              <Fragment key={item}>
                {index > 0 && <> &bull; </>}
                {item}
              </Fragment>
            ))}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
