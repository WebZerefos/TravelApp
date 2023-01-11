/* eslint-disable react-native/no-inline-styles */
import {Image, Text, View} from 'react-native';
import React, {memo} from 'react';
import MapView, {Marker} from 'react-native-maps';
import styles from './styles';

const Map = ({route, navigation}) => {
  const {item} = route?.params || {};
  const coords = {
    latitude: item?.coordinates?.lat,
    longitude: item?.coordinates?.lon,
    latitudeDelta: 0.09,
    longitudeDelta: 0.09,
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={coords}>
        <Marker coordinate={coords} title={item?.name} />
      </MapView>
      <View style={styles.header}>
        <Image source={require('../../assets/back.png')} style={styles.back} />
        <Text style={styles.title} onPress={goBack}>
          {`${item?.name} - ${item?.city}`}
        </Text>
      </View>
    </View>
  );
};

export default memo(Map);
