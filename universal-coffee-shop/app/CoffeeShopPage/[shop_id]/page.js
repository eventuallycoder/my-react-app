import {useEffect, useState} from 'react'
import {Text} from 'react-native';
import { useLocalSearchParams} from 'expo-router';
  

export default function page()
{
  //the information about the coffeeshop that is dynamically changed on component mount
  const [coffeeShopName, setCoffeeShopName] = useState("");
  const [OwnerID, setID] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [PhoneNum, setPhoneNumber] = useState("");
  const [logoURL, setLogoURL] = useState("");

   // BACKEND URL 
   const BASE_URL = 'http://192.168.1.175:8080';   

    //runs on component mount to get the information based on the coffeeshops id
    useEffect(() => {
          fetchShopById(shop_id);
       }, []);
   
    //grabs data for the coffeeshop that the user clicked on and updates
    //the page accordingly
    async function fetchShopById(shop_id)
    {
    try {
      //fetch api that gets and returns to 'response' object, information about a single coffeeshop
      const url = `${BASE_URL}/home/get_coffeeshop_by_id/${shop_id}`;
      const response = await fetch(url);
      
      if(!response.ok)
      {
         alert("that coffeeshop is poopoo")
      }
      
      //this holds the un-jsoned object containing information about the single coffeeshop the user clicked on
      const data = await response.json();
      console.log(data);

       
       
    } catch (err) {
      console.log('FETCH ERROR:', err);
    }
  }


    /*This gets the name of the coffeeshop that was sent from CoffeeShopCard.js
    'id' is used because it represents the route of the [id] folder */
    const {shop_id} = useLocalSearchParams();  

    return(
          <>
            <Text>Hello and welcome to  {}</Text>

          </>

     )




}