import React, { useEffect, useState } from "react";
import styles from "../modules/ModalExample/style.module.css";

/* ----------------- MODAL COMPONENT ----------------- */
function MyModal({ onClose }) {
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        };
    }, []);

    return (
        <div className={styles.modal_overlay}>
            <div className={styles.modal_wrapper} onClick={onClose}></div>

            <div className={styles.modal_container}>
                <h1>This is a heading</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, adipisci.
                </p>

                <div className={styles.modal_btn} onClick={onClose}>
                    Close Modal
                </div>
            </div>
        </div>
    );
}

/* ----------------- MAIN COMPONENT ----------------- */
export function Modal(props) {
    const [showModal, setShowModal] = useState(false);

    const open = () => setShowModal(true);
    const close = () => setShowModal(false);

    return (
        <div className={styles.main_wrapper}>
            <div className={styles.modal_btn} onClick={open}>
                Open Modal
            </div>

            <div className={styles.content}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ut
                    earum cumque debitis?
                </p>
            </div>

            {showModal && <MyModal onClose={close} />}
        </div>
    );
}

export default Modal;