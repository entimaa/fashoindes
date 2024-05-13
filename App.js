

import React, { useRef } from 'react';
import { View, StatusBar, FlatList, ImageBackground, Image, StyleSheet, Animated, Dimensions } from 'react-native';
import { styles, width } from './styles';

const { width: screenWidth } = Dimensions.get('window');

const App = () => {
  const data = [
    {  id:1, image: require('./image/img2.png') },
    { id:2,  image: require('./image/img1.png') },
    {  image: require('./image/img5.png') },
    { id:3, image: require('./image/img1.png') },

  ];

  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar hidden />
      <View style={StyleSheet.absoluteFillObject}>
        {data.map((item, index) => {
          const inputRange = [
            (index - 1) * screenWidth,
            index * screenWidth,
            (index + 1) * screenWidth
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 3, 0]
          })
          return (
            <Animated.Image
              key={`image-${index}`}
              source={item.image}
              style={[StyleSheet.absoluteFill, { opacity }]}
              blurRadius={67}
              borderRadius={10}
            />
          )
        })}
      </View>
      <View style={styles.overlay} />
      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        renderItem={({ item }) => (
          <View style={styles.item}>
            <ImageBackground 
              source={item.image} 
              style={[styles.image, { borderWidth: 0.7, borderColor: 'white',borderRadius:24}]} // Add border styles here
              borderRadius={20}
            />
          </View>
        )}
      />
    </View>
  );
};

export default App;

