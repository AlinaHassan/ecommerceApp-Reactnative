import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaIcon from '../Components/MaIcon';

import HomeScreen from '../Screens/Product/HomeScreen';
import CartScreen from '../Screens/Cart/CartScreen';
import ProductScreen from '../Screens/Product/ProductScreen';
import SearchScreen from '../Screens/Product/SearchScreen';
import OrderScreen from '../Screens/Cart/OrderScreen';
import ProductDetailScreen from '../Screens/Product/ProductDetailScreen';
import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import LoginScreen from '../Screens/Auth/LoginScreen';
import SignUpScreen from '../Screens/Auth/SignUpScreen';
import Colors from '../Constants/Colors';

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

// const CartHomenavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       <Stack.Screen name="Cart Screen" component={CartScreen} />
//       <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
//     </Stack.Navigator>
//   );
// };

const AuthNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} />
      <Stack.Screen options={{ headerShown: false }} name="login" component={LoginScreen} />
      <Stack.Screen options={{ headerShown: false }} name="signup" component={SignUpScreen} />
      {/* <Stack.Screen options={{ headerShown: false }} name="OrderScreen" component={OrderScreen} /> */}
    </Stack.Navigator>
  )
}



const Productnavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Product Screen" component={ProductScreen} />
      <Stack.Screen name="Cart Screen" component={CartScreen} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};
const Homenavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home Screen" component={HomeScreen} />
      <Stack.Screen name="Cart Screen" component={CartScreen} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};
const Cartnavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cart Screen" component={CartScreen} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};

const Searchnavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Search Screen" component={SearchScreen} />
      <Stack.Screen name="Cart Screen" component={CartScreen} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};

const Ordernavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Order Screen" component={OrderScreen} />
      <Stack.Screen name="Cart Screen" component={CartScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Bottom.Navigator tabBarOptions={{ showLabel: false }}>
      <Bottom.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                height: 30,
                width: 30,
              }}>
              <MaIcon
                iconName="home"
                size={focused ? 30 : 25}
                color={focused ? Colors.primary : 'lightgray'}
              />
            </View>
          ),
        }}
        name="homeScreen"
        component={Homenavigator}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                height: 30,
                width: 30,
              }}>
              <MaIcon
                iconName="view-list"
                size={focused ? 30 : 25}
                color={focused ? Colors.primary : 'lightgray'}
              />
            </View>
          ),
        }}
        name="productScreen"
        component={Productnavigator}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                height: 30,
                width: 30,
              }}>
              <MaIcon
                iconName="file-search"
                size={focused ? 30 : 25}
                color={focused ? Colors.primary : 'lightgray'}
              />
            </View>
          ),
        }}
        name="SearchScreen"
        component={Searchnavigator}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                height: 30,
                width: 30,
              }}>
              <MaIcon
                iconName="cart"
                size={focused ? 30 : 25}
                color={focused ? Colors.primary : 'lightgray'}
              />
            </View>
          ),
        }}
        name="cartScreen"
        component={Cartnavigator}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                height: 30,
                width: 30,
              }}>
              <MaIcon
                iconName="cart-check"
                size={focused ? 30 : 25}
                color={focused ? Colors.primary : 'lightgray'}
              />
            </View>
          ),
        }}
        name="OrderScreen"
        component={Ordernavigator}
      />
    </Bottom.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="authNavigator" component={AuthNavigator} />
        <Stack.Screen name="appNavigator" component={AppNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator;
