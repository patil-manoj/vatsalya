import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

// Lazy load other pages
const Portfolio = lazy(() => import('./pages/Portfolio'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Navigation />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/portfolio"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Portfolio />
                </Suspense>
              }
            />
            <Route
              path="/services"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Services />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <PrivacyPolicy />
                </Suspense>
              }
            />
            <Route
              path="/terms"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Terms />
                </Suspense>
              }
            />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton phoneNumber="917411334243" />
      </Router>
    </HelmetProvider>
  );
}
