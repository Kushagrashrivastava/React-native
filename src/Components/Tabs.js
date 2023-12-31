import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CurrentWeather from '../Components/Screens/CurrentWeather'
import UpcommingWeather from '../Components/Screens/UpcommingWeather'
import City from '../Components/Screens/City'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
    return(
        <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
            backgroundColor: 'lightblue'
        },
        headerStyle: {
            backgroundColor: 'lightblue'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
            color: 'tomato'
        }
      }}
      >
      <Tab.Screen name={'Current'} component={CurrentWeather}
      options={{
        tabBarIcon: ({ focused }) => (
          <Feather 
          name={'droplet'}
          size={25}
          color={focused ? 'tomato' : 'black'}
          />
        )
      }}
      >
        {() => <CurrentWeather weatherData = {weather.list[0]}/>}
        </Tab.Screen>
      <Tab.Screen name={'Upcomming'} 
      options={{
        tabBarIcon: ({ focused }) => (
          <Feather
          name={'clock'}
          size={25}
          color={focused ? 'tomato' : 'black'}
          />
        )
      }}
      >
        {() => <UpcommingWeather weatherData={weather.list}/>}
        </Tab.Screen>
      <Tab.Screen name={'City'} 
      options={{
        tabBarIcon: ({ focused }) => (
          <Feather
          name={'home'}
          size={25}
          color={focused ? 'tomato' : 'black'}
          />
        )
      }}
      >
        {() => <City weatherData={weather.City} />}
      </Tab.Screen>
    </Tab.Navigator>
    )
}
export default Tabs