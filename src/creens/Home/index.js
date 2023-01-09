/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, {memo, useState} from 'react';
import Title from '../../components/Title';
import styles from './styles';
import Categories from '../../components/Categories';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  return (
    <View style={styles.container}>
      <Title text="Where do" style={{fontWeight: '300'}} />
      <Title text="You want to go?" />

      <Title text="Explore attractions" style={styles.subtitle} />

      <Categories
        selectedCategory={selectedCategory}
        categories={[
          'All',
          'Popular',
          'Historical',
          'Trending',
          'Random',
          'One More Cat',
          'And So On',
        ]}
        onCategoryPress={setSelectedCategory}
      />
    </View>
  );
};

export default memo(Home);
