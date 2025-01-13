"use client";

import {Plus} from "lucide-react";
import React from "react";

const faqs = [
  {
    question: "What is Spacefinda?",
    answer:
      "Spacefinda is a shortlet and workspace management platform developed by FusionForge Technology Company.",
  },
  {
    question: "What is the purpose of Spacefinda?",
    answer:
      "Spacefinda aims to provide a seamless and efficient platform for users to book and manage short-term rentals (shortlets) and workspaces.",
  },
  {
    question: "What features does Spacefinda offer?",
    answer:
      "Spacefinda offers features like user registration, property listing, booking management, payment processing, and customer support.",
  },
  {
    question: "What kind of properties can be listed on Spacefinda?",
    answer:
      "Spacefinda allows users to list various types of properties, including apartments, houses, offices, and co-working spaces.",
  },
  {
    question: "How do I list my property on Spacefinda?",
    answer:
      'To list your property, create an account, click on "Add Property," and fill out the required details, including photos and pricing information.',
  },
  {
    question: "How does booking work on Spacefinda?",
    answer:
      "Users can search for properties, select dates, and book properties directly on the platform. Property owners can manage bookings and communicate with guests.",
  },
  {
    question: "What payment options does Spacefinda offer?",
    answer:
      "Spacefinda supports various payment options, including credit cards, bank transfers, and mobile payments.",
  },
  {
    question: "Is Spacefinda secure?",
    answer:
      "Yes, Spacefinda prioritizes security, using encryption and secure payment gateways to protect user data.",
  },
  {
    question: "What kind of support does Spacefinda offer?",
    answer: "Spacefinda provides customer support through email, phone, and in-app messaging.",
  },
  {
    question: "Spacefinda provides customer support through email, phone, and in-app messaging?",
    answer:
      "Spacefinda provides customer support through eYes, users can cancel or modify bookings subject to the property owner's policies and terms. mail, phone, and in-app messaging.",
  },
];

function Faq() {
  return (
    <ul className="py-10 space-y-2">
      {faqs.map((item, index) => {
        return <Card key={index} answer={item.answer} question={item.question} />;
      })}
    </ul>
  );
}

function Card({question, answer}: {question: string; answer: string}) {
  const toggleShow = (e: any) => {
    e.currentTarget.nextElementSibling.classList.toggle("hidden");
  };

  return (
    <li>
      <h4 className="flex items-center cursor-pointer justify-between bg-grey text-white rounded-lg px-2 sm:px-3 py-2 sm:py-3.5">
        <span className="font-medium text-sm sm:text-xl">{question}</span>
        <button className="md:text-[36px]" onClick={toggleShow}>
          <Plus />
        </button>
      </h4>
      <p className="py-4 px-2 sm:px-3 text-sm sm:text-base hidden">{answer}</p>
    </li>
  );
}

export default Faq;
