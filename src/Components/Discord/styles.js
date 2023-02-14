import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#1c1f20',
    flexDirection: 'row',
    paddingTop: 30
  },
  serverList: {
    height: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5
  },
  serverInfo: {
    height: '100%',
    width: '70%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#2b2e33',
  },
  msgButton: {
    height: 50,
    width: 50,
    backgroundColor: '#282c2f',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  linha: {
    width: '100%',
    height: 1,
    backgroundColor: '#282c2f',
    marginTop: 7,
    marginBottom: 7
  },
  bottomButton: {
    height: 50,
    width: 50,
    backgroundColor: '#282c2f',
    borderRadius: 50,
    marginBottom: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  colorIcons: {
    message: "#9ba6ac",
    bottom: "#008e44"
  }
});

export default styles