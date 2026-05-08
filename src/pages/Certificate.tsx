import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function Certificate() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <>
      <SEO
        title="ISO 9001:2015 Certificate"
        description="View the ISO 9001:2015 Quality Management System certification for Vatsalya Home Interiors."
        image="/certificate.jpg"
      />

      <main className="bg-white">
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-brand-stone-50" />
            <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-brand-primary/15 blur-3xl" />
            <div className="absolute bottom-[-20%] left-[-10%] h-96 w-96 rounded-full bg-brand-secondary/10 blur-3xl" />
          </div>

          <div className="relative container mx-auto px-6">
            <motion.div
              initial={prefersReducedMotion ? 'visible' : 'hidden'}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-3xl"
            >
              <span className="font-body text-xs tracking-[0.3em] text-brand-primary mb-4 block">
                CERTIFICATION
              </span>
              <h1 className="font-heading text-4xl md:text-6xl font-light mb-6 text-brand-stone-900">
                ISO 9001:2015 Quality Management System
              </h1>
              <p className="text-lg md:text-xl text-brand-stone-600 leading-relaxed">
                Vatsalya Home Interiors, Bldg No. 5-119 B 12, Bhagavathi Layout, Puttur, Udupi - 576 105,
                Karnataka, India, has been independently assessed by QRO for the design, development,
                manufacturing, supply, and installation of customized interior solutions.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/certificate.jpg"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-brand-primary text-white text-xs tracking-[0.2em] uppercase transition hover:bg-brand-primary/90"
                >
                  Open Full Size
                </a>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-6 py-3 border border-brand-stone-300 text-brand-stone-700 text-xs tracking-[0.2em] uppercase transition hover:border-brand-primary hover:text-brand-primary"
                >
                  Back to About
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={prefersReducedMotion ? 'visible' : 'hidden'}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mx-auto max-w-5xl"
            >
              <div className="rounded-3xl border border-brand-stone-200 bg-white p-4 md:p-6 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.45)]">
                <img
                  src="/certificate.jpg"
                  alt="ISO 9001:2015 certificate for Vatsalya Home Interiors"
                  className="w-full h-auto object-contain rounded-2xl"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? 'visible' : 'hidden'}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-12 grid md:grid-cols-2 gap-10 text-sm text-brand-stone-700"
            >
              <div>
                <h2 className="font-heading text-2xl mb-4 text-brand-stone-900">Certification Details</h2>
                <dl className="grid gap-4">
                  <div>
                    <dt className="uppercase tracking-[0.2em] text-[11px] text-brand-stone-400">Certified On</dt>
                    <dd className="mt-1">5 May 2026</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-[0.2em] text-[11px] text-brand-stone-400">Certificate Number</dt>
                    <dd className="mt-1">305026050513Q</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-[0.2em] text-[11px] text-brand-stone-400">Surveillance Audit Due</dt>
                    <dd className="mt-1">4 May 2027, 4 May 2028</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h2 className="font-heading text-2xl mb-4 text-brand-stone-900">Scope of Activities</h2>
                <p className="leading-relaxed">
                  Design, development, manufacturing, supply, and installation of customized interior solutions
                  including modular kitchens, wardrobes, furniture, false ceilings, partitions, jali works, wall
                  panelling, decorative finishes, and turnkey interior projects for residential, commercial, and
                  retail spaces.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
