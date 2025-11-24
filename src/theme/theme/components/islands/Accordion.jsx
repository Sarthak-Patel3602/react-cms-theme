import React, { useState } from "react";
import Styles from "../modules/AccordionExample/style.module.css";
const Accordion = () => {
  // FAQ Data inside same file
  const faqData = [
    {
      id: 1,
      question: "What is React.js and why should I use it?",
      answer:
        "React.js is a powerful JavaScript library for building user interfaces. It helps create fast, dynamic, and scalable applications.",
    },
    {
      id: 2,
      question: "How does the Virtual DOM in React work?",
      answer:
        "React creates a virtual DOM and compares it with the real DOM to update only the necessary parts, improving performance.",
    },
  ];

  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <h1>The Accordion</h1>

      <ul className={Styles.section_accordion}>
        {faqData.map(({ id, question, answer }) => (
          <li key={id} onClick={() => handleToggle(id)}>
            <div className={Styles.accordion_grid}>
              <p className={Styles.accordion_question}>{question}</p>

              <button
                onClick={() => handleToggle(id)}
                className={activeId === id ? "active_btn" : ""}
              >
                {activeId === id ? "Close" : "Show"}
              </button>
            </div>

            {activeId === id && <p className={Styles.accordion_answer}>{answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
