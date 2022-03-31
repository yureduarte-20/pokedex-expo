import React, { useState, useEffect, useCallback } from 'react';
import { SvgXml } from 'react-native-svg'
import {
    SafeAreaView,
    View,
    FlatList,
    ActivityIndicator
} from 'react-native';
import { pokebbalGradianteXml, pokebbalXml } from "../../../assets/patterns"
import Navbar from '../../components/Navbar';
import PokemonButton from '../../components/Pokemon';
import { AplicationTitle, Description } from '../../components/Typography';
import normalize from 'react-native-normalize';
import axios from 'axios';
import SortBackdropFilter from '../../components/SortBackdropFilter';
const baseUrl = 'https://pokeapi.co/api/v2/'
export default function Home() {
    const [sortVisible, setSortVisible] = useState(false);
    const [pokemons, setPokemons] = useState([]);
    const [next, setNext] = useState(null)
    const [loading, setLoading] = useState(false);
    const handleNext = async () => {
        loadApi();
    }
    useEffect(() => {
        loadApi();
    }, [])
    const loadApi = async () => {
        if (loading) return
        try {
            setLoading(true)
            let response = await axios.get(next || `${baseUrl}/pokemon`)
            setNext(response.data.next);
            let pokesRequest = []
            for (let poke of response.data.results) {
                pokesRequest.push(axios.get(poke.url));
            }
            Promise.all(pokesRequest).then(values => {
                let pokes = []
                for (let res of values) {
                    let id = res.data.id
                    let name = res.data.name;
                    let imgSrc = res.data.sprites.other['official-artwork'].front_default
                    let types = res.data.types
                    let height = res.data.height;
                    let weight = res.data.weight;
                    pokes.push({...res.data, id, name, imgSrc, types, height, weight, })
                }
                //console.log(pokes)
                setPokemons([...pokemons, ...pokes])
                setLoading(false)
            })
        } catch (e) {
            setLoading(false)
        }
    }
    function Loading(load) {
        if (!load) return
        return (
            <View>
                <ActivityIndicator color={"black"} size={"large"} />
            </View>)
    }
    const renderItems = ({ item }) => (
        <PokemonButton
            key={item.id}
            {...item} />)
    const keyExtractor = useCallback((item) => item.id, [])
    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-start', paddingHorizontal: normalize(20), paddingTop: normalize(30) }}>
                <SvgXml
                    style={{ position: 'absolute', top: "-15%" }}
                    width={"100%"}
                    height={"50%"}
                    xml={pokebbalGradianteXml}
                />
                <Navbar openSortBackdrop={setSortVisible} />
                <AplicationTitle>Pokédex</AplicationTitle>
                <Description>Search for Pokémon by name or using the National Pokédex number.</Description>
                <FlatList
                    data={pokemons}
                    style={{ flex: 1, }}
                    contentContainerStyle={{ paddingVertical: normalize(30, 'height') }}
                    ItemSeparatorComponent={(() => <View style={{ width: '100%', marginVertical: normalize(15, 'height') }} />)}
                    keyExtractor={keyExtractor}
                    renderItem={renderItems}
                    onEndReached={handleNext}
                    onEndReachedThreshold={0.1}
                    maxToRenderPerBatch={20}
                    ListFooterComponent={() => <Loading load={loading} />}
                />
            </SafeAreaView>
            <SortBackdropFilter setOpen={setSortVisible} open={sortVisible} />
        </>
    )
}