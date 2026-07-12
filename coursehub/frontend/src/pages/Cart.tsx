import { Link } from "react-router-dom";

import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";

import { useCourses } from "@/hooks/useCourses";

function Cart() {
  const { courses } = useCourses();

  const cartCourses = courses.slice(0, 2);

  const totalPrice = cartCourses.reduce(
    (total, course) => total + course.price,
    0
  );

  return (
    <main>
      <PageHeader
        title="Shopping Cart"
        description="Review your selected courses."
      />

      <section className="container mx-auto px-4 py-10">
        {cartCourses.length === 0 ? (
          <div className="rounded-xl border border-dashed p-12 text-center">
            <h2 className="mb-3 text-2xl font-semibold">
              Your cart is empty
            </h2>

            <p className="mb-6 text-gray-600">
              Browse courses and add them to your cart.
            </p>

            <Link to="/courses">
              <Button>
                Browse Courses
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {cartCourses.map((course) => (
              <div
                key={course.id}
                className="rounded-xl border p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">
                      {course.title}
                    </h2>

                    <p className="mt-2 text-gray-600">
                      {course.instructor}
                    </p>
                  </div>

                  <span className="text-lg font-bold">
                    ${course.price}
                  </span>
                </div>
              </div>
            ))}

            <div className="rounded-xl bg-gray-100 p-6">
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold">
                  Total
                </span>

                <span className="text-2xl font-bold">
                  ${totalPrice}
                </span>
              </div>

              <Link to="/checkout">
                <Button className="mt-6 w-full">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Cart;
