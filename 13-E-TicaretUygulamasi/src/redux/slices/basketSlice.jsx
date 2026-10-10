import { createSlice } from '@reduxjs/toolkit'

const getBasketFromStorage = () => {
    try {
        const basket = JSON.parse(localStorage.getItem('basket') || '[]');
        return Array.isArray(basket) ? basket : [];
    } catch { return []; }
}

const initialState = {
    products: getBasketFromStorage(),
    drawer: false,
    totalAmount: 0,
    totalItems: 0
}

const writeFromBasketToStroge = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket));
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            if (!action.payload || action.payload.count < 1) return;
            const findProduct = state.products && state.products.find(product => product.id === action.payload.id);
            if (findProduct) {
                const extractedProducts = state.products.filter(product => product.id !== action.payload.id);
                findProduct.count += action.payload.count;

                state.products = [...extractedProducts, findProduct]
                writeFromBasketToStroge(state.products);
            } else {
                state.products = [...state.products, action.payload];
                writeFromBasketToStroge(state.products);
            }
        },
        setDrawer: (state) => {
            state.drawer = !state.drawer;
        },
        removeFromBasket: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
            writeFromBasketToStroge(state.products);
        },
        calculateBasket: (state) => {
            state.totalAmount = 0;
            state.totalItems = 0;
            state.products && state.products.map(product => {
                state.totalAmount += product.price * product.count;
                state.totalItems += product.count;
            })
        }
    }
}
)

export const { addToBasket, setDrawer, calculateBasket, removeFromBasket } = basketSlice.actions

export default basketSlice.reducer

// https://mui.com/material-ui/react-badge/
