/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  View,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {memo} from 'react';
import MapView, {Marker} from 'react-native-maps';
import styles from './styles';
import InfoCard from '../../components/InfoCard';

const AttractionDetails = ({navigation, route}) => {
  const {item} = route?.params || {};
  const mainImage = item?.images.length ? item?.images[0] : null;
  const sliceImages = item?.images?.length ? item.images?.slice(0, 5) : {};
  const diffImages = item?.images?.length - sliceImages.length;

  const coords = {
    latitude: item?.coordinates?.lat,
    longitude: item?.coordinates?.lon,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  };

  const goBack = () => {
    navigation.goBack();
  };

  const onGalleryNavigate = () => {
    navigation.navigate('Gallery', {images: item?.images});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <ImageBackground
            style={styles.mainImage}
            borderRadius={20}
            source={{uri: mainImage}}>
            <View style={styles.header}>
              <Pressable hitSlop={8} onPress={goBack}>
                <Image
                  style={styles.icon}
                  source={require('../../assets/back.png')}
                />
              </Pressable>
              <Pressable>
                <Image
                  style={styles.icon}
                  source={require('../../assets/share.png')}
                />
              </Pressable>
            </View>
            <Pressable style={styles.footer} onPress={onGalleryNavigate}>
              {sliceImages.map((image, index) => (
                <View key={image}>
                  <Image style={styles.imageThumbnail} source={{uri: image}} />
                  {diffImages > 0 && index === sliceImages?.length - 1 ? (
                    <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                  ) : null}
                </View>
              ))}
            </Pressable>
          </ImageBackground>

          <View style={styles.headerContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item?.name}</Text>
              <Text style={styles.city}>{item?.city}</Text>
            </View>
            <Text style={styles.price}>{item?.entry_price}</Text>
          </View>

          <InfoCard
            icon={require('../../assets/location.png')}
            text={item.address}
          />

          <InfoCard
            icon={require('../../assets/schedule.png')}
            text={`OPEN 
${item.opening_time} - ${item.closing_time}`}
          />

          <MapView style={styles.map} initialRegion={coords}>
            <Marker coordinate={coords} title={item?.name} />
          </MapView>
        </View>
        <Text
          style={styles.mapText}
          onPress={() => navigation.navigate('Map', {item})}>
          Show full screen Map
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(AttractionDetails);
