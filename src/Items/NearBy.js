/**
 * Created by dragfire on 02-10-2016.
 */

import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Switch, Image, ScrollView} from 'react-native'
import Styles from '../Styles'

export default class Nearby extends Component {
    render() {
        let {merchant, iconColor, onSelect, merchantNameColor} = this.props;

        return (
            <TouchableOpacity
                key={Math.random()}
                style={Styles.touchable}
                onPress={()=>onSelect(merchant)}
            >
                <View style={[Styles.row, {
                    padding: 5
                }]}>

                    <View style={[{
                        width         : 50,
                        alignItems    : 'center',
                        justifyContent: 'center',
                        borderRadius  : 30
                    }]}>
                        {merchant.icon ? <Image
                            source={{uri: merchant.icon}}
                            style={{
                                width    : 40,
                                height   : 40,
                                tintColor: iconColor
                            }}
                            resizeMode={'cover'}
                        /> : <Icon name={merchant.icon_name} size={40} color={iconColor}/>}
                    </View>
                    <View style={{
                        flex          : 1,
                        marginLeft    : 10,
                        justifyContent: 'center'
                    }}>
                        <Text
                            ellipsizeMode="tail"
                            numberOfLines={1}
                            style={{
                                color: merchantNameColor
                            }}>{merchant.name}</Text>
                        <Text
                            ellipsizeMode="tail"
                            numberOfLines={1}
                            style={{
                                color    : '#00bb6e',
                                fontSize : 14,
                                marginTop: 5
                            }}>{merchant.address}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}