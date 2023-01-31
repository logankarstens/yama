import Button from "../../UI/Button/Button";
import styles from './CartItem.module.css'
const CartItem = (props) => {

    return (
        <div className={styles.main}>
            <h3>{props.item.name}</h3>
            <div className={styles.container}>
                <div>
                    <h4><span className={styles.price}>${props.item.price}</span> x{props.quantity}</h4> 
                </div>
                <div className={styles.right}>
                    <Button inverted="1" padding="1rem" onClick={props.onAdd}><h3>+</h3></Button>
                    <Button inverted="1" padding="1rem" onClick={props.onRemove}><h3>-</h3></Button>
                </div>
            </div>
        </div>

        
    );
}

export default CartItem;