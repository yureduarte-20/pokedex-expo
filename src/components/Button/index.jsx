import React from 'react';
import { TouchableOpacity } from 'react-native'
import colors from '../../../assets/colors';

export default function Button({ type, onPress, children, style }) {

    return (
        <TouchableOpacity onPress={onPress}
            style={[{
                backgroundColor: type === 'primary'
                    ? colors.button.primary : colors.button.secondary,
                padding: 20,
                borderRadius:4
            }, style]}>
            {children}
        </TouchableOpacity>
    );
}
