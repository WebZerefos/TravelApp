/* eslint-disable react/jsx-no-undef */
import {Text, View, Image} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';

const InfoCard = ({icon, text}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={icon} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default memo(InfoCard);
