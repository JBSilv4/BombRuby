import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconF from 'react-native-vector-icons/Feather';
import { storeData, getData } from '../../LocalStorage';
import api from '../../Api';

export default function RootMaps(){
  const [select, setSelect] = useState('');
  const [topics, setTopics] = useState('');
  
  useEffect(() => {
    api.post('/Config/RoadMaps/reactNative').then(response => setTopics(response.data));
  }, [select]);
  
  let show = false
    
  const TopicsList = ({ item }) => {
    return(
        <View>
          <TouchableOpacity style={[styles.topics, {backgroundColor: show == true ? "#1a0040" : '#730fff'}]} disabled={show == true ? true : false} onPress={() => {setSelect(item.name)}}>
            <Text style={[styles.topicsTitle, show == true ? {color: "#616161", textDecorationLine: 'line-through'} : {color: "#fff"}]}>
              <IconF name="hash" size={15} color="#33007b" />
              {' ' + item.name}
            </Text>
            <View style={{display: show == true ? 'flex' : 'none', position: 'absolute', right: 10}}>
              <IconF name="check-circle" size={20} color="#74ff69" />
            </View>
          </TouchableOpacity>
          <View style={styles.topicContent}>
            {
                item.childs.map(child => <TouchableOpacity key={child.name} style={[styles.buttonContent, {display: select == item.name ? 'flex' : 'none'}]}>
                  <Text style={styles.contentText}><IconF name="corner-down-right" size={15} color="#878787" />{' ' + child.name}</Text>
                </TouchableOpacity>)
            }
          </View>
        </View>
      )
  }
  
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>React Native User</Text>
        <Text style={styles.headerComment}>Mapa para aprender a usar React Native e seus Componentes.</Text>
        <TouchableOpacity style={styles.backButton}>
          <IconF name="chevron-left" size={20} color="#33007b" /><Text style={{fontWeight: 'bold', color: '#fff'}}>Voltar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.boxInput}>
          <TextInput
          style={styles.input}
          placeholder="Pesquisar Topico"
          placeholderTextColor="#878787"
          cursorColor='#c7c7c7'
          />
          <Icon name="search" size={25} color="#878787" />
        </View>
        <View style={styles.barList}/>
        <FlatList
        data={topics}
        renderItem={({ item }) => <TopicsList item={item}/>}
        keyExtractor={item => item.name}
        />
      </View>
    </View>
    )
}