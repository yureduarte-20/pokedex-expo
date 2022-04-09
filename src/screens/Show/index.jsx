import React, { useState } from 'react'
import axios from 'axios'
import { SafeAreaView, View, useWindowDimensions, Text, ScrollView, Image } from 'react-native';
import { Backdrop } from 'react-native-backdrop';
import { TabView, SceneMap } from 'react-native-tab-view'
import styles from './styles';
import { SvgFromXml, SvgXml } from 'react-native-svg';
import { backXml } from '../../../assets/icons';
import colors from '../../../assets/colors';
import normalize from 'react-native-normalize';
import { getGetBadge } from '../../components/Pokemon';
import { PokemonName, PokemonNumber } from '../../components/Typography';
export default function Show({ route }) {
    console.log(route.params)
    const { types, imgSrc, name, id } = route.params
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ]);
    const [visible, setVisible] = useState(true);

    const handleOpen = () => {
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
    };
    const FirstRoute = () => (
        <View style={{ flex:1, backgroundColor: '#ff4081' }} />
    );

    const SecondRoute = () => (
        <View style={{ flex:1, backgroundColor: '#673ab7' }} />
    );
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    const renderBadges = () => {
        let badges = [];
        for (let i of types) {
            badges.push(i.type.name)
        }
        let final = badges.map((item, index) => getGetBadge(item, index))

        return final
    }
    return (
        <>
            <SafeAreaView style={[styles.container, { backgroundColor: colors.type.backgrounds[types[0].type.name]}]}>
                <View style={{ flex:1 }}>
                    <SvgFromXml 
                        width={24} 
                        height={25} 
                        xml={backXml('white')}
                        style={{ 
                            position:'absolute',
                            top: normalize(30, "height"),
                            left:normalize(20, 'width')
                         }} /> 
                         <View style={{ flex:1, justifyContent:'center', alignItems:'center', flexDirection:'row' }}>
                                <Image source={{ uri:imgSrc }} 
                                style={ styles.image}/>
                                <View style={{ flexDirection:'column' }}>
                                    <PokemonNumber style={{ color:colors.text.number, fontSize:14 }}>#{ `${id < 10 ? `00${id}` : id < 100 ? `0${id}` : id}`}</PokemonNumber>
                                    <PokemonName>{name}</PokemonName>
                                    <View style={{ flexDirection:'row', flexWrap:'wrap' }}>
                                    {renderBadges()}
                                    </View>
                                </View>
                         </View>
                </View>
                <TabView
                    style={{ flex:2 }}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                />
            </SafeAreaView>
            
        </>
    );
}