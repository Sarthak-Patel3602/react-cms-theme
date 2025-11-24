import React, { useState, useEffect } from "react";
import styles from "../modules/AccordionExample/style.module.css";

export default function Accordion({ items }) {
    const defaultItems = [
        { id: 1, title: "First item", content: "Content for the first item." },
        { id: 2, title: "Second item", content: "Content for the second item." },
        { id: 3, title: "Third item", content: "Content for the third item." },
    ];

    const list = items && items.length ? items : defaultItems;

    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        setOpenIndex(0);
    }, []);

    const toggleIndex = (index) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <div className="accordion">
            {list.map((item, index) => (
                <div className={styles.accordion_item} key={item.id}>
                    <div
                        className={`${styles.accordion_header} ${openIndex === index ? styles.open : ""}`}
                        onClick={() => toggleIndex(index)}
                    >
                        <span style={{ color: "#000000" }}>{item.title}</span>
                        <span className={styles.accordion_icon} style={{ color: "#000000" }}>{openIndex === index ? "-" : "+"}</span>
                    </div>

                    <div className={`${styles.accordion_content} ${openIndex === index ? styles.open : ""}`}>
                        <div className={styles.accordion_content_inner} style={{ color: "#000000" }}>{item.content}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}