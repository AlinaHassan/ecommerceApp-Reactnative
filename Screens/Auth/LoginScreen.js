import React,{useState} from "react"
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity,ScrollView } from "react-native"
import Colors from "../../Constants/Colors"
import MyInput from "../../Components/MyInput"
import AuthButton from "../../Components/AuthButton"
import AsyncStorage from '@react-native-community/async-storage';


const LoginScreen = (props) => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
   

    const loginHandler=()=>{
       if(email==="Alina" && password==="xyz"){

           props.navigation.replace("appNavigator")
       }else{
           alert("Please enter a valid email or password")
       }
    }
    return (
        <SafeAreaView style={{ height: "100%", width: "100%", backgroundColor: Colors.bgWhite}}>
           <ScrollView >
           <View style={{ height:200, width: "100%", justifyContent: "center", alignItems: "center" }}>
                <Image
                    source={require("../../Assets/Images/Logo.png")}
                    style={{ height: 100, width: 150, resizeMode: 'contain'  }}
                />
            </View>
            <View style={{ height: 360, width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: Colors.primary, borderRadius:20}}>
                <View style={{ height: "100%", width: "90%", justifyContent: "center", alignItems: "center" }}>
                    <MyInput
                        OnChangeText={(text)=>{
                            setEmail(text)
                        }}
                        placeholder="Enter your email address"
                    />

                    <MyInput
                      OnChangeText={(text)=>{
                        setPassword(text)
                    }}
                        secure
                        placeholder="Enter your password"
                    />

                    <AuthButton onPress={loginHandler}  btnTitle="LOGIN" />

                    <TouchableOpacity onPress={()=>props.navigation.navigate("signup")} style={{marginTop:5,}}>
                        <Text style={{color:"white"}}> Don't have an account? SIGN UP?</Text>
                    </TouchableOpacity>



                </View>
            </View>
           </ScrollView>
        </SafeAreaView>
    )
}

export default LoginScreen