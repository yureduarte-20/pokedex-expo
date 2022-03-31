import React from "react";
import { Text, StyleSheet } from 'react-native';
import normalize from 'react-native-normalize'
import colors from "../../../assets/colors";
const styles = StyleSheet.create({
    aplicationTitle: {
        fontSize: normalize(32),
        fontFamily:'SF Pro Display Bold' ,
        color: colors.text.black,
        textAlign:'left' 
    },
    pokemonName: {
        fontSize: normalize(26),
        fontFamily:'SF Pro Display Bold',
        color:  colors.text.white,
        textTransform:'capitalize'
    },
    description:{
        fontSize: normalize(16),
        fontFamily:'SF Pro Display' ,
        color: colors.text.gray,
        textAlign:'left' 
    },
    pokemonNumber:{
        fontSize: normalize(12),
        fontFamily:'SF Pro Display Bold',
        color:  colors.text.number,
    },
    pokemonType:{
        fontFamily:'SF Pro Display Medium',
        fontSize:normalize(12),
        color:colors.text.black ,
    }
})
export const AplicationTitle = ({ children }) => {
    return (
        <Text style={styles.aplicationTitle}>{children}</Text>
    )
}

export const Description = ({ children, style }) => {
    return (
        <Text style={[styles.description, style]}>{children}</Text>
    )
}
export const PokemonName = ({ children, style }) =>( <Text style={[styles.pokemonName,style]}>{children}</Text> )

export const PokemonNumber = ({ children, style }) =>( <Text style={[styles.pokemonNumber, style]}>{children}</Text> )

export const PokemonType = ({ children, style }) =>( <Text style={[styles.pokemonType, style]}>{children}</Text> )