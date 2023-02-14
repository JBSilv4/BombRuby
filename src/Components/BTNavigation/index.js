import React, { useState } from 'react';
import { View, Text } from 'react-native';

export function CreateButtonNavigation(){
  function Navigation({ children, inicialPage }){
    try {
      const [iPage, setIPage] = useState(inicialPage);
      const [pages, setPages] = useState([]);
      
      /*return (
          <>
            <Component/>
          </>
        )*/
      
    } catch(err) {
      console.log(err)
    }
  }
  
  function Screen(){
    
  }
  
  return{
    Navigation,
    Screen
  }
}