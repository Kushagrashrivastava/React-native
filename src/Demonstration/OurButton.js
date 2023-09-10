import react from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const OurButton = () => {
    const onPress = () => {
        console.log('Press')
    }
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        elevation: 8,
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 5,
    },
    buttonText: {
        fontSize: 15,
        color: 'white',
        aliginSelf: 'center',
    }
})
export default OurButton