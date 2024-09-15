import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Image, TextInput, Button, TouchableOpacity, ScrollView, StyleSheet, ImageBackground } from "react-native"
import Colors from "../../Constants/Colors";
import MyInput from "../../Components/MyInput";
import AuthButton from "../../Components/AuthButton";
import { useDispatch } from "react-redux";
import SignUpAction from "../../Store/Action/SignUpAction";
// import AsyncStorage from '@react-native-community/async-storage';
// import AccessStore from '../../Components/asyncStorageHelper'
import AsyncStorage from '@react-native-community/async-storage';

const SignUpScreen = (props) => {
    const dispatch = useDispatch();

    const [newUser, setNewUser] = useState({ firstName: "", lastName: "", email: "", contact:"", shippingAddress:"", password: "" })

    const [confirmPassword, setconfirmPassword] = useState("");


    //https://blog.jscrambler.com/how-to-use-react-native-asyncstorage
    // const App = () => {
    //     const [input, setInput] = useState('');
    //     // ...
    //   };
      
    //   export default App;
    // useEffect(() => {
    //     readData();
    //   }, []);

    //   const clearStorage = async () => {
    //     try {
    //       await AsyncStorage.clear();
    //       alert('Storage successfully cleared!');
    //     } catch (e) {
    //       alert('Failed to clear the async storage.');
    //     }
    //   };

    //   const onChangeText = value => setInput(value);

    //   const onSubmitEditing = () => {
    //     if (!input) return;

    //     saveData(input);
    //     setInput('');
    //   };

    const signUpHandler = () => {
    if (!(confirmPassword === newUser.password))
                alert("Password and Confirmation Password must be same.")
            else {
        storeData = async () => {
            try {
                var obj = { "name": newUser.firstName + newUser.lastName, "email": newUser.email, "contact": newUser.contact, "shippingAddress":newUser.shippingAddress }
                await AsyncStorage.setItem('userdata', JSON.stringify(obj))
            } catch (e) {
                console.log("Something went wrong while storing", e);
            }
        }

        storeData()
    }
        getData = async () => {
            try {
                const value = await AsyncStorage.getItem('userdata')
                if (value !== null) {
                    console.log(JSON.parse(value))
                    // value previously stored
                }
            } catch (e) {
                console.log("Something went wrong while reading", e);
            }
        }

        getData()


        //     if (!(confirmPassword === newUser.password))
        //         alert("Password and Confirmation Password must be same.")
        //     else {

        //         // let STORAGE_KEY = '@user_credentials';

        //         // const saveData = async () => {
        //         //     try {
        //         //       await AsyncStorage.setItem(STORAGE_KEY, newUser)
        //         //       alert('Signup Successfull')
        //         //     } catch (e) {
        //         //       alert('SignUp Unsuccessfull')
        //         //     }
        //         //   }

        //         //   const readData = async () => {
        //         //     try {
        //         //       const value = await AsyncStorage.getItem(STORAGE_KEY);

        //         //       if (value !== null) {
        //         //         setInput(value);
        //         //       }
        //         //     } catch (e) {
        //         //       alert('Failed to fetch the input from storage');
        //         //     }
        //         //   };


        //         dispatch(SignUpAction(newUser))
        props.navigation.replace("appNavigator")
        //     }
    }


    return (
        <SafeAreaView style={{ height: "100%", width: "100%", backgroundColor: Colors.bgwhite }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <ImageBackground resizemode="cover" style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }} imageStyle={{ opacity: 0.92 }} source={{ uri: 'https://i.pinimg.com/474x/dc/74/45/dc74454e313125bb24ed271f3d128124.jpg' }}>
                    <View style={{ height: 150, width: "100%", justifyContent: "center", alignItems: "center" }}>
                        <Text style={styles.heading}>
                            SIGN UP
                        </Text>
                    </View>

                    <View style={{ height: 600, width: "85%", justifyContent: "center", alignItems: "center", backgroundColor: Colors.primary, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                        <View style={{ height: "100%", width: "90%", justifyContent: "center", alignItems: "center", marginTop:50 }}>

                            <MyInput
                                OnChangeText={(text) => {
                                    setNewUser({ ...newUser, firstName: text })
                                }}
                                placeholder="First Name"
                            />

                            <MyInput
                                OnChangeText={(text) => {
                                    setNewUser({ ...newUser, lastName: text })
                                }}
                                placeholder="Last Name"
                            />

                            <MyInput
                                OnChangeText={(text) => {
                                    setNewUser({ ...newUser, email: text })
                                }}
                                placeholder="Email"
                            />

                            <MyInput
                                OnChangeText={(text) => {
                                    setNewUser({ ...newUser, contact: text })
                                }}
                                placeholder="Contact"
                            />

                            <MyInput
                                OnChangeText={(text) => {
                                    setNewUser({ ...newUser, shippingAddress: text })
                                }}
                                placeholder="Shipping Address"
                            />

                            <MyInput
                                OnChangeText={(text) => {
                                    setNewUser({ ...newUser, password: text })
                                }}
                                placeholder="Password"
                                secure="false"
                            />

                            <MyInput
                                OnChangeText={(text) => {
                                    setconfirmPassword(text)
                                }}
                                placeholder="Confirm Password"
                                secure="false"
                            />

                            <AuthButton onPress={(signUpHandler)} btnTitle="SIGNUP" />

                            <TouchableOpacity onPress={() => props.navigation.navigate("login")} style={{ marginTop: 10, marginBottom:100 }}>
                                <Text style={{ color: "white" }}>
                                    Already a member? LOGIN?
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        heading: {
            fontSize: 30,
            fontWeight: "bold",
            color: Colors.bgWhite
        }
    }
)

export default SignUpScreen