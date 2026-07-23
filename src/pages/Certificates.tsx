import PageHeader from "@/components/layout/PageHeader";

function Certificates() {
  return (
    <main>
      <PageHeader
        title="Certificates"
        description="Your earned certificates."
      />

      <section className="container mx-auto px-4 py-10">
        <div className="rounded-xl border border-gray-700 bg-gray-900 p-8 text-center">
          <h2 className="text-2xl font-bold text-white">
            No certificates yet
          </h2>

          <p className="mt-3 text-gray-400">
            Complete a course to earn your first certificate.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Certificates;
