import React, { useState } from 'react';
import { View, Text, Image, Animated, Pressable, TouchableOpacity } from 'react-native';
import IconF from 'react-native-vector-icons/Feather';
import styles from './styles';

export default function BottomNavigation(){
  const [componentMove] = useState(new Animated.Value(0));
  const [componentWidth] = useState(new Animated.Value(-10));
  const [move, setMove] = useState(true)
  
  Animated.timing(componentMove, {
    toValue: move ? -10 : 0,
    duration: 1000,
    useNativeDriver: false,
  }).start();
  Animated.timing(componentWidth, {
    toValue: move ? 0 : 100,
    duration: 500,
    useNativeDriver: false,
  }).start();
  
  return(
    <View style={styles.container}>
      <View style={styles.bottomBox}>
        <Pressable style={styles.inicial} onPress={() => setMove(!move)}>
          <Image source={{uri: 'https://media.discordapp.net/attachments/981723515948515448/1068640812570783915/Codigo._uma_moca_de_cabelos_azuis_72a8fbe1-c2f4-45b6-b18e-639590bb3a58.png'}} style={styles.image}/>
          <View style={{
            position: 'absolute',
            height: 15,
            width: 15,
            borderRadius: 10,
            backgroundColor: '#00c51c',
            right: 0,
            bottom: 0,
            borderWidth: 3,
            borderColor: "#1c1f20",
          }}/>
        </Pressable>
        <Animated.View style={[styles.component, {
          width: componentWidth.interpolate({
            inputRange: [0, 100],
            outputRange: ['0%', '85%'],
          }),
          transform: [{translateX: componentMove}]
        }]}>
          <TouchableOpacity style={styles.button}><IconF name="users" size={25} color="#a7a7a7" /></TouchableOpacity>
          <TouchableOpacity style={styles.button}><IconF name="search" size={25} color="#a7a7a7" /></TouchableOpacity>
          <TouchableOpacity style={styles.button}><IconF name="coffee" size={25} color="#a7a7a7" /></TouchableOpacity>
          <TouchableOpacity style={styles.button}><IconF name="settings" size={25} color="#a7a7a7" /></TouchableOpacity>
          
        </Animated.View>
      </View>
    </View>
    )
}