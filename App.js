import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppName, {
  StackScreen,
  TabScreen,
} from './src/constants/AppConstant';
import BottomBar from './src/components/BottomBar';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomBar {...props} />}>
      {Object.keys(TabScreen).map((screenKey) => {
        return (
          <Tab.Screen
            key={screenKey}
            name={screenKey}
            component={TabScreen[screenKey]}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  headerMode="none">
        {Object.keys(StackScreen).map((screenKey) => {
          return (
            <Stack.Screen
              key={screenKey}
              name={screenKey}
              component={StackScreen[screenKey]}
            />
          );
        })}

        <Stack.Screen name={AppName.RootApp} component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
