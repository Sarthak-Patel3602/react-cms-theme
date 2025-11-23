import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

function MyModal({ close }) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      <div className={styles.modal_wrapper} onClick={close}></div>

      <div className={styles.modal_container}>
        <h1>This is a heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <button className={styles.modal_btn} onClick={close}>
          Close Button
        </button>
      </div>
    </>
  );
}

export function Component() {
  const [showModal, setShowModal] = useState(false);

  const open = () => setShowModal(true);
  const close = () => setShowModal(false);

  return (
    <>
      <button className={styles.modal_btn} onClick={open}>
        Open Modal
      </button>

      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {showModal && <MyModal close={close} />}
    </>
  );
}

export { fields } from "./fields.jsx";

export const meta = {
  label: "Modal Example",
};
