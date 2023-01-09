import {Text, FlatList, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';

const Categories = ({categories, selectedCategory, onCategoryPress}) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={({item}) => {
        const selected = selectedCategory === item;
        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(item)}
            style={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : {},
            ]}>
            <Text
              style={[
                styles.categoryItem,
                selected ? styles.selectedItem : {},
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default memo(Categories);
