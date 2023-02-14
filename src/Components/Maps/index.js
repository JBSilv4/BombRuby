import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";

function ChatScreen() {
  const mapTest = [
    {
      name: "Linguagem de Programaçâo",
      childs: [
        {
          name: "Lang 1"
        },
        {
          name: "Lang 2"
        },
        {
          name: "Lang 3"
        },
      ]
    },
    {
      name: "Algoritimos",
      childs: [
        {
          name: "Lang 1"
        },
        {
          name: "Lang 2"
        },
        {
          name: "Lang 3"
        },
      ]
    },
  ];
  
  function RenderMap(map){
    return(
        <View>
          <Text>{map.name}</Text>
        </View>
      )
  }
  
  return (
    <View>
      {
        mapTest.filter(maps => RenderMap(maps))
      }
    </View>
  );
}

export default ChatScreen;
