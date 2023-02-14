import React from 'react';
import RoadMaps from './RoadMaps';
import RootMaps from './Jogo';
import ScreenMaps from './Discord';
import BottomNavigation from './BottomNavigation';
import { CreateButtonNavigation } from './BTNavigation';
import BottomNavigati from './ScreenMaps';

export default function ComponentsLoad(){
  
  const Bottom = CreateButtonNavigation();
  
  return (
    <>
      <RootMaps/>
    </>
    )
}