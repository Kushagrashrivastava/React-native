import { StyleSheet, View } from 'react-native'
import React from 'react'
import CurrentWeather from './src/Components/Screens/CurrentWeather'
import UpcommingWeather from './src/Components/Screens/UpcommingWeather'
import City from './src/Components/Screens/City'

const App = () => {
  return (
    <View style={styles.container}>
      <CurrentWeather />
      {/* <UpcommingWeather /> */}
      {/* <City /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})

export default App;
