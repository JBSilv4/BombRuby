import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    paddingTop: 30
  },
  
  //Normal
  notiBox: {
    width: 270,
    height: 130,
    backgroundColor: '#232323',
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  notiTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 18
  },
  barra: {
    height: 2,
    backgroundColor: "#5f5f5f",
    marginTop: 5,
    marginBottom: 5
  },
  component: {
    color: '#d3d3d3',
    fontStyle: 'italic'
  },
  //Fim Normal
  
  //Correct
  boxCorrect: {
    width: 300,
    height: 100,
    backgroundColor: '#232323',
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    alignItems: 'center',
    flexDirection: 'row'
  },
  correctBarra: {
    width: 2,
    height: '100%',
    backgroundColor: "#5f5f5f",
    marginLeft: 10,
    marginRight: 5
  }
  //Fim Correct
});

export default styles;