import React from 'react';
import { View, Text, FlatList, Image, Button } from 'react-native';
import MainHeader from '../../Components/MainHeader';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../Constants/Colors';
import * as CartItemAction from '../../Store/Action/ProductAction'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaIcon from '../../Components/MaIcon';
import * as CartAction from '../../Store/Action/ProductAction';

const CartScreen = props => {
  const allProduct = useSelector(state => state.product.allProduct);
  const allCartItems = useSelector(state => state.product.myCart);
  const dispatch = useDispatch();



  const renderCartList = itemData => {

    const deleteCartItem = () => {
      dispatch(CartItemAction.deleteCartItem(itemData.item.id))
    }

    const addToCartHandler = () => {

      dispatch(CartAction.addToCartAction(itemData.item));
    };


    // const ItemCountInCart=()=>{
    //   var items =[];

    //   for(let i = 0; i < ALLPRODUCTS.length; i++)
    //   {
    //     items: allCartItems.filter(i=>i.id==ALLPRODUCTS[i].id)
    //     ALLPRODUCTS[i].quantity = items.length
    //   }
    //}






    return (
      <View
        style={{
          height: 100,
          width: '100%',
          marginVertical: 10,
          borderBottomColor: 'lightgray',
          borderWidth: 0.5,
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor:Colors.bgWhite        
          }}>
        <View
          style={{
            height: '100%',
            width: '30%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{ height: '90%', width: '90%', resizeMode: 'contain' }}
            source={{ uri: itemData.item.thumbNail }}
          />
        </View>

        <View
          style={{
            height: '90%',
            width: '60%',
            justifyContent: 'center',
            marginTop:5
          }}>
          
          <View style={{flexDirection:"row"}}>
          <Text style={{ fontSize: 13, fontWeight: '600', color: 'black' }}>{itemData.item.name}</Text>
          <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'black', marginTop:2 }}>
            {` (${itemData.item.quantityUnit})`}
          </Text>
          </View>
          <Text style={{ fontSize: 13, fontWeight: 'bold', color: Colors.primary }}>Rs.{itemData.item.price}</Text>
          <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>
            {`QTY: ${itemData.item.quantity}`}
          </Text>
          <View style={{width:"100%",flexDirection:'row', left:100}}>
          <TouchableOpacity
            style={
              {
                height: 50,
                width: '100%',
                justifyContent:'center',
                alignContent:'center'
              }
            }
            onPress={deleteCartItem}>
            <MaIcon
              iconName="minus-circle"
              size={35}
              color={'lightgray'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              {
                height: 50,
                width: '100%',
                justifyContent:'center',
                alignContent:'center',
                marginLeft:20
              }
            }
            onPress={addToCartHandler}>
            <MaIcon
              iconName="plus-circle"
              size={35}
              color={'lightgray'}
            />
          </TouchableOpacity>
          </View>
        </View>

        <View
          style={{ height: '90%', width: '10%' }}></View>
      </View>
    );
  };

  const totalAmount = allCartItems.reduce((total, currentValue) => total = total + (Number(currentValue.price) * Number(currentValue.quantity)), 0);
  const totalQ = allProduct.reduce((total, currentValue) => total = total + Number(currentValue.quantity), 0);


  return (
    <View style={{ height: '100%', width: '100%', backgroundColor: '#E0E3DE' }}>
      <MainHeader />
    {
      (allCartItems.length>0)?
      
         <View
         style={{
           height: '90%',
           width: '100%',
 
           justifyContent: 'center',
           alignItems: 'center',
           padding: 10,
         }}>
         <View style={{ height: '100%', width: '100%' }}>
           <FlatList
             showsVerticalScrollIndicator={false}
             keyExtractor={(item, index) => index.toString()}
             data={allCartItems}
             renderItem={renderCartList}
            />
           
         </View>
       </View>
      
      :
     
        <View style={{ height: '100%', width: '100%' ,justifyContent:"center", alignItems:"center"}}>
        <Text >
          Cart is Empty. Add items from the product list.
        </Text>
      </View>
 
    }

    </View>
  );
};
export default CartScreen;
