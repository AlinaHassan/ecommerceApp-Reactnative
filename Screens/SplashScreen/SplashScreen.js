import React, { useState,useRef, useEffect } from 'react';
import { Animated, View, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Colors from '../../Constants/Colors';
const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 5000,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

const SplashScreen = ({ navigation }) => {
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 6000);//9000

  if (!timePassed) {
    return (
      <View style={styles.container}>
        <FadeInView>
          <Image style={{ height: 150, width: 200, resizeMode: 'contain' }} source={require('../../Assets/Images/Logo.png')} />
        </FadeInView>
      </View>



    );
  }
  else
    navigation.replace('login');
  return null;
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgWhite,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 8,
  },

});

export default SplashScreen
