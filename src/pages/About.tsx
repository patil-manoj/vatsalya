import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../lib/animations';
import LazyImage from '../components/LazyImage';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import SEO from '../components/SEO';
import ContactStrip from '../components/ContactStrip';

const VALUES = [
  {
    title: 'Innovation',
    description: 'Pushing boundaries with cutting-edge design solutions that blend technology with artistry.',
  },
  {
    title: 'Precision',
    description: 'Meticulous attention to every detail, ensuring flawless execution from concept to completion.',
  },
  {
    title: 'Client-Centric',
    description: 'Your vision guides our process. We listen, understand, and deliver beyond expectations.',
  },
  {
    title: 'Excellence',
    description: 'Uncompromising commitment to quality in materials, craftsmanship, and service.',
  },
];

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understanding your vision, lifestyle, and aspirations through detailed consultation and site analysis.',
  },
  {
    number: '02',
    title: 'Concept Development',
    description: 'Creating bespoke design concepts with mood boards, 3D visualizations, and material palettes.',
  },
  {
    number: '03',
    title: 'Design Refinement',
    description: 'Iterative feedback process to perfect every detail, from layouts to finishes.',
  },
  {
    number: '04',
    title: 'Execution',
    description: 'Expert project management ensuring timely delivery with uncompromising quality standards.',
  },
];

