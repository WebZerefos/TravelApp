import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 40,
    backgroundColor: 'rgba(255, 255, 255,0.8)',
    borderRadius: 15,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 48,
    padding: 10,
    margin: 24,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
  },
  back: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    marginRight: 20,
  },
});

export default styles;
