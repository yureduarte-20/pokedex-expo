import React, { useState } from 'react';
import { View, Text } from 'react-native'
import { Backdrop } from 'react-native-backdrop';
import normalize from 'react-native-normalize';
import colors from '../../../assets/colors';
import Button from '../Button';
import { AplicationTitle, Description } from '../Typography';
export const sortOptions = ["smallest-number-first", "highest-number-first", "A-Z", "Z-A"];
export default function SortBackdropFilter({    open: visible, setOpen,  }){
    const [option, setOption] = useState("smallest-number-first")
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <Backdrop
        visible={visible}
        handleOpen={handleOpen}
        handleClose={handleClose}
        onClose={() => { }}
        swipeConfig={{
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80,
        }}
        animationConfig={{
            speed: 14,
            bounciness: 4,
        }}
        overlayColor={colors.backgrounds.modal}
        backdropStyle={{
            backgroundColor: '#fff',
        }}>
        <View style={{
            minHeight: 50,
            width: '100%',
            flexDirection:'column',
            padding: normalize(20),
        }}>
            <AplicationTitle >Sort</AplicationTitle>
            <Description>Sort Pokémons alphabetically or by National Pokédex number!</Description>
            <Button  type={"primary"} ><Text>smallest-number-first"</Text></Button>

        </View>
    </Backdrop>
    )

}