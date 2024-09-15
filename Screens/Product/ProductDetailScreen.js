import React from "react"
import { View, Text, SafeAreaView, Image, FlatList, TouchableOpacity } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Colors from "../../Constants/Colors"
import { useDispatch } from 'react-redux';
import MainHeader from '../../Components/MainHeader';
import * as CartAction from '../../Store/Action/ProductAction';

const ProductDetailScreen = props => {
    const data = props.route.params.data
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }}>
            <MainHeader back onBack={() => props.navigation.goBack()} onCart={() => props.navigation.navigate('cartScreen')} />
            <ScrollView>
                <View style={{ marginHorizontal: 10 }}>
                    <Image
                        source={{ uri: data.thumbNail }}
                        style={{ height: 300, width: "100%", resizeMode: 'cover' }}
                    />
                    <View style={{ marginVertical: 10, justifyContent: "center", alignItems: "center", width: "100%", flexDirection: "row" }}>
                        <Text style={{ fontSize: 18, fontWeight: "60", color:"black" }}>
                            {data.name}
                        </Text>
                        
                        <Text style={{ fontSize: 10, color: 'black', marginTop: 2 }}>
                            {` (${data.quantityUnit})`}
                        </Text>
                    </View>

                    <View style={{ marginVertical: 10, justifyContent: "center", alignItems: "center", width: "100%" }}>

                        <Text style={{ fontWeight: "bold", fontSize: 18, color: 'black' }}>
                            {`Price: Rs.${data.price}`}
                        </Text>

                    </View>
                    <TouchableOpacity
                        onPress={() => dispatch(CartAction.addToCartAction(data))}
                        style={{
                            height: 30,
                            width: 100,
                            backgroundColor: Colors.primary,
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: 'bold',
                                color: 'white',
                            }}>
                            ADD TO CART
                        </Text>
                    </TouchableOpacity>
                    <View style={{ marginVertical: 10, justifyContent: "center", alignItems: "center", width: "100%" }}>
                        <Text>
                            <Text style={{ fontWeight: "bold" }}>Description: </Text>

                            <Text>{data.description}</Text>
                        </Text>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default ProductDetailScreen