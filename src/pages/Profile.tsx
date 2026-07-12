import { useAuth } from "@/hooks/useAuth";

import PageHeader from "@/components/layout/PageHeader";
import ProfileCard from "@/components/dashboard/ProfileCard";
import StatsCard from "@/components/dashboard/StatsCard";

import { BookOpen, Award, Clock } from "lucide-react";

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
        description="Manage your account and learning progress."
      />


      <section className="container mx-auto space-y-8 px-4 py-10">

        <ProfileCard
          user={user}
        />


        <div className="grid gap-6 md:grid-cols-3">

          <StatsCard
            title="Courses"
            value="0"
            icon={<BookOpen size={24} />}
            description="Enrolled courses"
          />


          <StatsCard
            title="Certificates"
            value="0"
            icon={<Award size={24} />}
            description="Completed certificates"
          />


          <StatsCard
            title="Learning Hours"
            value="0"
            icon={<Clock size={24} />}
            description="Total learning time"
          />

        </div>

      </section>

    </main>
  );
}

export default Profile;
