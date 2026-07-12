import PageHeader from "@/components/layout/PageHeader";

function Terms() {
  return (
    <main>
      <PageHeader
        title="Terms & Conditions"
        description="Please read these terms before using CourseHub."
      />

      <section className="container mx-auto max-w-4xl px-4 py-12">
        <div className="space-y-8">

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Acceptance of Terms
            </h2>

            <p className="leading-7 text-gray-600">
              By accessing and using CourseHub, you agree to comply with
              these Terms and Conditions and all applicable laws and
              regulations.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              User Accounts
            </h2>

            <p className="leading-7 text-gray-600">
              Users are responsible for maintaining the confidentiality of
              their account credentials and for all activities that occur
              under their accounts.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Course Access
            </h2>

            <p className="leading-7 text-gray-600">
              Purchased or enrolled courses are intended for personal use
              only. Redistribution, resale, or unauthorized sharing of
              course content is prohibited.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Limitation of Liability
            </h2>

            <p className="leading-7 text-gray-600">
              CourseHub is not responsible for any indirect or incidental
              damages resulting from the use of the platform or its
              educational content.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Changes to These Terms
            </h2>

            <p className="leading-7 text-gray-600">
              We reserve the right to update these Terms at any time.
              Continued use of the platform after changes are published
              constitutes acceptance of the revised Terms.
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}

export default Terms;
