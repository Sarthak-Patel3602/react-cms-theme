import React, { useState, useEffect } from "react";
import Styles from '../modules/TabModule/style.module.css';
import { logInfo } from '@hubspot/cms-components';


const TabsAccordion = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const tabs = [
  //   { title: "Tab One", content: "This is content for Tab 1." },
  //   { title: "Tab Two", content: "This is content for Tab 2." },
  //   { title: "Tab Three", content: "This is content for Tab 3." },
  // ];

  
    const {
        tab_items = [],
    } = props;


    logInfo(props, 'props');


  return (
    <div className={Styles.tab_container}>

      {/* Desktop Tabs */}
      {!isMobile && (
        <>
          <div className={Styles.tab_header}>
            {tab_items.map(({tab_title,tab_content}, index) => (
              <div
                key={index}
                className={`${Styles.tab_btn} ${activeIndex === index ? Styles.active : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                {tab_title}
              </div>
            ))}
          </div>

          <div className={Styles.tab_content}>
            <p>{tab_items[activeIndex].tab_content}</p>
          </div>
        </>
      )}

      {/* Mobile Accordion */}
      {isMobile && (
        <div className={Styles.accordion_wrapper}>
          {tab_items.map(({tab_title,tab_content}, index) => (
            <div key={index} className={Styles.accordion_item}>
              <div
                className={Styles.accordion_header}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                {tab_title}
                <span className={Styles.arrow}>{activeIndex === index ? "-" : "+"}</span>
              </div>

              {activeIndex === index && (
                <div className={Styles.accordion_body}>
                  <p>{tab_content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TabsAccordion;
