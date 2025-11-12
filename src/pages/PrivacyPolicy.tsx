import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  const effectiveDate = 'November 12, 2025';

  return (
    <>
      <SEO
        title="Privacy Policy | Vatsalya"
        description="How Vatsalya collects, uses, shares, and protects your information."
      />
      <main className="container mx-auto px-6 py-16 text-brand-stone-800">
        <br />
        <h1 className="font-heading text-4xl md:text-5xl font-light mb-2">Privacy Policy</h1>
        <p className="text-brand-stone-600 mb-10">Effective date: {effectiveDate}</p>

        <section className="space-y-6 max-w-3xl">
          <p>
            Vatsalya Home Interiors ("Vatsalya", "we", "us", or "our") respects your privacy. This policy explains
            what information we collect, how we use and share it, and the choices you have. By using our website or
            contacting us, you agree to this policy.
          </p>

          <h2 className="text-2xl font-heading mt-8">1. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-medium">Information you provide:</span> name, email, phone, project details and
              messages submitted via forms or email.
            </li>
            <li>
              <span className="font-medium">Usage and analytics data:</span> pages viewed, time on page, device/browser
              information, general location (city/country), and referring URLs (via analytics tools).
            </li>
            <li>
              <span className="font-medium">Files and media you share:</span> optional references, sketches, or photos you
              send to discuss a project.
            </li>
          </ul>

          <h2 className="text-2xl font-heading mt-8">2. Legal Bases for Processing</h2>
          <p>
            We process your information based on legitimate interests (to respond and operate our business), performance of
            a contract (when engaging our services), consent (for optional communications), and compliance with legal
            obligations.
          </p>

          <h2 className="text-2xl font-heading mt-8">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Respond to inquiries, schedule consultations, and deliver design services</li>
            <li>Prepare estimates, proposals, and project documentation</li>
            <li>Improve website performance, content, and user experience</li>
            <li>Detect, prevent, and address security or technical issues</li>
            <li>Comply with legal requirements and enforce our terms</li>
          </ul>

          <h2 className="text-2xl font-heading mt-8">4. Sharing Your Information</h2>
          <p>
            We do not sell your personal data. We may share limited information with vetted service providers who assist in
            operating our website, analytics, communication, fabrication, delivery, or installation—strictly for those
            purposes and under confidentiality.
          </p>

          <h2 className="text-2xl font-heading mt-8">5. International Transfers</h2>
          <p>
            Our tools and providers may process data in other countries. Where applicable, we take steps to ensure an
            adequate level of protection consistent with local laws.
          </p>

          <h2 className="text-2xl font-heading mt-8">6. Data Retention</h2>
          <p>
            We retain personal information only as long as necessary for the purposes described above and to comply with
            legal, accounting, or reporting obligations. When no longer needed, we securely delete or anonymize it.
          </p>

          <h2 className="text-2xl font-heading mt-8">7. Your Rights</h2>
          <p>
            You may request access, correction, updating, or deletion of your personal information. You may also object to
            or restrict certain processing where allowed by law. To exercise rights, contact us at
            <a className="text-brand-primary ml-1" href="mailto:vatsalyahomeinteriors@gmail.com">vatsalyahomeinteriors@gmail.com</a>.
          </p>

          <h2 className="text-2xl font-heading mt-8">8. Cookies & Similar Technologies</h2>
          <p>
            We use essential cookies for site functionality and may use analytics cookies to understand engagement. You can
            control cookies via your browser settings. Disabling some cookies may affect site performance.
          </p>

          <h2 className="text-2xl font-heading mt-8">9. Third-Party Services</h2>
          <p>
            Our site may link to third-party websites or services. Their privacy practices are governed by their own
            policies. We recommend reviewing those policies when visiting external links.
          </p>

          <h2 className="text-2xl font-heading mt-8">10. Security</h2>
          <p>
            We implement reasonable technical and organizational measures to protect personal information. No online system
            can be 100% secure, but we continuously improve our safeguards.
          </p>

          <h2 className="text-2xl font-heading mt-8">11. Children’s Privacy</h2>
          <p>
            Our services are not directed to children under 13. If you believe a child provided personal information,
            please contact us so we can delete it.
          </p>

          <h2 className="text-2xl font-heading mt-8">12. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. We will revise the “Effective date” above when we do. Your
            continued use of the site signifies acceptance of the updated policy.
          </p>

          <h2 className="text-2xl font-heading mt-8">13. Contact Us</h2>
          <p>
            Email: <a className="text-brand-primary" href="mailto:vatsalyahomeinteriors@gmail.com">vatsalyahomeinteriors@gmail.com</a>
            <br />
            Location: Udupi, Karnataka, India
          </p>
        </section>
      </main>
    </>
  );
}
