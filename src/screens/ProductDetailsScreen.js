import { FlatList, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'

import React from 'react'
import products from '../data/products'

const ProductDetailsScreen = () => {
    const product = products[0];
    
    const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <FlatList
        data={product.images}
        renderItem={({item}) => (
          <Image
            source={{ uri: item }}
            style={{ width: width, aspectRatio: 1 }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator ={true}
        pagingEnabled
      />
    </View>
  );
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    }
})