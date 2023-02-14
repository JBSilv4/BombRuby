import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#343434",
    height: '100%',
    width: '100%'
  },
  cardBox: {
    height: 230,
    width: 320,
    backgroundColor: '#181818',
    borderRadius: 15,
  },
  cardHeader: {
    height: 100,
    marginBottom: 10,
    flexDirection: 'row'
  },
  cardIcon: {
    backgroundColor: '#343434',
    height: 100,
    width: 100,
    borderBottomRightRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 85,
    width: 85
  },
  cardComponents: {
    height: 100,
    width: 220,
    paddingTop: 10,
    paddingLeft: 10,
  },
  cardTitle: {
    color: '#ececec',
    fontWeight: 'bold',
    fontSize: 18
  },
  cardInfos: {
    height: 60,
    width: 210,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  cardNivel: {
    backgroundColor: "#252525",
    padding: 5,
    borderRadius: 5,
    marginRight: 5
  },
  cardNivelText: {
    color: '#c1c1c1',
    fontWeight: 'bold'
  },
  cardSobre: {
    backgroundColor: '#222222',
    height: 110,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 10,
  },
  cardSobreText: {
    color: "#b0b0b0"
  },
  cardProgress: {
    height: 3,
    width: 150,
    backgroundColor: '#961eff',
    borderRadius: 10,
    position: 'absolute',
    left: 100
  }
});

export default styles