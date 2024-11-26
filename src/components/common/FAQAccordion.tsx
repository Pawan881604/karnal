import * as React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is web development?",
    answer:
      "Web development involves building and maintaining websites. It includes web design, web content development, client-side/server-side scripting, and network security configuration.",
  },
  {
    question: "What languages are used in web development?",
    answer:
      "Web development commonly uses HTML, CSS, and JavaScript. Backend development can involve languages like Python, Ruby, PHP, and frameworks like Node.js.",
  },
  {
    question: "What is responsive design?",
    answer:
      "Responsive design is an approach where web pages render well on various devices and screen sizes, from desktops to mobile phones, using CSS media queries and flexible grids.",
  },
  {
    question: "What is the difference between front-end and back-end development?",
    answer:
      "Front-end development involves creating the parts of a website that users interact with directly, while back-end development involves managing the server, database, and application logic.",
  },
  {
    question: "How can I learn web development?",
    answer:
      "You can learn web development through online courses, tutorials, and practice. Platforms like Codecademy, freeCodeCamp, and Udemy offer comprehensive courses for beginners to advanced learners.",
  },
];

export default function FAQAccordion() {
  return (
    <section className="my-8 max-w-3xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
