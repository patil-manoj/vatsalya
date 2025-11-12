import SEO from '../components/SEO';

export default function Terms() {
  const effectiveDate = 'November 12, 2025';

  return (
    <>
      <SEO
        title="Terms of Service | Vatsalya"
        description="The terms and conditions for using Vatsalya's website and services."
      />
      <main className="container mx-auto px-6 py-16 text-brand-stone-800">
        <br />
        <h1 className="font-heading text-4xl md:text-5xl font-light mb-2">Terms of Service</h1>
        <p className="text-brand-stone-600 mb-10">Effective date: {effectiveDate}</p>

        <section className="space-y-6 max-w-3xl">
          <p>
            These Terms of Service ("Terms") govern your access to and use of the Vatsalya Home Interiors website and
            our services. By accessing or using our site, you agree to these Terms.
          </p>

          <h2 className="text-2xl font-heading mt-8">1. Services</h2>
          <p>
            We provide interior design consultation, planning, visualization, project coordination, fabrication, and
            installation services through our own team and trusted partners. Specific scopes, deliverables, timelines, and
            fees are outlined in proposals/agreements for each project.
          </p>

          <h2 className="text-2xl font-heading mt-8">2. Consultations & Proposals</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Initial consultations may be paid or complimentary, as communicated.</li>
            <li>Design concepts, estimates, and proposals are based on available information and may change after site inspections, measurements, or material selections.</li>
            <li>Quotes typically have validity periods and may exclude third-party costs, taxes, or unforeseen site conditions.</li>
          </ul>

          <h2 className="text-2xl font-heading mt-8">3. Payments & Invoicing</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Milestone-based payments are due as per agreed schedules. Delayed payments may pause work or deliveries.</li>
            <li>Fabrication and material orders usually require advance payments and are non-refundable once placed.</li>
            <li>Taxes, duties, logistics, and installation charges (if applicable) are borne by the client unless stated otherwise.</li>
          </ul>

          <h2 className="text-2xl font-heading mt-8">4. Client Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide accurate information, timely feedback, and site access.</li>
            <li>Ensure necessary permissions, building approvals, and site readiness (power, water, clear workspace).</li>
            <li>Protect existing finishes/furnishings or notify us to include protection in scope.</li>
          </ul>

          <h2 className="text-2xl font-heading mt-8">5. Intellectual Property</h2>
          <p>
            All designs, drawings, renders, specifications, and related materials created by Vatsalya remain our
            intellectual property unless the agreement explicitly transfers rights. You may use approved deliverables only
            for the intended project and location.
          </p>

          <h2 className="text-2xl font-heading mt-8">6. User Content & Site Use</h2>
          <p>
            You may not upload or transmit content that is unlawful, infringing, or harmful, or attempt to disrupt the
            website. We may remove content or restrict access where necessary.
          </p>

          <h2 className="text-2xl font-heading mt-8">7. Third-Party Vendors & Materials</h2>
          <p>
            We may recommend or coordinate with third-party vendors. Their warranties and terms apply to their products or
            services. We are not responsible for third-party acts or omissions beyond our reasonable control.
          </p>

          <h2 className="text-2xl font-heading mt-8">8. Warranty & Disclaimer</h2>
          <p>
            Except as expressly stated in a written agreement, services and website content are provided "as is" without
            warranties of any kind, express or implied, including fitness for a particular purpose or non-infringement.
          </p>

          <h2 className="text-2xl font-heading mt-8">9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Vatsalya is not liable for indirect, incidental, special, or
            consequential damages. Our total liability for any claim is limited to the fees paid to us for the relevant
            services in the 3 months preceding the claim.
          </p>

          <h2 className="text-2xl font-heading mt-8">10. Indemnification</h2>
          <p>
            You agree to indemnify and hold Vatsalya harmless from claims, damages, and expenses arising from your breach
            of these Terms or misuse of the site/services.
          </p>

          <h2 className="text-2xl font-heading mt-8">11. Termination</h2>
          <p>
            We may suspend or terminate access to the site for any reason, including suspected violations. Project-specific
            termination terms will be governed by the applicable agreement.
          </p>

          <h2 className="text-2xl font-heading mt-8">12. Governing Law & Jurisdiction</h2>
          <p>
            These Terms are governed by the laws of India. Courts in Udupi, Karnataka, shall have exclusive jurisdiction
            over disputes, subject to any specific dispute resolution agreed in a project contract.
          </p>

          <h2 className="text-2xl font-heading mt-8">13. Changes to Terms</h2>
          <p>
            We may update these Terms periodically. We will update the “Effective date” above when changes occur. Continued
            use constitutes acceptance of the updated Terms.
          </p>

          <h2 className="text-2xl font-heading mt-8">14. Contact</h2>
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
