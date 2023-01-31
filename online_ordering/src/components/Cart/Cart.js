import { useContext, useState, useEffect } from "react";
import Modal from "../../UI/Modal/Modal";
import CartItem from "./CartItem";
import CartContext from "../../context/cart-context";
import styles from './Cart.module.css'
const Cart = (props) => {
    const [order, setOrder] = useState(false);
    const [cartContent, setCartContent] = useState();
    const ctx = useContext(CartContext);
    const cartItemAddHandler = (item) => {
        ctx.addItem({
            ...item,
            quantity: 1
        })
    }
    const cartItemRemoveHandler = (id) => {
        ctx.removeItem(id);
    }

    const clearCartHandler = () => {
        ctx.clear();
    }  
    const stateHandler = () => {
        console.log("state handled, order " + order);
        if (order) {
            setCartContent(<p>Your order has been <strong>confirmed!</strong> Thank you for dining with us.</p>)   
        } else if (ctx.items.length > 0) {
            setCartContent(
                <>
                    <div className={`${ctx.items.length > 3 ? styles['cart-items'] : ''}`}>
                    {ctx.items.map((item) => {
                        return (
                            <CartItem
                                key={item.id}
                                item={item}
                                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                                onAdd={cartItemAddHandler.bind(null, item)}
                                quantity={item.quantity}
                            />
                        );
                    })}
                    </div>
                    <div className={styles.container}>
                        <h2 className={styles.left}>Total price:</h2><h2 className={styles.right}>${ctx.totalAmount.toFixed(2)}</h2>
                    </div>
                </>
            );
        } else {
            setCartContent(<p>No items are currently in your cart. Go add some!</p>);
            
        }
    }
    
    useEffect(() => {
        stateHandler(order)
    }, [order, ctx.items])
    
    const orderHandler = () => {
        console.log("order simulated")
        setOrder(true);
        stateHandler();
        
    };
    return (
        <Modal onModalHide={props.onModalHide} empty={ctx.items.length === 0} onOrder={orderHandler} order={order} onRemove={clearCartHandler}>
            {cartContent}
        </Modal>
    );
};

export default Cart;
