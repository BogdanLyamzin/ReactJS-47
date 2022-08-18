import { useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./modal.module.css";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ close, children }) => {

    const handleClose = (e) => {
        if (e.target === e.currentTarget || e.code === "Escape") {
            close();
        }
    }

    useEffect(()=> {
        document.addEventListener("keydown", handleClose);

        return ()=> document.removeEventListener("keydown", handleClose)
    }, []);

    return createPortal(
        (<div className={styles.overlay} onClick={handleClose}>
            <div className={styles.modal}>
                <span onClick={close} className={styles.close}>X</span>
                {children}
            </div>
        </div>
        ),
        modalRoot
    )
}

export default Modal;