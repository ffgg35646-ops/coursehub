import { useState } from "react";

import PageHeader from "@/components/layout/PageHeader";

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer:
      "Open the course page and click the Enroll button to add it to your account.",
  },
  {
    question: "Can I access my courses anytime?",
    answer:
      "Yes. You can access your enrolled courses whenever you sign in to your account.",
  },
  {
    question: "Do courses include certificates?",
    answer:
      "Many courses include a certificate of completion after finishing all lessons.",
  },
  {
    question: "Can I update my profile information?",
    answer:
      "Yes. You can edit your personal information from the Profile page.",
  },
  {
    question: "How can I contact support?",
    answer:
      "Visit the Contact page and send us a message. Our team will respond as soon as possible.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setActiveIndex((current) =>
      current === index ? null : index
    );
  }

  return (
    <main>
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to the most common questions."
      />

      <section className="container mx-auto max-w-4xl px-4 py-12">
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={item.question}
              className="rounded-xl border"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between p-5 text-left font-semibold"
              >
                <span>{item.question}</span>

                <span className="text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="border-t px-5 py-4 text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default FAQ;
