import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (name, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(name, jsonValue)
    console.log('salvo')
  } catch (e) {
    // saving error
  }
}
export { storeData }


const getData = async (value) => {
  try {
    const jsonValue = await AsyncStorage.getItem(value)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.log(e)
  }
}
export { getData }