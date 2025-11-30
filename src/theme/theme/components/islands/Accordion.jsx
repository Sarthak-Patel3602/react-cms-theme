import React, { useState } from "react";
import Styles from "../modules/AccordionExample/style.module.css";
import { logInfo } from '@hubspot/cms-components';


const Accordion = (props) => {
  
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (index) => {
    setActiveId((prev) => (prev === index ? null : index));
  };


  
    const {
        accordion_items = [],
    } = props;

    logInfo(props, 'props');


  return (
    <div>
      <h1>The Accordion</h1>

      <ul className={Styles.section_accordion}>
        {accordion_items.map(({title,content},index) => (
          <li key={index} onClick={(e) => {
            e.stopPropagation(); // Important fix
            handleToggle(index);
          }}>
            <div className={Styles.accordion_grid}>
              <p className={Styles.accordion_question}>{title}</p>

              {/* FIXED HERE */}
              <div
                className={`${Styles.accordion_btn} ${activeId === index ? Styles.active_btn : ""
                  }`}
                onClick={(e) => {
                  e.stopPropagation(); // Important fix
                  handleToggle(index);
                }}
              >
                {activeId === index ? "Close" : "Show"}
              </div>
            </div>

            {activeId === index && (
              <p className={Styles.accordion_answer}>{content}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
