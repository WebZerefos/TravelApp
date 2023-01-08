import {View} from 'react-native';
import React, {memo} from 'react';
import Title from '../../components/Title';

const Home = () => {
  return (
    <View>
      <Title text="My first component" />
    </View>
  );
};

export default memo(Home);
