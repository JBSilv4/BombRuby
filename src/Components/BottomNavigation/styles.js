import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  bottomBox: {
    height: 60,
    //width: 400,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inicial: {
    height: 55,
    width: 55,
    backgroundColor: '#1c1c1c',
    borderRadius: 100,
  },
  component: {
    marginLeft: 10,
    height: 55,
    width: 330,
    backgroundColor: '#131313',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginLeft: 25,
    marginRight: 25,
  },
  image: {
    height: 55,
    width: 55,
    borderRadius: 100
  }
});

export default styles;