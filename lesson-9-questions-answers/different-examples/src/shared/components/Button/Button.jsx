import styles from "./button.module.css";

const Button = ({children, onClick, type, className}) => {
    const fullClassName = className ? `${styles.btn} ${className}` : styles.btn;
    return <button onClick={onClick} type={type} className={fullClassName}>{children}</button>
}

export default Button;

Button.defaultProps = {
    type: "submit"
}

