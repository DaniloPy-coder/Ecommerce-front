import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductType } from "@/types/ProductType";

type CartProductType = ProductType & { quantity: number };

type CartState = {
  cart: CartProductType[];
  addProduct: (product: ProductType) => void;
  isOpen: boolean;
  toggleCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addProduct: (product) =>
        set((state) => {
          const existingProduct = state.cart.find((p) => p.id === product.id);

          if (existingProduct) {
            const updatedCart = state.cart.map((p) => {
              if (p.id === product.id) {
                return { ...p, quantity: p.quantity + 1 };
              }
              return p;
            });
            return { ...state, cart: updatedCart };
          } else {
            return {
              ...state,
              cart: [...state.cart, { ...product, quantity: 1 }],
            };
          }
        }),
      isOpen: false,
      toggleCart: () => set((state) => ({ ...state, isOpen: !state.isOpen })),
    }),
    {
      name: "cart-storage",
    }
  )
);
