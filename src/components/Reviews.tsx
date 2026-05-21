import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import siteConfig from '../data/siteConfig';

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Reviews() {
  return (
    <section className="py-20 bg-midnight border-t border-gold/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-gold text-xs tracking-[0.3em] uppercase font-medium mb-4">
            {siteConfig.reviewsSection.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-cream">
            {siteConfig.reviewsSection.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {siteConfig.reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="glass-gold rounded-sm p-6 hover:border-gold/30 transition-all duration-500"
            >
              <Quote size={24} className="text-gold/20 mb-3" />
              <p className="text-cream/70 text-sm font-light leading-relaxed mb-4 italic">
                {review.text}
              </p>
              <div className="flex gap-0.5">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-gold fill-gold" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
