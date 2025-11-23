import {useEffect} from 'react'
import {Text} from 'react-native';
import { useLocalSearchParams} from 'expo-router';
  

export default function page()
{
    //runs on component mount to get the information based on the coffeeshops id
    useEffect(() =>
    {

    })


    /*This gets the name of the coffeeshop that was sent from CoffeeShopCard.js
    'id' is used because it represents the route of the [id] folder */
    const {id} = useLocalSearchParams();  

    return(
       <><Text>Currently on {id} page</Text></>
     )




}