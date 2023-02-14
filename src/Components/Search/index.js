import React, { useState, useRef } from 'react';
import { View, Text, PanResponder, Animated, Dimensions, TouchableOpacity } from 'react-native';
import styles from './styles';


export default function Search(){
  const [pan] = useState(new Animated.Value(0));
  const [showNewScreen, setShowNewScreen] = useState(false);
  const screenHeight = 500
  
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return gestureState.dy > 0;
      },
      onPanResponderMove: Animated.event([null, { dy: pan }], {useNativeDriver: false}),
      onPanResponderRelease: () => {
        if (pan._value > screenHeight * 0.5) {
          Animated.timing(pan, {
            toValue: 1000,
            useNativeDriver: true,
          }).start();
        } else {
          Animated.timing(pan, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;
  
  function mostrar(){
    Animated.timing(pan, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }
  global.mostrar = mostrar();
  
  return(
      <>
        <TouchableOpacity>
          <Text>Teste</Text>
        </TouchableOpacity>
        <Animated.View {...panResponder.panHandlers} style={[styles.contentBottom, {
          transform: [{ translateY: pan }],
        }]}>
          <View style={styles.barrs}/>
          <View style={styles.bottomView}>
            <TouchableOpacity>
              <Text style={{color: '#fff'}}>Tests</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </>
    )
}

export function ViewBox(){
  global.g
}