import React, { useState } from 'react';
import { View, Pressable, Text, Animated } from 'react-native';
import IconF from 'react-native-vector-icons/Feather';
import styles from './styles';

export default function Notification({ style, styleFunction, release, TextInfo }){
  const [yellowSquareAnim] = useState(new Animated.Value(release.fim));
  const [progress, setProgress] = useState(new Animated.Value(0));
  
  const onPressSpring = () => {
    Animated.timing(progress, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    Animated.spring(yellowSquareAnim, {toValue: release.inicio, speed: 10, bounciness: 20, useNativeDriver: true}).start()
    
    setTimeout(() => {
      Animated.spring(yellowSquareAnim, {toValue: release.fim, speed: 10, bounciness: 20, useNativeDriver: true}).start()
      Animated.timing(progress, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
      console.log('voltar')
    }, 5000)
  }
  global.onPressSpring = onPressSpring
  
  let stylesConfig = style
  if(!stylesConfig){
    stylesConfig = styles.notiBox
  }
  
  function ProgressBar({color}){
    return(
      <Animated.View 
        style={{
          width: progress.interpolate({
            inputRange: [0, 100],
            outputRange: ['0%', '100%'],
          }),
          height: 2,
          position: 'absolute',
          bottom: 0,
          backgroundColor: color,
          marginLeft: 10,
          borderRadius: 10
        }}
      ></Animated.View>
    )
  }
  
  function ModoNoti(){
    if(!styleFunction){
      return(
        <Pressable style={stylesConfig}>
          <Text style={styles.notiTitle}><IconF name="hash" size={18} color="#a7a7a7" /> Seja Bem Vindo!</Text>
          <View style={styles.barra}/>
          <Text style={styles.component}>
            Olá, seja bem vindo!. Esse aqui é um teste de Notificação.
          </Text>
          <ProgressBar color="#8300dc"/>
        </Pressable>
        )
    }
    if(styleFunction == "Correct"){
      return(
          <Pressable style={styles.boxCorrect}>
            <IconF name="check-square" size={40} color="#7fff61"/>
            <View style={styles.correctBarra}/>
            <View>
             
            </View>
            <ProgressBar color="#7fff61"/>
          </Pressable>
        )
    }
    if(styleFunction == "Error"){
      return(
          <Pressable style={styles.boxCorrect}>
            <IconF name="x-square" size={40} color="#ff6464"/>
            <View style={styles.correctBarra}/>
            <View>
              <TextInfo/>
            </View>
            <ProgressBar color="#ff6464"/>
          </Pressable>
        )
    }
    if(styleFunction == "Aviso"){}
    
  }
  
  return (
      <Animated.View style={[styles.container, {
        transform: [{translateY: yellowSquareAnim}]
      }]}>
        <ModoNoti/>
      </Animated.View>
    )
}

export function onPressSpring(){
  global.onPressSpring()
}