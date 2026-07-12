import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap } from "lucide-react";

import Button from "@/components/ui/Button";

function Hero() {
  return (
    <section className="bg-blue-600 text-white">
      <div className="container mx-auto grid gap-10 px-4 py-20 lg:grid-cols-2">

        <div className="flex flex-col justify-center">

          <h1 className="mb-5 text-4xl font-bold leading-tight md:text-6xl">
            Learn New Skills
            <br />
            Grow Your Career
          </h1>

          <p className="mb-8 max-w-xl text-lg text-blue-100">
            Discover professional online courses and learn from
            experienced instructors at your own pace.
          </p>


          <div className="flex flex-wrap gap-4">

            <Link to="/courses">
              <Button>
                <span className="flex items-center gap-2">
                  Browse Courses
                  <ArrowRight size={18} />
                </span>
              </Button>
            </Link>


            <Link to="/register">
              <Button variant="outline">
                Get Started
              </Button>
            </Link>

          </div>

        </div>


        <div className="flex items-center justify-center">

          <div className="flex h-72 w-72 items-center justify-center rounded-full bg-white/10">

            <div className="text-center">

              <GraduationCap
                size={90}
                className="mx-auto mb-4"
              />

              <p className="text-xl font-semibold">
                Online Learning
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