export default function About() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about Vatsalya Home Interiors, our founder Reshma Prabhakar, and our commitment to excellence in interior design."
      />

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0">
            <LazyImage
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
              alt="Luxury interior design"
              className="w-full h-full object-cover"
              aspectRatio="aspect-[16/9]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
          </div>
          
          <div className="relative h-full flex items-center justify-center text-white text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-4xl px-6"
            >
              <span className="font-body text-sm tracking-[0.2em] text-brand-primary mb-6 block">ABOUT US</span>
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8">
                Crafting Spaces That Inspire
              </h1>
              <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl mx-auto">
                Transforming visions into reality through thoughtful design, innovation, and precision.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center space-y-3">
              <span className="font-body text-xs tracking-[0.2em] text-white">DISCOVER OUR STORY</span>
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                }}
                className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"
              />
            </div>
          </motion.div>
        </section>

        {/* Founder Section - Prominent Feature */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              <motion.div
                initial={prefersReducedMotion ? "visible" : "hidden"}
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="order-2 lg:order-1"
              >
                <span className="font-body text-sm tracking-[0.2em] text-brand-primary mb-6 block">LEADERSHIP</span>
                <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
                  Reshma Prabhakar
                </h2>
                <p className="text-xl text-brand-primary mb-8 font-light italic">
                  Chairman & Founder, Vatsalya Home Interiors
                </p>
                
                <div className="space-y-6 text-brand-stone-600 leading-relaxed">
                  <p>
                    Reshma Prabhakar is the visionary Chairman and Founder of Vatsalya Home Interiors, 
                    a company dedicated to transforming spaces through thoughtful design, innovation, and precision. 
                    With an educational foundation in Business Administration (MBA) and extensive experience in the 
                    corporate sector, Reshma brings a unique blend of strategic insight and creative direction to the 
                    interior design industry.
                  </p>
                  
                  <p>
                    Her journey from the corporate world to entrepreneurship stems from a deep passion for creating 
                    beautiful, functional, and cost-effective spaces. Under her leadership, Vatsalya Home Interiors 
                    has built a reputation for delivering high-quality, customized interior solutions that align with 
                    each client's needs, style, and budget — all while ensuring timely project completion and 
                    exceptional service standards.
                  </p>
                  
                  <p>
                    Reshma believes that great design should be both affordable and impactful, and her approach 
                    reflects a commitment to client satisfaction, attention to detail, and continuous innovation.
                  </p>
                </div>

                <div className="mt-12 p-8 bg-brand-stone-50 border-l-4 border-brand-primary">
                  <p className="text-2xl md:text-3xl font-light italic text-brand-stone-800 leading-relaxed">
                    "To set new standards in the interior solutions industry by blending creativity, 
                    technology, and precision."
                  </p>
                  <p className="mt-4 text-sm tracking-[0.2em] text-brand-stone-500">COMPANY VISION</p>
                </div>

                <p className="mt-8 text-brand-stone-600 leading-relaxed">
                  She continues to lead Vatsalya Home Interiors with integrity, passion, and an unwavering 
                  dedication to excellence.
                </p>
              </motion.div>

              <motion.div
                initial={prefersReducedMotion ? "visible" : "hidden"}
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="order-1 lg:order-2"
              >
                <div className="relative">
                  <div className="absolute -inset-6 border border-brand-primary/20 hidden lg:block" />
                  <div className="relative">
                    <LazyImage
                      src="/src/assets/founder.png"
                      alt="Reshma Prabhakar - Chairman & Founder of Vatsalya Home Interiors"
                      className="w-full shadow-2xl"
                      aspectRatio="aspect-[3/4]"
                    />
                  </div>
                  
                  {/* Decorative Element */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-primary/10 -z-10 hidden lg:block" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Mission & Vision */}
        <section className="py-32 bg-brand-stone-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-16"
            >
              <span className="font-body text-sm tracking-[0.2em] text-brand-primary mb-6 block">OUR PHILOSOPHY</span>
              <h2 className="font-heading text-4xl md:text-5xl font-light mb-8">
                Excellence in Every Detail
              </h2>
              <p className="text-xl text-brand-stone-600 max-w-3xl mx-auto leading-relaxed">
                At Vatsalya Home Interiors, we believe that exceptional design is born from the perfect 
                harmony of aesthetics, functionality, and craftsmanship.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {VALUES.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  className="bg-white p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-5xl font-light text-brand-primary/20 mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-heading text-2xl mb-4">{value.title}</h3>
                  <p className="text-brand-stone-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-16"
            >
              <span className="font-body text-sm tracking-[0.2em] text-brand-primary mb-6 block">OUR APPROACH</span>
              <h2 className="font-heading text-4xl md:text-5xl font-light mb-8">
                A Seamless Journey to Excellence
              </h2>
              <p className="text-xl text-brand-stone-600 max-w-3xl mx-auto leading-relaxed">
                From initial consultation to final reveal, we guide you through every step with expertise and care.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-brand-stone-200 -z-10">
                <motion.div
                  className="h-full bg-brand-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </div>

              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={prefersReducedMotion ? "visible" : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={index}
                  className="relative text-center group"
                >
                  <div className="relative inline-flex items-center justify-center w-32 h-32 mb-6">
                    <div className="absolute inset-0 bg-brand-primary/5 rounded-full group-hover:bg-brand-primary/10 transition-colors duration-300" />
                    <span className="text-5xl font-light text-brand-primary relative z-10">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl mb-4">{step.title}</h3>
                  <p className="text-brand-stone-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment to Quality */}
        <section className="relative py-32">
          <div className="absolute inset-0">
            <LazyImage
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
              alt="Luxury interior craftsmanship"
              className="w-full h-full object-cover"
              aspectRatio="aspect-[21/9]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
          </div>

          <div className="relative container mx-auto px-6">
            <motion.div
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-2xl text-white"
            >
              <span className="font-body text-sm tracking-[0.2em] text-brand-primary mb-6 block">OUR COMMITMENT</span>
              <h2 className="font-heading text-4xl md:text-5xl font-light mb-8">
                Quality Without Compromise
              </h2>
              <p className="text-lg leading-relaxed mb-8 opacity-90">
                Every project we undertake is a testament to our dedication to excellence. We source the finest 
                materials, collaborate with skilled craftspeople, and employ cutting-edge technology to ensure 
                that your space not only meets but exceeds expectations.
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-primary rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span>Timely project completion with meticulous planning</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-primary rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span>Premium materials and sustainable design practices</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-primary rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span>Budget-conscious solutions without sacrificing quality</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-primary rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span>Personalized service and ongoing support</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-32 bg-brand-stone-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-16"
            >
              <span className="font-body text-sm tracking-[0.2em] text-brand-primary mb-6 block">WHY VATSALYA</span>
              <h2 className="font-heading text-4xl md:text-5xl font-light mb-8">
                The Vatsalya Difference
              </h2>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto"
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {[
                {
                  title: 'Tailored Solutions',
                  description: 'Every client is unique, and so is every project. We create customized designs that reflect your personality, lifestyle, and aspirations.',
                  icon: '✦'
                },
                {
                  title: 'End-to-End Service',
                  description: 'From concept to completion, we manage every aspect of your project, ensuring a seamless and stress-free experience.',
                  icon: '◆'
                },
                {
                  title: 'Proven Excellence',
                  description: 'With a portfolio of successful projects and satisfied clients, we bring experience and expertise to every engagement.',
                  icon: '●'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="bg-white p-10 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-5xl text-brand-primary mb-6">{item.icon}</div>
                  <h3 className="font-heading text-2xl mb-4">{item.title}</h3>
                  <p className="text-brand-stone-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <ContactStrip dark />
      </main>
    </>
  );
}
