import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user.slice';
import missionsReducer from './slices/missions.slice';
import produitsSlice from './slices/produits.slice';
import categoriesSlice from './slices/categories.slice';
import shopSlice from './slices/shop.slice';

export default configureStore({
  reducer: {
    user: userReducer,
    missions: missionsReducer,
    produits: produitsSlice,
    categories: categoriesSlice,
    shops: shopSlice,
  }
});