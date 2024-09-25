import {Plus} from "lucide-react";
import React from "react";

const faqs = [
  {
    question: "What is SpaceNG?",
    answer:
      "SpaceNG is a shortlet and workspace management platform developed by FusionForge Technology Company.",
  },
  {
    question: "What is the purpose of SpaceNG?",
    answer:
      "SpaceNG aims to provide a seamless and efficient platform for users to book and manage short-term rentals (shortlets) and workspaces.",
  },
  {
    question: "What features does SpaceNG offer?",
    answer:
      "SpaceNG offers features like user registration, property listing, booking management, payment processing, and customer support.",
  },
  {
    question: "What kind of properties can be listed on SpaceNG?",
    answer:
      "SpaceNG allows users to list various types of properties, including apartments, houses, offices, and co-working spaces.",
  },
  {
    question: "How do I list my property on SpaceNG?",
    answer:
      'To list your property, create an account, click on "Add Property," and fill out the required details, including photos and pricing information.',
  },
  {
    question: "How does booking work on SpaceNG?",
    answer:
      "Users can search for properties, select dates, and book properties directly on the platform. Property owners can manage bookings and communicate with guests.",
  },
  {
    question: "What payment options does SpaceNG offer?",
    answer:
      "SpaceNG supports various payment options, including credit cards, bank transfers, and mobile payments.",
  },
  {
    question: "Is SpaceNG secure?",
    answer:
      "Yes, SpaceNG prioritizes security, using encryption and secure payment gateways to protect user data.",
  },
  {
    question: "What kind of support does SpaceNG offer?",
    answer: "SpaceNG provides customer support through email, phone, and in-app messaging.",
  },
  {
    question: "SpaceNG provides customer support through email, phone, and in-app messaging?",
    answer:
      "SpaceNG provides customer support through eYes, users can cancel or modify bookings subject to the property owner's policies and terms. mail, phone, and in-app messaging.",
  },
];

function Faq() {
  return (
    <ul className="py-10">
      {faqs.map((item, index) => {
        return <Card key={index} answer={item.answer} question={item.question} />;
      })}
    </ul>
  );
}

function Card({question, answer}: {question: string; answer: string}) {
  return (
    <li>
      <h4 className="flex items-center justify-between bg-grey text-white rounded-lg px-3 py-3.5">
        <span className="font-medium text-xl">{question}</span>
        <Plus size={34} />
      </h4>
      <p className="py-8 px-3">{answer}</p>
    </li>
  );
}

export default Faq;
