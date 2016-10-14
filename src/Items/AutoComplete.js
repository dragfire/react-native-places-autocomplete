/**
 * Created by dragfire on 02-10-2016.
 */

import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Switch, Image, ScrollView} from 'react-native'
import Styles from '../Styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class AutoComplete extends Component {
    render() {
        let {merchant, iconColor, onSelect, merchantNameColor} = this.props;

        let details = merchant.name.split(',');

        return (
            <TouchableOpacity
                key={Math.random()}
                style={Styles.touchable}
                onPress={(merchant)=>onSelect(merchant)}
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
                        <Icon
                            name="location-on"
                            style={{
                                width : 40,
                                height: 40
                            }}
                            size={30}
                            color={iconColor}
                        />
                    </View>
                    <View style={{
                        flex          : 1,
                        marginLeft    : 10,
                        justifyContent: 'center',
                        alignItems    : 'flex-start'
                    }}>
                        <Text
                            ellipsizeMode="tail"
                            numberOfLines={1}
                            style={{color: merchantNameColor}}
                        >
                            {details[0]}
                        </Text>
                        <Text
                            ellipsizeMode="tail"
                            numberOfLines={1}
                            style={{
                                color    : '#00bb6e',
                                fontSize : 14,
                                marginTop: 5
                            }}
                        >
                            {details[1] ? details[1].trim() : 'NA'}
                        </Text>
                    </View>
                </View>

            </TouchableOpacity>
        );
    }
}