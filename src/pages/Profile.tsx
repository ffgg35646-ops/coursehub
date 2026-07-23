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

      <section className="container mx-auto px-4 py-10">
        <ProfileCard user={user} />
      </section>
    </main>
  );
}

export default Profile;
