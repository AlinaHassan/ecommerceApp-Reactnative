import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, Button, FlatList, Image } from 'react-native';
// import MainHeader from '../../Components/MainHeader';
import { useSelector } from 'react-redux';
import Colors from '../../Constants/Colors';
import MaIcon from '../../Components/MaIcon';
import AsyncStorage from '@react-native-community/async-storage';

const OrderScreen = props => {
  const allCartItems = useSelector(state => state.product.myCart);
  const [newUser, setNewUser] = useState({ name: "", email: "", contact: "", shippingAddress: "" })


  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userdata')
      if (value !== null) {
        var obj = JSON.parse(value);

        setNewUser(await obj)
        console.log("userData", newUser);

      }
    } catch (e) {
      console.log("Something went wrong while reading userData", e);
    }
  }


  useEffect(() => {
    getData()
  }
    , [])

  const renderCartList = itemData => {

    return (
      <View
        style={{
          height: 30,
          width: '100%',
          marginVertical: 7,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>


        <View
          style={{
            height: '90%',
            width: '90%',
            justifyContent: 'center'
          }}>
          <Text>
            <Text style={{ fontSize: 13, fontWeight: '600', color: 'black' }}>{itemData.item.name} </Text>
            <Text style={{ fontSize: 13, fontWeight: 'bold', color: Colors.primary }}>Rs.{itemData.item.price} </Text>
            <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>
              {`QTY: ${itemData.item.quantity}`}
            </Text>
          </Text>
        </View>
      </View>
    );
  };

  const totalAmount = allCartItems.reduce((total, currentValue) => total = total + (Number(currentValue.price) * Number(currentValue.quantity)), 0);


  return (
    <View style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
      {/* <MainHeader onCart={() => props.navigation.navigate('cartScreen')} /> */}
      <View
      style={{
        height: 60,
        width: '100%',
        backgroundColor: Colors.headerColor,
        // borderBottomStartRadius: 20,
        // borderBottomEndRadius: 20,
        flexDirection: 'row',
      }}>
      <TouchableOpacity
       // onPress={props.navigation.navigate("login")}
        style={{
          height: '100%',
          width: '15%',

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* {props.back && <MaIcon iconName="keyboard-backspace" />} */}
        <MaIcon iconName="power" size={28} color={Colors.primary} />
      </TouchableOpacity>

      <View
        style={{
          height: '100%',
          width: '70%',

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{ height: 60, width: 130, resizeMode: 'contain' }}
          source={require('../../Assets/Images/Logo.png')}
        />
      </View>

      <TouchableOpacity
      onPress={props.onCart}
        style={{
          height: '100%',
          width: '15%',

          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <MaIcon iconName="cart" />
        <View
          style={{
            height: 15,
            width: 15,
            backgroundColor: Colors.primary,
            bottom: 10,
            borderRadius: 50,
            right: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 10,
              color: 'white',
            }}>
            {allCartItems.length}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
      <View
        style={{
          height: 200,
          width: '100%',
          justifyContent: 'center',
          padding: 0,
          marginTop: 10
        }}>
        <View style={{ marginLeft:10 }}>
          <Text style={{
            justifyContent: 'center', fontWeight: "bold", fontSize: 20, color: "black"
          }}>
            Customer Detail
          </Text>
          <Text style={{ color: "#a9a8a6", marginBottom: 18 }}>
            {newUser.name}
          </Text>
          <Text style={{ color: "#a9a8a6", marginBottom: 18 }}>
            {newUser.email}
          </Text>
          <Text style={{ color: "#a9a8a6", marginBottom: 18 }}>
            {newUser.contact}
          </Text>
          <Text style={{ color: "#a9a8a6", marginBottom: 18 }}>
            {newUser.shippingAddress}
          </Text>
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" ,marginLeft:10}}>
          Order Detail
        </Text>
      </View>
      <View style={{ height: 150, width: '100%', marginTop: 10 }}>
        <View
          style={{ flexDirection: "row" ,marginLeft:10}}>
          <View style={{ width: "50%" }}>
            <Text style={{marginBottom:12}}>
              Items in Cart:
            </Text>
            <View style={{
          borderColor: 'Lightgray',
          borderWidth: 1,}}>
            <FlatList
              showsVerticalScrollIndicator={true}
              keyExtractor={(item, index) => index.toString()}
              data={allCartItems}
              renderItem={renderCartList}
            />
            </View>
          </View>
          <View style={{ width: "50%" , marginLeft:10}}>
            <Text>
              Total Items in Cart:
            </Text>
            <Text>
              {allCartItems.length}
            </Text>
            <Text>
              totalAmount:
            </Text>
            <Text>
              {totalAmount}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ height: 50, width: "40%", marginTop:80, justifyContent:"center", marginLeft: 20 }}>
        <Button
          title="Confirm order"
          onPress={() => {
            alert("Order Placed Successfully")
          }}
        />
      </View>
    </View >
  );
};
export default OrderScreen;
