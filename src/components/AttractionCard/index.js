import {View, Text, Image} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';

const AttractionCard = ({imageSrc, title, subtitle}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: imageSrc}} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={require('../../assets/location_mini.png')}
        />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default memo(AttractionCard);
// location_mini.png
