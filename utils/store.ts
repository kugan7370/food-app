import { ActionTypes, CartItemType, CartType } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";


const INITIALSTATE = {
    products: [],
    totalItems: 0,
    totalPrice: 0,
};

export const useCartStore = create(persist<CartType & ActionTypes>((set, get) => ({
    //initialize
    products: INITIALSTATE.products,
    totalItems: INITIALSTATE.totalItems,
    totalPrice: INITIALSTATE.totalPrice,

    addToCart(item) {

        //get product from state
        const products = get().products;
        const productInState = products.find((product) => product.id === item.id && product.optionTitle == item.optionTitle);

        if (productInState) {
            const updateProduct = products.map((product) => {
                if (product.id === item.id && product.optionTitle == item.optionTitle) {
                    product.quantity = product.quantity + item.quantity;
                    product.price = product.price + item.price;

                    return product;
                } else {
                    return product;
                }
            });

            set((state) => ({
                products: updateProduct,
                totalItems: state.totalItems + item.quantity,
                totalPrice: state.totalPrice + item.price,
            }));
        }

        else {
            set((state) => ({
                products: [...state.products, item],
                totalItems: state.totalItems + item.quantity,
                totalPrice: state.totalPrice + item.price
            }))

        }
    },

    removeFromCart(item) {

        const products = get().products;

        //remove if same id and optionTitle
        const updatedProducts = products.filter((product) => product.id !== item.id || product.optionTitle != item.optionTitle);

        set((state) => ({


            products: updatedProducts,
            totalItems: state.totalItems - item.quantity,
            totalPrice: state.totalPrice - item.price

        }))





    },




}), { name: 'cartItems', skipHydration: true }));


