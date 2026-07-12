import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

function Checkout() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log({
      fullName,
      email,
      cardNumber,
    });

    navigate("/order-success");
  }

  return (
    <main>
      <PageHeader
        title="Checkout"
        description="Complete your order securely."
      />

      <section className="container mx-auto max-w-2xl px-4 py-10">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-xl border bg-white p-6 shadow-sm"
        >
          <Input
            label="Full Name"
            placeholder="John Doe"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />

          <Input
            type="email"
            label="Email Address"
            placeholder="john@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <Input
            label="Card Number"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={(event) => setCardNumber(event.target.value)}
          />

          <Button
            type="submit"
            className="w-full"
          >
            Complete Purchase
          </Button>
        </form>
      </section>
    </main>
  );
}

export default Checkout;
