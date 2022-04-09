import React, { useEffect, useState, PureComponent } from 'react'
import { TouchableHighlight, View, Image, Text, ActivityIndicator } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { pokebbalXml, _6x3Gradient } from '../../../assets/patterns'
import normalize from 'react-native-normalize'
import styles from './style'
import colors from '../../../assets/colors'
import axios from 'axios';
import {
    Bug,
    Dark,
    Dragon,
    Electric,
    Fairy,
    Fighting,
    Fire,
    Flying,
    Ghost,
    Grass,
    Ground,
    Ice,
    Normal,
    Poison,
    Psychic,
    Rock,
    Steel,
    Water
} from '../badges'
import { useNavigation } from '@react-navigation/native'
import { PokemonName, PokemonNumber } from '../Typography'
import { memo } from 'react/cjs/react.production.min'

export const getGetBadge = (badge, index) => {
    switch (badge) {
        case "bug": return <Bug key={index} style={{ marginHorizontal: 2 }} />
        case "dark": return <Dark key={index} style={{ marginHorizontal: 2 }} />
        case "dragon": return <Dragon key={index} style={{ marginHorizontal: 2 }} />
        case "electric": return <Electric key={index} style={{ marginHorizontal: 2 }} />
        case "fairy": return <Fairy key={index} style={{ marginHorizontal: 2 }} />
        case "fighting": return <Fighting key={index} style={{ marginHorizontal: 2 }} />
        case "flying": return <Flying key={index} style={{ marginHorizontal: 2 }} />
        case "ghost": return <Ghost key={index} style={{ marginHorizontal: 2 }} />
        case "ground": return <Ground key={index} style={{ marginHorizontal: 2 }} />
        case "ice": return <Ice key={index} style={{ marginHorizontal: 2 }} />
        case "rock": return <Rock key={index} style={{ marginHorizontal: 2 }} />
        case "psychic": return <Psychic key={index} style={{ marginHorizontal: 2 }} />
        case "steel": return <Steel key={index} style={{ marginHorizontal: 2 }} />
        case "water": return <Water key={index} style={{ marginHorizontal: 2 }} />
        case "grass": return <Grass key={index} style={{ marginHorizontal: 2 }} />
        case "poison": return <Poison key={index} style={{ marginHorizontal: 2 }} />
        case "normal": return <Normal key={index} style={{ marginHorizontal: 2 }} />
        case "fire": return <Fire key={index} style={{ marginHorizontal: 2 }} />
    }
}


function PokemonButton({ id, name, imgSrc, types, height, weight }) {
    const renderBadges = () => {
        let badges = [];
        for (let i of types) {
            badges.push(i.type.name)
        }
        let final = badges.map((item, index) => getGetBadge(item, index))

        return final
    }

    const navigation = useNavigation()
    if (!id) {
        return (
            <TouchableHighlight underlayColor={colors.button.primary} onPress={(e) => { console.log(id) }}
                style={[styles.buutonContainer, { backgroundColor: colors.button.secondary, justifyContent: 'center' }]}>
                <Text style={{ fontFamily: 'SF Pro Display', fontSize: normalize(26), color: 'white' }}>Indisponível</Text>
            </TouchableHighlight>
        )
    }
    return (
        <TouchableHighlight underlayColor={colors.button.primary} onPress={(e) => { navigation.navigate('show', { id, name, imgSrc, types, height, weight }) }}
            style={[styles.buutonContainer, { backgroundColor: colors.type.backgrounds[types[0].type.name] || colors.button.secondary }]}>
            <>
                <SvgXml style={{ position: 'absolute', left: normalize(90, 'width'), top: normalize(10, 'height') }} xml={_6x3Gradient} />
                <View style={styles.contentText}>
                    <PokemonNumber>#{id}</PokemonNumber>
                    <PokemonName>{name}</PokemonName>
                    <View style={{ flexDirection: 'row' }}>
                        {renderBadges()}
                    </View>
                </View>

                <View style={{ width: '40%', maxHeight: normalize(100, 'height') }}>
                    <Image style={styles.image}
                        source={{ uri: imgSrc }} />
                    <View style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                        <SvgXml xml={pokebbalXml} height={"150%"} width={"150%"} color={"white"} style={{ position: 'absolute', top: "-30%", right: '-60%', opacity: 0.3 }} />
                    </View>
                </View>
            </>
        </TouchableHighlight >
    )

}
export default memo(PokemonButton)