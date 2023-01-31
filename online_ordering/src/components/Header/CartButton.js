import { useState, useEffect, useContext } from 'react';

import Cart from '../Cart/Cart';
import styles from './CartButton.module.css'
import CartIcon from './CartIcon'
import Button from "../../UI/Button/Button";
import CartContext from '../../context/cart-context';

const CartButton = () => {
    const [buttonActivate, setButtonActivate] = useState(false);
    const [modalShowing, setModalShowing] = useState(false);

    const modalShowHandler = () => {
        setModalShowing(true);
        document.body.style.top = `-${document.documentElement.scrollTop}px`;
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.overflowY = 'scroll';
        
        //document.body.style.top = "500px"
    }

    const modalHideHandler = (finishOrder) => {
        if (finishOrder) {
            ctx.clear();
        }
        setModalShowing(false)
        
        document.body.style.position = 'static';
        document.body.style.overflowY = 'auto';
        let temp = parseInt(document.body.style.top) * -1;
        document.body.style.top = `0px`;
        document.documentElement.scrollTop = temp;
    }
    const ctx = useContext(CartContext)
    const numberOfCartItems = ctx.items.reduce((curr, item) => {
       return curr + item.quantity;
    }, 0)

    
    useEffect(() => {
        if (ctx.items.length === 0) {
            return;
        }
        setButtonActivate(true);
        const timer = setTimeout(() => {
            setButtonActivate(false);
        }, 300);

        return () => {
            setButtonActivate(false);
            clearTimeout(timer);
        }
    }, [ctx.items])

    const btnClasses = `${styles.cart} ${buttonActivate ? styles.bump : ''}`

    if (modalShowing) {
        return (
            <Cart onModalHide={modalHideHandler}/>
        )
    } else {

        return (
            <Button onClick={modalShowHandler} padding="0.1rem 0rem" className={btnClasses}>  
                <div className={styles.icon}><CartIcon /></div>
            
                <h3>Your Cart</h3>
            
                <div className={styles['cart-count']}><h3>{numberOfCartItems}</h3></div>
            </Button>
        );
    }
}

export default CartButton;