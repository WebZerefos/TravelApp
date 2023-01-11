import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 40,
    backgroundColor: 'white',
    borderRadius: 15,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 48,
    padding: 16,
    margin: 24,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 20,
  },
  back: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
});

export default styles;
