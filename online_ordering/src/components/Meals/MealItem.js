import { useContext, useRef } from 'react';

import styles from './MealItem.module.css'
import Button from '../../UI/Button/Button';
import CartContext from '../../context/cart-context';
const MealItem = (props) => {
    const input = useRef();
    const addItemHandler = () => {
        ctx.addItem({
            ...props.meal,
            quantity: parseInt(input.current.value)
        })
    }
    const ctx = useContext(CartContext);
    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <h3>{props.meal.name}</h3>
                <p><em>{props.meal.description}</em></p>
                <h3 className={styles.price}>${props.meal.price.toFixed(2)}</h3>
            </div>
            <div className={styles.right}>
                <h4>Amount <span><input ref={input} type="number" defaultValue="1" min="1" step="1" /></span></h4> 
                <Button onClick={addItemHandler} className={styles.right}><h3>+ Add</h3></Button>
            </div>
        </div>
        
    )
}

export default MealItem;