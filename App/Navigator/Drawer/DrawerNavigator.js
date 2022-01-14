import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerNavigatorOptions from "./DrawerNavigatorOptions";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <DrawerNavigatorOptions />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
