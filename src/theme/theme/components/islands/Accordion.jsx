import React, { useState } from "react";
import Styles from "../modules/AccordionExample/style.module.css";




const Accordion = (props) => {
  // const faqData = [
  //   {
  //     id: 1,
  //     question: "What is React.js and why should I use it?",
  //     answer:
  //       "React.js is a powerful JavaScript library for building user interfaces.",
  //   },
  //   {
  //     id: 2,
  //     question: "How does the Virtual DOM in React work?",
  //     answer:
  //       "React creates a virtual DOM and compares it with the real DOM.",
  //   },
  // ];

  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };


  
    const {
        accordion_items = [],
    } = props;

    logInfo(props, 'props');


  return (
    <div>
      <h1>The Accordion</h1>

      <ul className={Styles.section_accordion}>
        {faqData.map(({ id, question, answer }) => (
          <li key={id} onClick={(e) => {
            e.stopPropagation(); // Important fix
            handleToggle(id);
          }}>
            <div className={Styles.accordion_grid}>
              <p className={Styles.accordion_question}>{question}</p>

              {/* FIXED HERE */}
              <div
                className={`${Styles.accordion_btn} ${activeId === id ? Styles.active_btn : ""
                  }`}
                onClick={(e) => {
                  e.stopPropagation(); // Important fix
                  handleToggle(id);
                }}
              >
                {activeId === id ? "Close" : "Show"}
              </div>
            </div>

            {activeId === id && (
              <p className={Styles.accordion_answer}>{answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
