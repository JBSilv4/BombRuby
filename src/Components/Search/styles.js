import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#151515',
    alignItems: 'center'
  },
  contentBottom: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    paddingLeft: 6,
    paddingRight: 6,
  },
  bottomView: {
    width: '100%',
    height: 550,
    backgroundColor: '#272727',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  barrs: {
    height: 5,
    width: 110,
    backgroundColor: '#c8c8c8',
    marginBottom: 10,
    borderRadius: 10
  }
});

export default styles;