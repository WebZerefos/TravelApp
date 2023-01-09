import {Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const Categories = ({categories, selectedCategory, onCategoryPress}) => {
  return (
    <FlatList
      style={{borderWidth: 1, marginRight: -32}}
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

export default Categories;
