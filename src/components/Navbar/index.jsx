import React from 'react';

import { View, TouchableOpacity } from 'react-native'
import { SvgUri, SvgXml } from 'react-native-svg'
import { filterXml, searchXml, sortXml } from '../../../assets/icons'

export default function Navbar({ openSortBackdrop }){
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '100%',
            paddingTop:20
          }}>
            <TouchableOpacity onPress={() => {  }} style={{ padding: 5 }}>
              <SvgXml xml={searchXml} />
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 5 }} onPress={() => openSortBackdrop(true)}>
              <SvgXml xml={sortXml} />
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 5 }}>
              <SvgXml xml={filterXml} />
            </TouchableOpacity>
          </View>
    )
}