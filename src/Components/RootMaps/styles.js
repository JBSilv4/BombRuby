import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181818',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    paddingTop: 35,
    paddingLeft: 10,
    paddingRight: 10
  },
  header: {
    height: 100,
    width: '100%'
  },
  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10
  },
  headerComment: {
    color: '#bababa'
  },
  bottomView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 100,
    paddingTop: 15
  },
  boxInput: {
    width: 380,
    height: 45,
    backgroundColor: '#1d1d1d',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#272727",
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  input: {
    height: 45,
    width: 320,
    color: '#c5c5c5',
    marginRight: 5
  },
  barList: {
    marginTop: 15,
    marginBottom: 15,
    height: 3,
    width: '100%',
    backgroundColor: '#4a4a4a',
    borderRadius: 10
  },
  topics: {
    height: 40,
    width: 380,
    backgroundColor: '#730fff',
    alignItems: 'center',
    paddingLeft: 10,
    borderRadius: 10,
    flexDirection: 'row'
  },
  topicsTitle: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#fff',
    fontSize: 16
  },
  buttonContent: {
    height: 50,
    width: 365,
    backgroundColor: '#252525',
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 10,
    marginTop: 10
  },
  contentText: {
    fontWeight: 'bold',
    color: '#f0f0f0',
  },
  topicContent: {
    marginBottom: 15,
    alignItems: 'center'
  },
  backButton: {
    height: 20,
    width: 70,
    backgroundColor: '#730fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row'
  }
});

export default styles;