import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import React from 'react'
import products from '../data/products';

const ProductsScreen = () => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
      )}
      numColumns={2}
    />
  );
}

export default ProductsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      itemContainer:{
        width:'50%',
        padding: 1,
      },
    
      image: {
        width:'100%',
        aspectRatio: 1,
      }
})