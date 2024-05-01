// import { createContext, useReducer } from 'react';
// import { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { actionTypes } from '../utils/action.types';
// // import { useCart } from '../utils/useCart';

// const initialState = {
//   items: [],
// };

// function cartReducer(state, action) {
//   switch (action.type) {
//     case actionTypes.ADD_TO_CART:
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     case actionTypes.REMOVE_FROM_CART:
//       return {
//         ...state,
//         items: state.items.filter((item) => item.id !== action.payload),
//       };
//     case actionTypes.CLEAR_CART:
//       return {
//         ...state,
//         items: [],
//       };
//     case actionTypes.UPDATE_QUANTITY:
//       return {
//         ...state,
//         items: state.items.map((item) =>
//           item.id === action.payload.id
//             ? { ...item, quantity: action.payload.quantity }
//             : item,
//         ),
//       };
//     case actionTypes.RESTORE_CART:
//       return {
//         ...state,
//         items: action.payload.items,
//       };
//     default:
//       throw new Error(`Unhandled action type: ${action.type}`);
//   }
// }

// const CartContext = createContext();

// function CartProvider({ children }) {
//   const [cartState, dispatch] = useReducer(cartReducer, initialState);

//   useEffect(() => {
//     const cartInLocalStorage = localStorage.getItem('cart');
//     console.log(cartInLocalStorage);
//     if (cartInLocalStorage) {
//       dispatch({
//         type: 'RESTORE_CART',
//         payload: JSON.parse(cartInLocalStorage),
//       });
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cartState));
//   }, [cartState]);
//   return (
//     <CartContext.Provider value={{ cartState, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// CartProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };
// export { CartProvider, CartContext };
