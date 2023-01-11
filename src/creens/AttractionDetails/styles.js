import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    margin: 10,
  },
  mainImage: {
    width: '100%',
    height: height / 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 36,
    height: 36,
    margin: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(256, 256, 256,0.35)',
    margin: 16,
    paddingHorizontal: 16,
  },
  imageThumbnail: {
    width: 48,
    height: 48,
    marginHorizontal: 4,
    marginVertical: 8,
    borderRadius: 10,
  },
  moreImages: {
    position: 'absolute',
    color: '#fff',
    fontWeight: '700',
    top: 15,
    left: 8,
    fontSize: 30,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 40,
    flexWrap: 'wrap',
  },
  textContainer: {},
  title: {
    fontSize: 30,
    color: '#000',
    fontWeight: '700',
  },
  city: {
    fontSize: 20,
    color: '#000',
    marginTop: 8,
    fontWeight: '500',
  },
  price: {
    fontSize: 30,
    color: '#000',
    fontWeight: '700',
  },
  map: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  mapText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#ee5253',
    textAlign: 'center',
    padding: 16,
    marginBottom: 50,
  },
});

export default styles;
