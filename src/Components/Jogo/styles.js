import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#161616',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
  boxCubes: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cube: {
    height: 78,
    width: 78,
    backgroundColor: '#424242',
    margin: 4,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cubeContainer: {
    width: width
  },
  bottomView: {
    width: width,
    backgroundColor: '#0d0d0d',
    height: 140,
    position: 'absolute',
    bottom: 0,
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  goButton: {
    height: 50,
    width: 100,
    backgroundColor: '#00c230',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    position: 'relative',
    top: -15
  },
  box: {
    margin: 15
  },
  buttonAposta: {
    height: 50,
    width: 100,
    backgroundColor: '#7000da',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  screenAposta: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    height: height,
    width: width,
    backgroundColor: "#12121294",
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxAposta: {
    height: 400,
    width: 350,
    backgroundColor: '#232323',
    borderRadius: 10,
    alignItems: 'center',
    padding: 7
  },
  title: {
    fontSize: 25,
    color: '#d7d7d7',
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  inputBox: {
    width: 250,
    height: 45,
    marginBottom: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#8204ff",
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 2
  },
  textInput: {
    color: '#be7dff',
    fontStyle: 'italic',
    marginLeft: 10,
    backgroundColor: '#232323',
  },
  input: {
    height: 40,
    paddingLeft: 7,
    color: '#fff',
    width: '90%',
    fontWeight: 'bold'
  },
  boxButton: {
    height: 130,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  buttons: {
    width: 120,
    height: 45,
    marginTop: 20,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    color: '#eaeaea',
    fontWeight: 'bold',
    fontSize: 18,
    fontStyle: 'italic'
  },
  headerView: {
    height: 170,
    width: width,
    backgroundColor: '#0d0d0d',
    position: 'absolute',
    top: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 5
  },
  result: {
    height: 30,
    width: 90,
    borderWidth: 2,
    borderColor: "#ff6868",
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row'
  }
});

export default styles