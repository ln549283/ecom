import React, { useState } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { Button, Text, Avatar, Card, IconButton } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import DefaultPage from '../components/DefaultPage';
import { playClickSound, playSuccessClickSound } from './audio.js';
import styles from '../styles/style';
import { unlockProduct, buyProduct } from '../redux/slices/produits.slice';
import { deductBalance } from '../redux/slices/user.slice';

const Products = ({ navigation }) => {
  const products = useSelector((state) => state.produits);
  const categories = useSelector((state) => state.categories);
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);

  const getColorByGrade = (grade) => {
    switch (grade) {
      case 'commun':
        return 'green';
      case 'rare':
        return 'blue';
      default:
        return 'blueviolet';
    }
  };

  const getProductById = (id) => {
    return products.find((p) => p.id === id);
  };

  const dispatch = useDispatch();

  const handleUnlockProduct = (productId) => {
    const product = getProductById(productId);
    dispatch(deductBalance(product.buyPrice));
    dispatch(unlockProduct(productId));
  };

  const handleBuyProduct = (productId, quantity) => {
    const product = getProductById(productId);
    dispatch(deductBalance(product.buyPrice * quantity));
    dispatch(buyProduct(productId, quantity));
  };

  const renderProductItem = ({ item }) => (
    <Card style={{ marginVertical: 8, borderRadius: 16, flex:1, margin:5 }}>
      <Card.Content style={{ padding: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Avatar.Icon icon="pokeball" size={36} color="goldenrod" style={{ marginRight: 8 }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: getColorByGrade(item.grade) }}>{item.title}</Text>
        </View>
        <Text>Prix d'achat: {item.buyPrice} $</Text>
        <Text>Prix de vente: {item.sellPrice} $</Text>
        <Text>Age cible: {item.sellPrice} $</Text>
        <Text>Sexe cible: {item.sellPrice} $</Text>
        <Text style={{ color: getColorByGrade(item.grade) }}>{item.grade}</Text>
      </Card.Content>
      <Card.Actions style={{ justifyContent: 'flex-end', paddingBottom: 16 }}>
        {item.owned ? (
          <>
            <Button
              mode="contained"
              onPress={() => {
                playClickSound();
                handleBuyProduct(item.id, 1);
              }}
              style={{ marginRight: 8 }}
            >
              +1
            </Button>
            <Button
              mode="contained"
              onPress={() => {
                playClickSound();
                handleBuyProduct(item.id, 10);
              }}
              style={{ marginRight: 8 }}
            >
              +10
            </Button>
            <Button
              mode="contained"
              onPress={() => {
                playClickSound();
                handleBuyProduct(item.id, 100);
              }}
            >
              +100
            </Button>
          </>
        ) : (
          <Button mode="contained" onPress={() => { playSuccessClickSound(); handleUnlockProduct(item.id); }}>
            Débloquer
          </Button>
        )}
      </Card.Actions>
    </Card>
  );


  
  const renderCategoryItem = ({ item }) => (
    <View style={{ marginVertical: 8}}>
      <Text variant="titleLarge" style={{ textAlign: 'center', marginBottom: 8 }}>
        <Button
          mode={selectedCategoryId === item.id ? "contained" : "outlined"}
          onPress={selectedCategoryId === item.id ? ()=>{} : () => setSelectedCategoryId(item.id)}
          style={{ marginHorizontal: 16 }}
        >
          {item.title}
        </Button>
      </Text>
    </View>
  );

  return (
    <DefaultPage>
      <Button icon="arrow-left-bold" mode="contained" onPress={() => { playClickSound(); navigation.goBack(); }}>
        Retour
      </Button>
      <View contentContainerStyle={{ padding: 16,flexDirection: 'row' }}>
        
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
        
      </View>
      <View contentContainerStyle={{ padding: 16,flexDirection: 'row' }}>
        <FlatList
          data={products.filter((product) => product.categorieId === selectedCategoryId)}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={{ paddingHorizontal: 16}}
          numColumns={5}
        />
      </View>
    </DefaultPage>
  );
};

export default Products;
