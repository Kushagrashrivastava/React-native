import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CurrentWeather from '../Components/Screens/CurrentWeather'
import UpcommingWeather from '../Components/Screens/UpcommingWeather'
import City from '../Components/Screens/City'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return(
        <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey'
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
      />
      <Tab.Screen name={'Upcomming'} component={UpcommingWeather}
      options={{
        tabBarIcon: ({ focused }) => (
          <Feather
          name={'clock'}
          size={25}
          color={focused ? 'tomato' : 'black'}
          />
        )
      }}
      />
      <Tab.Screen name={'City'} component={City} 
      options={{
        tabBarIcon: ({ focused }) => (
          <Feather
          name={'home'}
          size={25}
          color={focused ? 'tomato' : 'black'}
          />
        )
      }}
      />
    </Tab.Navigator>
    )
}
export default Tabs