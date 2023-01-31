import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onModalHide} />;
};

const ModalOverlay = (props) => {

    const cancelOrder = () => {
        props.onModalHide(0);
    };
    return (
        <Card className={`${styles.modal} ${styles.hideScroll}`}>
            <header className={styles.header}>
                <div><h2>Your Cart</h2></div>
                <div><Button onClick={props.onRemove} inverted="1"><h3>Empty Cart</h3></Button></div>
            </header>
            <div className={styles.content}>{props.children}</div>
            <footer className={styles.actions}>
                {props.order ? (
                    <Button onClick={props.onModalHide}>
                        <h3>Okay</h3>
                    </Button>
                ) : (
                    <Button onClick={cancelOrder}>
                        <h3>Cancel</h3>
                    </Button>
                )}

                {!props.order && !props.empty && (
                    <Button onClick={props.onOrder}>
                        <h3>Order</h3>
                    </Button>
                )}
            </footer>
        </Card>
    );
};

const CartModal = (props) => {
    const cancelOrder = () => {
        props.onModalHide(0);
    };

    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onModalHide={cancelOrder} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onModalHide={props.onModalHide}
                    empty={props.empty}
                    onOrder={props.onOrder}
                    order={props.order}
                    onRemove={props.onRemove}
                >
                    {props.children}
                </ModalOverlay>,
                document.getElementById("overlay-root")
            )}
        </>
    );
};

export default CartModal;
