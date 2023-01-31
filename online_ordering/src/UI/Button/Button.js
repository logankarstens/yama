import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <button
            style={{ padding: props.padding || "0.2rem 2.8rem" }}
            className={`${styles.button} ${props.inverted ? styles.inverted : styles.normal} ${props.className}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;
