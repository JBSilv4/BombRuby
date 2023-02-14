import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function RoadMaps(){
  return(
    <View style={styles.container}>
      <View style={styles.cardBox}>
        <View style={styles.cardHeader}>
          <View style={styles.cardIcon}>
            <Image source={require('./iconReactNative.png')} style={styles.icon}/>
          </View>
          <View style={styles.cardComponents}>
            <Text style={styles.cardTitle}>React Native User</Text>
            <View style={styles.cardInfos}>
              <View style={styles.cardNivel}>
                <Text style={styles.cardNivelText}><Icon name="thermometer-half" size={15} color="#961eff" /> Intermediario</Text>
              </View>
              <View style={styles.cardNivel}>
                <Text style={styles.cardNivelText}><Icon name="star" size={15} color="#fffd55" /> 5.0</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardSobre}>
          <Text style={styles.cardSobreText}>
            Roadmap para você que quer virar um desenvolvedor React Native.
          </Text>
        </View>
        <View style={styles.cardProgress}/>
      </View>
    </View>
    )
}