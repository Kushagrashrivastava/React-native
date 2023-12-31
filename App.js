import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/Components/Tabs';
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'
import { useGetWeather } from './src/Hooks/useGetWeather';
import ErrorItem from './src/Components/ErrorItem';
import OurButton from './src/Demonstration/OurButton';

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, error, weather] = useGetWeather()
  console.log(loading, error, weather)

  // if(weather && weather.list && !loading){
  //   return (
  //     <NavigationContainer>
  //       <Tabs weather={weather}/>
  //     </NavigationContainer>
  //   )
  //   }

  if (loading) {
    return(
      <View style={StyleSheet.conatiner}>
        <OurButton />
        {error ? (
          <ErrorItem />
        ) : ( <ActivityIndicator size={'large'} color={'blue'} />
        )}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
  }
})

export default App;
