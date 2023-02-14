import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, Pressable, Image } from 'react-native';
import styles from './styles';
import Notification, { onPressSpring } from '../Notification'; 

export default function Jogo(){
  const [cuboGame, setCuboGame] = useState([]);
  const [aposta, setAposta] = useState(false);
  const [show, setShow] = useState(false);
  const [over, setOver] = useState(false);
  const [game, setGame] = useState(false);
  const viewSkin = ["Diamante", "Bomba"];
  const [value, setValue] = useState("");
  const [cube, setCube] = useState("");
  const [select, setSelect] = useState([]);
  const [moneyUser, setMoneyUser] = useState(10000);
  const [valueApost, setValueApost] = useState(0);
  
  //banco
  const [clickValue, setClickValue] = useState(0);
  
  
  const dinamiteNumber = parseInt(value);
  
  const clear = () => {
    setCuboGame([]);
    setSelect([]);
    setGame(false);
    setClickValue(0);
    console.log('Limpou');
  }
  
  const embaralhar = () => {
    if(cuboGame.length == 25) return;
    let aleatoryNumber = [];
    
    function loopFora(){
      for(let i = 0; i < 25; i++){
        if(aleatoryNumber.includes(i)){
          setCuboGame(oldArray => [...oldArray, {
            cubo: i,
            value: viewSkin[1]
          }]);
        } else {
          setCuboGame(oldArray => [...oldArray, {
            cubo: i,
            value: viewSkin[0]
          }]);
        }
      }
    }
    
    let i = 0;
    while(i < 1000){
      if(aleatoryNumber.length < dinamiteNumber){
        let random = Math.floor(Math.random() * 25);
        if(!aleatoryNumber.includes(random)){
          aleatoryNumber.push(random);
        }
      }
      if(aleatoryNumber.length == dinamiteNumber){
        return loopFora();
      }
      i++
    }
    console.log('Embaralhou')
  }
  
  function CubeRender({item}){
    function teste(i){
      setSelect([...select, item.cubo])
      if(i.value == "Bomba"){
        setGame(true);
        setAposta(false)
        setClickValue(0)
        setMoneyUser(moneyUser - parseInt(valueApost))
      } else {
        //numberValue
        if(aposta == false) return;
        let value = cuboGame.length - dinamiteNumber
        let divid = (2 * parseInt(valueApost)) / value
        let test = clickValue + divid
        test = Math.trunc(test)
        setClickValue(test)
        console.log(test)
        
        //setMoneyUser(...moneyUser + parseInt(valueApost))
      }
        
      
    }
     return(
        <TouchableOpacity style={styles.cube} onPress={ () => {teste(item)}}>
          {
            game == false ?
            select.includes(item.cubo) ? 
              <Image source={item.value == "Bomba" ? require('./Icon/bombUse.png') : require('./Icon/rubyUse.png')} style={{height: 50, width: 50}}/>
            : <View/>
            : <Image source={item.value == "Bomba" ? require('./Icon/bombUse.png') : require('./Icon/rubyUse.png')} style={{height: 50, width: 50}}/>
 
          }
        </TouchableOpacity>
      )
  }
  
  const Apostas = () => {
    setShow(true)
  }
  
  const valueAposta = (text) => {
    if(text >= "25"){
      onPressSpring()
    }
    setValue(text)
  }
  
  
  
  function text(){
    return(
      <Text style={{fontWeight: 'bold', fontStyle: 'italic', color: '#d7d7d7', fontSize: 16}}>
        Você só pode adicionar 24 bombas!
      </Text>
      )
  }
  
  const onPosta = () => {
    setShow(false);
    setAposta(true);
    clear();
  }
  
  return(
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
          <Image source={require('./Icon/bombRuby.png')} style={{height: 75 , width: 150,}}/>
        </View>
        <View style={{position: 'absolute', padding: 20, paddingTop: 40, width: '100%'}}>
          <View style={styles.result}>
            <Image source={require('./Icon/real.png')} style={{height: 20, width: 20, tintColor: '#b1b1b1', marginRight: 2}}/>
            <Text style={{color: '#f6f6f6', fontWeight: 'bold', fontSize: 18}}>{valueApost}</Text>
          </View>
          <View style={styles.result}>
            <Image source={require('./Icon/bomb.png')} style={{height: 20, width: 20, tintColor: '#b1b1b1', marginRight: 2, marginLeft: 2}}/>
            <Text style={{color: '#f6f6f6', fontWeight: 'bold', fontSize: 18}}>{!dinamiteNumber ? 0 : dinamiteNumber}</Text>
          </View>
          
          <View style={[styles.result, {position: 'relative', left: 310, top: -76}]}>
            <Image source={require('./Icon/trophy.png')} style={{height: 20, width: 20, tintColor: '#b1b1b1', marginRight: 2, marginLeft: 2}}/>
            <Text style={{color: '#f6f6f6', fontWeight: 'bold', fontSize: 18}}>{String(clickValue)}</Text>
          </View>
          <View style={[styles.result, {position: 'relative', left: 310, top: -76}]}>
            <Image source={require('./Icon/money.png')} style={{height: 20, width: 20, tintColor: '#b1b1b1', marginRight: 2, marginLeft: 2}}/>
            <Text style={{color: '#f6f6f6', fontWeight: 'bold', fontSize: 18}}>{String(moneyUser)}</Text>
          </View>
        </View>
      </View>
      <View style={styles.cubeContainer}>
      { cuboGame.length == 0 ? 
        over == false ? <View/> :
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('./Icon/over.png')} style={{height: 200, width: 200, tintColor: '#911dff'}}/>
        </View>
       :
        <FlatList
        data={cuboGame}
        numColumns={5}
        renderItem={({item}) => <CubeRender item={item}/>}
        keyExtractor={item => item.cubo}
        contentContainerStyle={styles.boxCubes}
        />
       }
      </View>
      <View style={styles.bottomView}>
        <View style={styles.box}>
          <TouchableOpacity style={styles.buttonAposta} onPress={() => Apostas()}>
            <Text style={{color: '#d2d2d2', fontStyle: 'italic', fontWeight: 'bold', fontSize: 18}}>Apostar</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.box}>
          <TouchableOpacity style={[styles.goButton, {backgroundColor: aposta == false ? '#00580e' : styles.goButton.backgroundColor}]} onPress={() => {embaralhar();}} disabled={aposta == false ? true : false}>
            <Text style={styles.text}>Começar</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.box}>
          <TouchableOpacity style={styles.buttonAposta} onPress={() => {if(clickValue == 0)return; setMoneyUser(moneyUser + parseInt(clickValue)); clear()}}>
            <Text style={{color: '#d2d2d2', fontStyle: 'italic', fontWeight: 'bold', fontSize: 18}}>Coletar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Pressable onPress={() => setShow(false)} style={[styles.screenAposta, {display: show ? 'flex' : 'none'}]}>
        <View style={styles.boxAposta}>
          <Text style={styles.title}>Faça sua Aposta</Text>
          <View style={{marginTop: 30}}>
            
            <Text style={styles.textInput}>Numero de Bombas</Text>
            <View style={styles.inputBox}>
              <Image source={require('./Icon/bomb.png')} style={{height: 20, width: 20, tintColor: '#b1b1b1', marginRight: 2, marginLeft: 2}}/>
              <TextInput
              cursorColor="#7107ff"
              style={styles.input}
              keyboardType='numeric'
              value={value}
              onChangeText={text => valueAposta(text)}
              />
            </View>
            <Text style={styles.textInput}>Valor da Aposta</Text>
            <View style={styles.inputBox}>
              <Image source={require('./Icon/real.png')} style={{height: 20, width: 20, tintColor: '#b1b1b1', marginRight: 2}}/>
              <TextInput
              cursorColor="#7107ff"
              style={styles.input}
              value={valueApost}
              keyboardType='numeric'
              onChangeText={text => setValueApost(text)}
              />
            </View>
            <View style={styles.boxButton}>
              <TouchableOpacity style={[styles.buttons, {backgroundColor: '#8300f5'}]} onPress={() => onPosta()}>
                <Text style={styles.textButton}>Apostar</Text>
              </TouchableOpacity>
              <View style={{marginLeft: 5, marginRight: 5}}/>
              <TouchableOpacity style={[styles.buttons, {backgroundColor: '#ff4f4f'}]} onPress={() => setShow(false)}>
                <Text style={styles.textButton}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Pressable>
      <Notification styleFunction="Error" release={{inicio: -195, fim: -600}} TextInfo={text}/>
    </View>
  )
}