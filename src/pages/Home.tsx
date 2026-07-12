import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedCourses from "@/components/home/FeaturedCourses";

import { useCourses } from "@/hooks/useCourses";

function Home() {
  const { courses } = useCourses();

  return (
    <main>
      <Hero />

      <Categories />

      <FeaturedCourses
        courses={courses}
      />
    </main>
  );
}

export default Home;
