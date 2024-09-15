import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import MainHeader from '../../Components/MainHeader';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../Constants/Colors';
import * as CartAction from '../../Store/Action/ProductAction';



const SearchScreen = props => {
  const allCategories = useSelector(state => state.product.allCategories);
  const allProduct = useSelector(state => state.product.allProduct);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("")


  return (
    <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E0E3DE', marginTop: 18 }}>
      <MainHeader onCart={() => props.navigation.navigate('cartScreen')} />
      <View style={{ height: 50, width: "90%" }}>
        <TextInput
          onChangeText={text => setSearch(text)}
          placeholder="Search Item"
          style={{
            height: '100%',
            width: '100%',
            borderColor: 'Lightgray',
            borderWidth: 1,
            backgroundColor: Colors.bgWhite,
            marginTop: 6
          }}
        />
      </View>
      <View
        style={{
          height: '85%',
          width: '97%',
          marginVertical: 5,
          marginTop: 10
        }}>
        <ScrollView
          style={{
            height: '85%',
            width: '97%',
            marginVertical: 5
          }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={allProduct}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            renderItem={itemData => {
              const addToCartHandler = () => {

                dispatch(CartAction.addToCartAction(itemData.item));
              };

              if (itemData.item.name.includes(search)) {
                return (
                  <View
                    style={{
                      height: 200,
                      width: '48%',
                      backgroundColor: 'white',
                      margin: 5,
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 1,
                      },
                      shadowOpacity: 0.18,
                      shadowRadius: 1.0,

                      elevation: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity style={{ height: '60%', width: '100%' }}
                      onPress={() => {
                        props.navigation.navigate("ProductDetailScreen",
                          {
                            data: itemData.item,
                          }
                        );
                      }}
                    >
                      <Image
                        style={{
                          height: '100%',
                          width: '100%',
                          resizeMode: 'contain',
                        }}
                        source={{ uri: itemData.item.thumbNail }}
                      />
                    </TouchableOpacity>

                    <View
                      style={{
                        height: '10%',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 5,
                      }}>
                      <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 13, fontWeight: '600', color: 'black' }}>{itemData.item.name}</Text>
                        <Text style={{ fontSize: 10, color: 'black', marginTop: 2 }}>
                          {` (${itemData.item.quantityUnit})`}
                        </Text>
                      </View>
                      <Text
                        style={{ fontSize: 12, fontWeight: 'bold', color: '#2C3328' }}>
                        Rs.{itemData.item.price}
                      </Text>
                    </View>

                    <View
                      style={{
                        height: '20%',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 5,
                      }}>
                      <TouchableOpacity
                        onPress={addToCartHandler}
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
                    </View>
                  </View>
                );
              }

            }}
          />
        </ScrollView>
      </View>
    </View>
  );
};
export default SearchScreen;
