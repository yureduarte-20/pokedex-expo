import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'
const styles = StyleSheet.create({
    buutonContainer:{
        width: '100%',
        minHeight: normalize(60, 'height'),
        flexDirection: 'row',
        borderRadius: 8,
        alignItems: 'center'
    },
    contentText:{ 
        width: '60%', 
        paddingLeft: normalize(10, 'width')
     },
     image:{
        width: '100%',
        minHeight: normalize(120, 'height'),
        resizeMode: 'contain',
        position: 'absolute',
        top: normalize(-30, 'height'),
        zIndex:5
     }
})

export default styles