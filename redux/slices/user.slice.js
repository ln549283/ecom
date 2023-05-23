import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    isLoggedIn: false,
  },
  reducers: {
    loginUser: (state, action) => {
        state.name = action.payload;
        state.isLoggedIn = true;
        state.balance = 5000;
        state.activeStores = 0;
        state.expenses = 100;
        state.revenue = 0;
        state.date = Date.now();
        state.backgroundSound = 0.01;
        state.interfaceSound = 1;
    },
    logoutUser: (state) => {
      state.name = '';
      state.isLoggedIn = false;
    },
    setBackgroundSound: (state, action) => {
      state.backgroundSound = action.payload;
    },
    setInterfaceSound: (state, action) => {
      state.intefaceSound = action.payload;
    },
    deductBalance: (state, action) => {
      const cost = action.payload;
      state.balance -= cost;
    },
    deductDailyCost: (state) => {
      state.balance -= state.expenses;
    },

  },
});

export const { loginUser, logoutUser, setBackgroundSound, setInterfaceSound, deductBalance, deductDailyCost } = userSlice.actions;

export default userSlice.reducer;