import { Link } from "react-router-dom";
import { Award, Bookmark } from "lucide-react";

import { useAuth } from "@/hooks/useAuth";

import PageHeader from "@/components/layout/PageHeader";
import ProfileCard from "@/components/dashboard/ProfileCard";

function Profile() {
  const { user } = useAuth();

  if (!user) {
    return (
      <main>
        <PageHeader
          title="Profile"
          description="Your account information"
        />

        <section className="container mx-auto px-4 py-10">
          <p className="text-gray-600">
            Please login to view your profile.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main>
      <PageHeader
        title="Profile"
        description="Manage your account information."
      />

      <section className="container mx-auto space-y-8 px-4 py-10">
        <ProfileCard user={user} />

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            to="/saved-courses"
            className="rounded-xl border bg-white p-6 transition hover:border-blue-500 hover:shadow-md"
          >
            <Bookmark
              size={32}
              className="mb-4 text-blue-600"
            />

            <h2 className="text-xl font-semibold">
              Saved Courses
            </h2>

            <p className="mt-2 text-gray-600">
              View all courses you have saved.
            </p>
          </Link>

          <Link
            to="/certificates"
            className="rounded-xl border bg-white p-6 transition hover:border-blue-500 hover:shadow-md"
          >
            <Award
              size={32}
              className="mb-4 text-yellow-500"
            />

            <h2 className="text-xl font-semibold">
              Certificates
            </h2>

            <p className="mt-2 text-gray-600">
              View all your earned certificates.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Profile;
