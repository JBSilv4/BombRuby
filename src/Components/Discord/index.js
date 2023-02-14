import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconB from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import ServerList from './Components/ServerList';
import Notification, { onPressSpring } from '../Notification';
import BottomNavigation from '../BottomNavigation';
import api from '../../Api';

export default function ScreenMaps(){
  const servers = [
    {
      name: "zLandia",
      id: "352200",
      icon: "https://media.discordapp.net/attachments/1068330718075297843/1070418693927993344/1674780267374.png",
    }
  ]
  
  function Teste(){
    console.log('teste')
    onPressSpring()
  }
  
  return(
      <View style={styles.container}>
        <View style={styles.serverList}>
          <Pressable style={styles.msgButton} onPress={() => Teste()}><Icon name="message" size={25} color={styles.colorIcons.message} /></Pressable>
          
          <View style={styles.linha}/>
          
          <FlatList
            data={servers}
            renderItem={({ item }) => <ServerList item={item}/>}
            keyExtractor={item => item.id}
          />
          
          <Pressable style={styles.bottomButton} onPress={() => Teste()}><IconB name="add" size={30} color={styles.colorIcons.bottom} /></Pressable>
          <Pressable style={styles.bottomButton} onPress={() => Teste()}><Icon name="transit-connection-variant" size={25} color={styles.colorIcons.bottom} /></Pressable>
        </View>
        <View style={styles.serverInfo}></View>
        <View style={{
          position: 'absolute',
          bottom: 0,
          marginLeft: 7
        }}>
        </View>
        
        <Notification styleFunction="Correct"/>
      </View>
    )
}