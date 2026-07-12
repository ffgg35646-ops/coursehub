import PageHeader from "@/components/layout/PageHeader";

function Privacy() {
  return (
    <main>
      <PageHeader
        title="Privacy Policy"
        description="How we collect, use, and protect your information."
      />

      <section className="container mx-auto max-w-4xl px-4 py-12">
        <div className="space-y-8">

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Information We Collect
            </h2>

            <p className="leading-7 text-gray-600">
              We collect information that you provide when creating an
              account, enrolling in courses, or contacting our support
              team. This may include your name, email address, and account
              preferences.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              How We Use Your Information
            </h2>

            <p className="leading-7 text-gray-600">
              Your information is used to manage your account, provide
              access to courses, improve our services, and communicate
              important updates related to the platform.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Data Protection
            </h2>

            <p className="leading-7 text-gray-600">
              We implement reasonable security measures to protect your
              personal information from unauthorized access, disclosure,
              or misuse.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Contact
            </h2>

            <p className="leading-7 text-gray-600">
              If you have any questions regarding this Privacy Policy,
              please contact our support team through the Contact page.
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}

export default Privacy;
