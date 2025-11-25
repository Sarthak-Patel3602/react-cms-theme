import React, { useState, useEffect } from "react";
import Styles from '../modules/TabModule/style.module.css';

const TabsAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tabs = [
    { title: "Tab One", content: "This is content for Tab 1." },
    { title: "Tab Two", content: "This is content for Tab 2." },
    { title: "Tab Three", content: "This is content for Tab 3." },
  ];

  return (
    <div className={Styles.tab_container}>

      {/* Desktop Tabs */}
      {!isMobile && (
        <>
          <div className={Styles.tab_header}>
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`${Styles.tab_btn} ${activeIndex === index ? Styles.active : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className={Styles.tab_content}>
            <p>{tabs[activeIndex].content}</p>
          </div>
        </>
      )}

      {/* Mobile Accordion */}
      {isMobile && (
        <div className={Styles.accordion_wrapper}>
          {tabs.map((tab, index) => (
            <div key={index} className={Styles.accordion_item}>
              <button
                className={Styles.accordion_header}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                {tab.title}
                <span className={Styles.arrow}>{activeIndex === index ? "-" : "+"}</span>
              </button>

              {activeIndex === index && (
                <div className={Styles.accordion_body}>
                  <p>{tab.content}</p>
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
