import { Award, CalendarDays, User } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import { useEffect, useState } from "react";

interface Certificate {
  id: string | number;
  title: string;
  instructor?: string;
  date: string;
}

function Certificates() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("certificates");

    if (saved) {
      setCertificates(JSON.parse(saved));
    }
  }, []);

  return (
    <main>
      <PageHeader
        title="Certificates"
        description="View all your earned certificates."
      />

      <section className="container mx-auto px-4 py-10">
        {certificates.length === 0 ? (
          <div className="rounded-2xl border bg-white p-10 text-center shadow-sm">
            <Award
              size={60}
              className="mx-auto text-yellow-500"
            />

            <h2 className="mt-6 text-2xl font-bold">
              No certificates yet
            </h2>

            <p className="mt-2 text-gray-600">
              Complete a course to earn your first certificate.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg"
              >
                <Award
                  size={42}
                  className="text-yellow-500"
                />

                <h2 className="mt-4 text-xl font-bold">
                  {certificate.title}
                </h2>

                <div className="mt-4 flex items-center gap-2 text-gray-600">
                  <User size={18} />
                  <span>
                    {certificate.instructor || "Course Instructor"}
                  </span>
                </div>

                <div className="mt-2 flex items-center gap-2 text-gray-600">
                  <CalendarDays size={18} />
                  <span>{certificate.date}</span>
                </div>

                <button className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
                  View Certificate
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Certificates;
