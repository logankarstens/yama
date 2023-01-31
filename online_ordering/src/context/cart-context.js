import { useReducer } from 'react';
import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});
const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        let updatedTotalAmount = (state.totalAmount + action.item.price * action.item.quantity)
        updatedTotalAmount = +updatedTotalAmount.toFixed(2);

        const existingItemIndex = state.items.findIndex((item) => {
            return item.id === action.item.id
        });
        const existingItem = state.items[existingItemIndex]
       
        let updatedItems;
        if (existingItem) {
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + action.item.quantity
            }
            updatedItems = [
                ...state.items,
            ]
            updatedItems[existingItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    } else if (action.type === "REMOVE"){
        

        const existingItemIndex = state.items.findIndex((item) => {
            return item.id === action.id
        });
        const existingItem = state.items[existingItemIndex]

        let updatedTotalAmount = (state.totalAmount - existingItem.price)
        updatedTotalAmount = +updatedTotalAmount.toFixed(2);

        let updatedItems;
        if (existingItem) {
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity - 1
            }
            updatedItems = [
                ...state.items,
            ]
            if (updatedItem.quantity > 0) {
                updatedItems[existingItemIndex] = updatedItem;
            } else {
                updatedItems.splice(existingItemIndex, 1);
            }
            
        } else {
            console.log("ERROR")
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    } else if (action.type === "CLEAR") {
        return defaultCartState;
    }
}

export const CartContextProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addHandler = item => {
        dispatchCartAction({type: 'ADD', item: item});
    };
    const removeHandler = id => {
        dispatchCartAction({type: 'REMOVE', id: id});
    };

    const clearHandler = () => {
        dispatchCartAction({type: 'CLEAR'})
    };
    
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addHandler,
        removeItem: removeHandler,
        clear: clearHandler
    }
    return (
        <CartContext.Provider
            value={cartContext}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;