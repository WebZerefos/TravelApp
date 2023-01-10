import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    padding: 4,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 15,
    marginTop: 15,
  },
  image: {
    width: (width - 96) / 2,
    height: 120,
    borderRadius: 15,
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
    marginLeft: 6,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.5)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 12,
    marginLeft: 6,
  },
  icon: {
    marginRight: 4,
    width: 10,
    height: 10,
  },
});

export default styles;
