import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import DrawerNavigatorOptions /* DrawerContent */ from './DrawerNavigatorOptions';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator /* drawerContent={DrawerContent} */>
      <DrawerNavigatorOptions />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
