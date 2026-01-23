"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface CartItem {
  productId: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (productId: number) => void;
}

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addToCart(productId: number) {
    // função que altera o estado de cartItems
    setCartItems((state) => {
      const productInCart = state.some((item) => item.productId === productId);
      // Se há produtos sendo adicionados no cart
      if (productInCart) {
        return state.map((item) => {
          // Se há um item sendo adicionado repetidamente
          if (item.productId === productId) {
            // adiciona 1 a quantidade do produto já existente
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        // adiciona o primeiro item de determinado produto
        return [...state, { productId, quantity: 1 }];
      }
    });
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// user cart -> exportar useContext + CartContext
export const useCart = () => useContext(CartContext);
