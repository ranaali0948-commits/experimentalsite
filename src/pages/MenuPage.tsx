import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import siteConfig from '../data/siteConfig';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('deals');
  const categories = siteConfig.menuItems;
  const active = categories.find((c) => c.id === activeCategory);
  const { categoryImages, categoryLabels, categoryNotes } = siteConfig.menuPage;

  const formatPrice = (price: number) =>
    price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });

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
            {siteConfig.menuPage.eyebrow}
          </span>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-cream mb-4">
            {siteConfig.menuPage.title}
          </h1>
          <div className="w-16 h-px bg-gold mx-auto" />
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`py-2.5 px-5 rounded-sm font-medium transition-all duration-300 text-xs tracking-widest uppercase border ${
                activeCategory === category.id
                  ? 'bg-gold text-midnight border-gold'
                  : 'bg-transparent border-gold/20 text-gold/70 hover:border-gold hover:text-gold'
              }`}
            >
              {categoryLabels[category.id] || category.name}
            </motion.button>
          ))}
        </div>

        {/* Category Image Banner */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + '-banner'}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-72 rounded-sm overflow-hidden mb-10 bg-midnight/80 border border-gold/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/95 to-midnight/70" />
            <div className="relative z-10 flex min-h-72 flex-col md:flex-row md:items-stretch">
              <div className="flex flex-1 flex-col justify-end p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-cream">
                  {categoryLabels[activeCategory]}
                </h2>
                {(categoryNotes[activeCategory] || active?.note) && (
                  <p className="text-gold/60 text-sm italic font-playfair mt-1">
                    {categoryNotes[activeCategory] || active?.note}
                  </p>
                )}
              </div>
              <div className="h-56 md:h-auto md:w-[360px] lg:w-[400px] md:p-6">
                <img
                  src={categoryImages[activeCategory]}
                  alt={categoryLabels[activeCategory]}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Menu Items - 2 Column Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {active?.items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="group glass-gold rounded-sm p-5 hover:border-gold/30 transition-all duration-500 flex justify-between items-start gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-cream font-playfair font-semibold text-base leading-tight mb-1">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="text-cream/40 text-xs leading-relaxed font-light">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <span className="text-gold font-bold text-lg shrink-0 tabular-nums">
                    {formatPrice(item.price)}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
