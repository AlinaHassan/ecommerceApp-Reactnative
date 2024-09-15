import React, { useEffect,useState } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, Button } from 'react-native';
import MainHeader from '../../Components/MainHeader';
import { useSelector } from 'react-redux';
import Colors from '../../Constants/Colors';
import MaIcon from '../../Components/MaIcon';

const ProfileScreen = props => {
  const allCategories = useSelector(state => state.product.allCategories);
  const [count,setCount] = useState("0")

  useEffect (() => {
    alert(count)
  }, [count])

//useEffect(<function>, <dependency>)
//The first argument is a function that holds the code whatever you want to execute at run time. The second argument is optional when you want to execute the hooks. If you do not pass anything to this argument, then your function will be called on mount and every update.
//useEffect() is a side effect. You can use useEffect for event-handler and change the state value when we want.

return (
    <View style={{ height: '100%', width: '100%', justifyContent: "center", alignItems: "center", backgro0undColor: 'white', marginTop: 40 }}>
      <MainHeader onCart={() => props.navigation.navigate('cartScreen')} />

      <View
        style={{
          height: '50%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* height: 270, width: 350 */}
        <ImageBackground
          style={{ height: "100%", width: "100%", resizeMode: 'crop', justifyContent: "center", alignItems: "center" }}
          source={require('../../Assets/Images/rawalLakeIslamabad2.jpg')}
        >
          <View style={{ height: 250, width: "90%" }}>
            <Text style={{ bottom: -205, fontSize: 22, color: "#c8cbcf", fontWeight: "900" }}>
              Alina Hassan
            </Text>
            <TouchableOpacity
              style={{
                height: 50,
                width: 50,
                backgroundColor: Colors.primary,
                bottom: -160,
                borderRadius: 50,
                right: -270,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaIcon iconName="pencil" color="white" />
            </TouchableOpacity>
          </View>

        </ImageBackground>

      </View>


      <View style={{ height: "50%", width: "85%", justifyContent: "center", marginTop: 25 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginBottom: 70

          }}

        >

          <Button
            title="click me"
            onPress={()=>{
                setCount(Number(count)+1)
            }}
            />
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>
            Mobile
          </Text>
          <Text style={{ color: "#a9a8a6", marginBottom: 18 }}>
            00101010103
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>
            Membership
          </Text>
          <Text style={{ color: "#a9a8a6", marginBottom: 18 }}>
            Gold
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>
            Address
          </Text>
          <Text style={{ color: "#a9a8a6", marginBottom: 18 }}>
            xyz
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>
            Mobile
          </Text>
          <Text style={{ color: "#a9a8a6", marginBottom: 18 }}>
            00101010103
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>
            Membership
          </Text>
          <Text style={{ color: "#a9a8a6", marginBottom: 18 }}>
            Gold
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>
            Address
          </Text>
          <Text style={{ color: "#a9a8a6", marginBottom: 18 }}>
            xyz
          </Text>
        </ScrollView>
      </View>
    </View >
  );
};
export default ProfileScreen;
