import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";

function OrderSuccess() {
  return (
    <main>
      <PageHeader
        title="Order Successful"
        description="Your enrollment has been completed successfully."
      />

      <section className="container mx-auto flex min-h-[60vh] items-center justify-center px-4 py-12">
        <div className="w-full max-w-xl rounded-xl border bg-white p-10 text-center shadow-sm">
          <CheckCircle
            size={72}
            className="mx-auto mb-6 text-green-600"
          />

          <h2 className="mb-4 text-3xl font-bold">
            Thank You!
          </h2>

          <p className="mb-8 text-gray-600">
            Your payment was successful. You can now access your purchased
            courses from your learning dashboard.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/learning">
              <Button>
                Go to My Learning
              </Button>
            </Link>

            <Link to="/courses">
              <Button variant="outline">
                Browse More Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default OrderSuccess;
