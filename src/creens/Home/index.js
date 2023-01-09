/* eslint-disable react-native/no-inline-styles */
import {FlatList, SafeAreaView, View} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import Title from '../../components/Title';
import styles from './styles';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard';
import jsonData from '../../data/attractions.json';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Title text="Where do" style={{fontWeight: '300'}} />
            <Title text="You want to go?" />

            <Title text="Explore attractions" style={styles.subtitle} />

            <Categories
              style={styles.cat}
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
          </>
        }
        data={data}
        numColumns={2}
        keyExtractor={item => String(item?.id)}
        renderItem={({item, index}) => (
          <AttractionCard
            imageSrc={item.images?.length ? item.images[0] : null}
            title={'Entertainment in Paris'}
            subtitle={'Paris'}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default memo(Home);
