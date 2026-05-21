import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle, Mail } from 'lucide-react';
import siteConfig from '../data/siteConfig';

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return (
    <section className="pt-28 pb-24 bg-midnight min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-xs tracking-[0.3em] uppercase font-medium mb-4">
            {siteConfig.contactPage.eyebrow}
          </span>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-cream mb-4">
            {siteConfig.contactPage.title}
          </h1>
          <div className="w-16 h-px bg-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info Cards */}
          <div className="space-y-6">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-gold rounded-sm p-6 flex items-start gap-4 group hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-12 h-12 shrink-0 rounded-full border border-gold/20 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-500">
                <MapPin size={20} className="text-gold" />
              </div>
              <div>
                <h3 className="text-cream font-playfair font-semibold mb-1">
                  {siteConfig.contactPage.addressLabel}
                </h3>
                <p className="text-cream/50 text-sm font-light leading-relaxed">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.postalCity}
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-gold rounded-sm p-6 flex items-start gap-4 group hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-12 h-12 shrink-0 rounded-full border border-gold/20 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-500">
                <Phone size={20} className="text-gold" />
              </div>
              <div>
                <h3 className="text-cream font-playfair font-semibold mb-1">
                  {siteConfig.contactPage.phoneLabel}
                </h3>
                <p className="text-cream/50 text-sm font-light">
                  {siteConfig.phone.display}
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-gold rounded-sm p-6 flex items-start gap-4 group hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-12 h-12 shrink-0 rounded-full border border-gold/20 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-500">
                <Clock size={20} className="text-gold" />
              </div>
              <div>
                <h3 className="text-cream font-playfair font-semibold mb-1">
                  {siteConfig.contactPage.hoursLabel}
                </h3>
                <p className="text-cream/50 text-sm font-light leading-relaxed">
                  {siteConfig.hours.days}
                  <br />
                  {siteConfig.hours.time}
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-gold rounded-sm p-6 flex items-start gap-4 group hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-12 h-12 shrink-0 rounded-full border border-gold/20 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-500">
                <Mail size={20} className="text-gold" />
              </div>
              <div>
                <h3 className="text-cream font-playfair font-semibold mb-1">
                  {siteConfig.contactPage.emailLabel}
                </h3>
                <p className="text-cream/50 text-sm font-light">
                  {siteConfig.email}
                </p>
              </div>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.a
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              href={siteConfig.phone.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 bg-gold text-midnight rounded-sm font-bold text-sm tracking-widest uppercase hover:bg-cream transition-all duration-300"
            >
              <MessageCircle size={20} />
              {siteConfig.contactPage.whatsappText}
            </motion.a>
          </div>

          {/* Map */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-gold rounded-sm overflow-hidden h-full min-h-[400px]"
          >
            <iframe
              title={`${siteConfig.restaurantName} Location`}
              src={siteConfig.address.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
