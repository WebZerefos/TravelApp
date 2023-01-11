/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';

const Gallery = ({route, navigation}) => {
  const {images} = route?.params || {};

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          style={{marginBottom: 15, paddingHorizontal: 15}}
          data={images}
          renderItem={({item}) => (
            <Image style={styles.image} source={{uri: item}} />
          )}
        />

        <TouchableOpacity style={styles.backContainer} onPress={goBack}>
          <Image
            style={styles.icon}
            source={require('../../assets/back.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default memo(Gallery);
