import { StyleSheet, StatusBar } from "react-native";
import normalize from "react-native-normalize";
export default StyleSheet.create({
    container:{
        flex:1,
        paddingTop:StatusBar.currentHeight
    },
    image:{
        width: normalize(115, 'width'),
        minHeight: normalize(115, 'height'),
        resizeMode: 'contain',
        zIndex:5,
        
     }
})