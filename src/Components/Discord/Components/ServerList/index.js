import React, { useState } from 'react';
import { View, Image, Pressable } from 'react-native';
import styles from './styles';

export default function ServerList({ item }){
  function test(){
    console.log(item.name)
  }
  
  return (
      <Pressable style={styles.iconContainer}
        onPress={() => test()}
        onLongPress={() => {}}>
        <Image style={styles.icon} source={{uri: item.icon}}/>
      </Pressable>
    )
}