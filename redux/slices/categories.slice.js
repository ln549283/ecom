import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [
    { id: 1, title: 'Mode'},
    { id: 2, title: 'Technologie'},
    { id: 3, title: 'Produit de beauté'},
    { id: 4, title: 'Jeux et jouet'},
    { id: 5, title: 'Animaux'},
    { id: 6, title: 'Aliment et boissons'},
    { id: 7, title: 'Sport'},
  ]
});

export default categoriesSlice.reducer;