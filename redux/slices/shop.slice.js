import { createSlice } from '@reduxjs/toolkit';

const shopSlice = createSlice({
  name: 'shops',
  initialState: {
    shops: [],
    count: 0,
  },
  reducers: {
    createShop: (state, action) => {
      const newShop = {
        id: state.shops.length + 1,
        name: action.payload,
        operating_cost: 0,
      };
      state.shops.push(newShop);
      state.count += 1;

    },
    updateShop: (state, action) => {
      const { id, updates } = action.payload;
      const shopToUpdate = state.shops.find((shop) => shop.id === id);
      if (shopToUpdate) {
        Object.assign(shopToUpdate, updates);
      }
    },
  },
});

export const { createShop, updateShop } = shopSlice.actions;

export default shopSlice.reducer;