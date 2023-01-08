/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, {memo} from 'react';
import Title from '../../components/Title';
import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <Title text="Where do" style={{fontWeight: '300'}} />
      <Title text="You want to go?" />

      <Title text="Explore attractions" style={styles.subtitle} />
    </View>
  );
};

export default memo(Home);
