import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Reviews from './components/Reviews';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import ReservationPage from './pages/ReservationPage';
import ContactPage from './pages/ContactPage';
import siteConfig from './data/siteConfig';

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

const hexToRgbChannel = (hex: string) => {
  const cleanHex = hex.replace('#', '');
  const fullHex =
    cleanHex.length === 3
      ? cleanHex
          .split('')
          .map((char) => char + char)
          .join('')
      : cleanHex;

  const red = parseInt(fullHex.slice(0, 2), 16);
  const green = parseInt(fullHex.slice(2, 4), 16);
  const blue = parseInt(fullHex.slice(4, 6), 16);

  return `${red} ${green} ${blue}`;
};

type ThemeStyle = CSSProperties &
  Record<'--color-gold' | '--color-midnight' | '--color-cream', string>;

function App() {
  const location = useLocation();
  const themeStyle: ThemeStyle = {
    '--color-gold': hexToRgbChannel(siteConfig.colors.gold),
    '--color-midnight': hexToRgbChannel(siteConfig.colors.midnight),
    '--color-cream': hexToRgbChannel(siteConfig.colors.cream),
  };

  return (
    <div className="bg-midnight text-cream font-inter" style={themeStyle}>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/carte"
            element={
              <PageTransition>
                <MenuPage />
              </PageTransition>
            }
          />
          <Route
            path="/reservation"
            element={
              <PageTransition>
                <ReservationPage />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <ContactPage />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
      <Reviews />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
