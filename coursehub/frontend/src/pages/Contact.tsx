import { useState, type FormEvent } from "react";

import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log({
      name,
      email,
      subject,
      message,
    });

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    alert("Your message has been sent.");
  }

  return (
    <main>
      <PageHeader
        title="Contact Us"
        description="We'd love to hear from you."
      />

      <section className="container mx-auto max-w-3xl px-4 py-12">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-xl border bg-white p-8 shadow-sm"
        >
          <Input
            label="Full Name"
            placeholder="John Doe"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <Input
            type="email"
            label="Email Address"
            placeholder="john@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <Input
            label="Subject"
            placeholder="Subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          />

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Message
            </label>

            <textarea
              rows={6}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Write your message..."
              className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-600"
            />
          </div>

          <Button
            type="submit"
            className="w-full"
          >
            Send Message
          </Button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
