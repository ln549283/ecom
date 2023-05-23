import { createSlice } from '@reduxjs/toolkit';

export const produitsSlice = createSlice({
  name: 'produits',
  initialState: [
    { id: 1, title: 'T-shirt basique uni', buyPrice: '10', sellPrice : '25', targetAge: '18-25', targetGenre: 'u', owned: false, quantity: 0,grade:'commun', categorieId: 1 },
    { id: 2, title: 'Jeans slim', buyPrice: '30', sellPrice : '60', targetAge: '18-45', targetGenre: 'f', owned: false, quantity: 0,grade:'commun', categorieId: 1 },
    { id: 3, title: 'Sneakers', buyPrice: '80', sellPrice : '150', targetAge: '18-35', targetGenre: 'u', owned: false, quantity: 0,grade:'commun', categorieId: 1 },
    { id: 4, title: 'Veste en cuir', buyPrice: '150', sellPrice : '300', targetAge: '26-35', targetGenre: 'h', owned: false, quantity: 0,grade:'rare', categorieId: 1 },
    { id: 5, title: 'Costume sur-mesure', buyPrice: '500', sellPrice : '1000', targetAge: '26-45', targetGenre: 'f', owned: false, quantity: 0,grade:'unique', categorieId: 1 },
    { id: 6, title: 'Casque audio sans fil', buyPrice: '50', sellPrice : '100', targetAge: '18-36', targetGenre: 'u', owned: false, quantity: 0,grade:'commun', categorieId: 2 },
    { id: 7, title: 'Montre connectée', buyPrice: '150', sellPrice : '300', targetAge: '1-45', targetGenre: 'u', owned: false, quantity: 0,grade:'commun', categorieId: 2 },
    { id: 8, title: 'Smartphone avec triple caméra', buyPrice: '400', sellPrice : '900', targetAge: '18-45', targetGenre: 'u', owned: false, quantity: 0,grade:'commun', categorieId: 2 },
    { id: 9, title: 'Ordinateur portable gaming', buyPrice: '800', sellPrice : '1500', targetAge: '18-35', targetGenre: 'u', owned: false, quantity: 0,grade:'rare', categorieId: 2 },
    { id: 10, title: 'Drone professionnel avec caméra 4K', buyPrice: '1000', sellPrice : '2000', targetAge: '35-55', targetGenre: 'h', owned: false, quantity: 0,grade:'unique', categorieId: 2 },
    { id: 11, title: 'Crème hydratante pour peaux sèches', buyPrice: '10', sellPrice : '25', targetAge: '18-35', targetGenre: 'f', owned: false, quantity: 0,grade:'commun', categorieId: 3 },
    { id: 12, title: 'Set de pinceaux pour maquillage', buyPrice: '35', sellPrice : '70', targetAge: '18-35', targetGenre: 'f', owned: false, quantity: 0,grade:'commun', categorieId: 3 },
    { id: 13, title: 'Parfum muscle chêne', buyPrice: '50', sellPrice : '100', targetAge: '25-+', targetGenre: 'h', owned: false, quantity: 0,grade:'commun', categorieId: 3 },
    { id: 14, title: 'Crème anti-âge haut de gamme', buyPrice: '150', sellPrice : '300', targetAge: '35+', targetGenre: 'u', owned: false, quantity: 0,grade:'rare', categorieId: 3 },
    { id: 15, title: 'Coffret de maquillage personnalisable', buyPrice: '300', sellPrice : '600', targetAge: '25-45', targetGenre: 'f', owned: false, quantity: 0,grade:'unique', categorieId: 3 },
    { id: 16, title: 'Puzzle 1000 pièces', buyPrice: '10', sellPrice : '20', targetAge: '36+', targetGenre: 'u', owned: false, quantity: 0,grade:'commun', categorieId: 4 },
    { id: 17, title: 'Peluche licorne lumineuse', buyPrice: '20', sellPrice : '40', targetAge: '18-25', targetGenre: 'f', owned: false, quantity: 0,grade:'commun', categorieId: 4 },
    { id: 18, title: 'Jeu de société stratégique', buyPrice: '40', sellPrice : '80', targetAge: '18-35', targetGenre: 'u', owned: false, quantity: 0,grade:'commun', categorieId: 4 },
    { id: 19, title: 'Pistolet Nerf', buyPrice: '90', sellPrice : '250', targetAge: '18-35', targetGenre: 'h', owned: false, quantity: 0,grade:'rare', categorieId: 4 },
    { id: 20, title: 'Console nouvelle génération', buyPrice: '300', sellPrice : '700', targetAge: '25-45', targetGenre: 'h', owned: false, quantity: 0,grade:'unique', categorieId: 4 },
    { id: 21, title: 'Laisse pour chien', buyPrice: '15', sellPrice : '30', targetAge: '18-35', targetGenre: 'u', owned: false, quantity: 0,grade:'commun', categorieId: 5 },
    { id: 22, title: 'Grand arbre à chat', buyPrice: '60', sellPrice : '150', targetAge: '25-55', targetGenre: 'u', owned: false, quantity: 0,grade:'commun', categorieId: 5 },
    { id: 23, title: 'Niche design', buyPrice: '200', sellPrice : '400', targetAge: '25-55', targetGenre: 'u', owned: false, quantity: 0,grade:'commun', categorieId: 5 },
    { id: 24, title: 'Distributeur de croquette automatique', buyPrice: '250', sellPrice : '400', targetAge: '35+', targetGenre: 'u', owned: false, quantity: 0,grade:'rare', categorieId: 5 },
    { id: 25, title: 'Aquarium design', buyPrice: '500', sellPrice : '1000', targetAge: '46+', targetGenre: 'u', owned: false, quantity: 0,grade:'unique', categorieId: 5 },
    { id: 26, title: 'Boisson gazeuse', buyPrice: '1.2', sellPrice : '2.5', targetAge: '18+', targetGenre: 'u', owned: false, quantity: 0,grade:'commun', categorieId: 6 },
    { id: 27, title: 'Biscuit apéritif', buyPrice: '0.8', sellPrice : '1.8', targetAge: '18-45', targetGenre: 'u', owned: false, quantity: 0,grade:'commun', categorieId: 6 },
    { id: 28, title: 'Lait végétal', buyPrice: 5, sellPrice : '12', targetAge: '18-35', targetGenre: 'u', owned: false, quantity: 0,grade:'commun', categorieId: 6 },
    { id: 29, title: 'Boisson énergisant', buyPrice: '15', sellPrice : '35', targetAge: '18-35', targetGenre: 'h', owned: false, quantity: 0,grade:'rare', categorieId: 6 },
    { id: 30, title: 'Barre protéiné edition limité', buyPrice: '20', sellPrice : '50', targetAge: '18+', targetGenre: 'u', owned: false, quantity: 0,grade:'unique', categorieId: 6 },
    { id: 31, title: 'Gants de musculation', buyPrice: '8', sellPrice : '12', targetAge: '18-45', targetGenre: 'h', owned: false, quantity: 0,grade:'commun', categorieId: 7 },
    { id: 32, title: 'Ballon de football', buyPrice: '15', sellPrice : '30', targetAge: '18-35', targetGenre: 'u', owned: false, quantity: 0,grade:'commun', categorieId: 7 },
    { id: 33, title: 'Kit de camping', buyPrice: '100', sellPrice : '250', targetAge: '25-45', targetGenre: 'u', owned: false, quantity: 0,grade:'commun', categorieId: 7 },
    { id: 34, title: 'Vélo électrique pliant', buyPrice: '400', sellPrice : '600', targetAge: '18-55', targetGenre: 'u', owned: false, quantity: 0,grade:'rare', categorieId: 7 },
    { id: 35, title: 'Planche de surf en bois d\'ébène', buyPrice: '1500', sellPrice : '2500', targetAge: '25-45', targetGenre: 'u', owned: false, quantity: 0,grade:'unique', categorieId: 7 },
  ],
  reducers: {
    unlockProduct: (state, action) => {
      const product = state.find((p) => p.id === action.payload);
      if (product) {
        product.owned = true;
      }
    },
    buyProduct: (state, action) => {
      const { productId, quantity } = action.payload;
      const product = state.find((p) => p.id === productId);
      if (product) {
        product.quantity += quantity;
      }
    },
  },
});

export const { unlockProduct, buyProduct } = produitsSlice.actions;

export default produitsSlice.reducer;