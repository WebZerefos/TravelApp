import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  categoryItem: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.5)',

    paddingVertical: 2,
  },
  selectedItem: {
    color: '#000',
    fontWeight: '500',
  },
  itemContainer: {
    marginRight: 17,
    marginVertical: 16,
  },
  selectedItemContainer: {
    borderBottomColor: '#4681A3',
    borderBottomWidth: 1,
  },
});

export default styles;
