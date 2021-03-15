import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import TextCmp from '../../../components/TextCmp'
import { scaleNumber } from '../../../utils/scale'

const ButtonSignIn = ({ icon, text, style,onPress }) => {
    return (
        <Pressable style={[styles.container,style]} onPress={onPress}>
            <Image resizeMode="contain" style={styles.icon} source={icon} />
            <View style={styles.text}>
            <TextCmp semibold>{text}</TextCmp>
            </View>
            
        </Pressable>
    )
}

export default ButtonSignIn

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: scaleNumber(10),
        borderWidth: 1,
        borderColor: '#828282',
        borderRadius: scaleNumber(4),
        alignItems: 'center',
        
    },
    icon: {
        width: scaleNumber(15),
        height: scaleNumber(15)
    },
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:scaleNumber(20),
    }
})
