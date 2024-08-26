import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Register from './components/Register';
import FlashMessage from 'react-native-flash-message';
import Perfil from './components/Perfil';
import UserList from './components/UserList';

const Stack = createStackNavigator();

const headerLeft = (navigation) => (
  <TouchableOpacity onPress={() => navigation.navigate('Home')}>
    <Image
      source={require('./assets/home.png')}  
      style={{ width: 40, height: 40, marginLeft: 10 }}
    />
  </TouchableOpacity>
);

const screenOptions = {
  headerTitle: '',  
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={screenOptions}
        />
      
       
        <Stack.Screen
          name="UserList"
          component={UserList}
          options={({ navigation }) => ({
            ...screenOptions,
            headerLeft: () => headerLeft(navigation),
          })}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={screenOptions}
        />
       
        <Stack.Screen 
          name="Perfil"  
          component={Perfil}
          options={({ navigation }) => ({
            ...screenOptions,
            headerLeft: () => headerLeft(navigation),
          })}
        />
 
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
