import React from 'react'
import { Text, SafeAreaView, StyleSheet, ImageBackground, View } from 'react-native'
import IconText from '../IconText'

const City = () => { 
    const { container, cityName, cityText, countryName, populationWrapper, populationText, riseSetWrapper, riseSetText, rowLatout, imageLayout } = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../../assets/city-background.jpeg')} style={imageLayout}>
            <Text style={[cityName, cityText]}>London</Text>
            <Text style={[countryName, cityText]}>UK</Text>
            <View style={[populationWrapper, rowLatout]}>
                <IconText iconName={'user'} iconColor={'red'} bodyText={8000} bodyTextStyles={populationText} 
                />
            </View>
            <View style={[riseSetWrapper, rowLatout]}>
                <IconText iconName={'sunrise'} iconColor={'white'} 
                bodyText={'10:46:58am'}
                bodyTextStyles={riseSetText}
                />
                <IconText iconName={'sunset'}
                iconColor={'white'}
                bodyText={'17:28:15pm'}
                bodyTextStyles={riseSetText}
                />
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageLayout: {
        flex: 1,
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
    },
    riseSetWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30,
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
    },
    rowLatout: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})
export default City;