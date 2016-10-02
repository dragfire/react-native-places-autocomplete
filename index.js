/**
 * Created by dragfire on 29-09-2016.
 */

import React, {Component, PropTypes } from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Switch, Image, ScrollView} from 'react-native'
import {Autocomplete, Nearby} from './src/Items'

const Ajax = require('./src/lib');

export default class PlacesAutocomplete extends Component {
    static defaultProps = {
        rankby: 'distance',
        radius: '500',
        type: 'restaurant|cafe'
    };

    static propTypes = {
        apikey : PropTypes.string,
        rankby: PropTypes.string,
        radius: PropTypes.string,
        type: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            filterText        : '',
            location          : null,
            nearByPlaces      : [],
            autocompletePlaces: []
        };

        this.data = {
            key: this.props.apikey,
            rankby: this.props.rankby,
            radius: this.props.radius,
            type: this.props.type
        };
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                let  location = position.coords.latitude.toString() + ',' + position.coords.longitude.toString();
                this.setState({location}, ()=>this.getNearByPlaces());
            },
            (error) => {
                this.getNearByPlaces("12.9716,77.5946");
                console.log("Error:", error);
            }
        );
    }

    getNearByPlaces(location) {
        let data = Object.assign({}, this.data, {location: this.state.location || location});
        console.log(data);
        Ajax.getPlacesNearBy(data).then((res)=> {
            res = JSON.parse(res);
            this.setState({
                location    : position,
                nearByPlaces: res.results.map((merchant)=>({
                    name     : merchant.name,
                    icon     : merchant.icon,
                    icon_name: merchant.icon_name,
                    address  : merchant.vicinity
                }))
            });
        }).catch((err)=> {
            console.log(err);
        });
    }

    getPlacesAutoComplete(text) {
        let data = Object.assign({}, this.data, {location: this.state.location});
        console.log(data);
        Ajax.getPlacesAutoComplete(text, data).then((res)=> {
            res = JSON.parse(res);
            console.log(res);
            this.setState({autocompletePlaces: res.predictions.map((place)=>({name: place.description}))});
        }).catch((err)=> {
            console.log(err);
        });
    }

    render() {
        let MainView;

        if (this.state.autocompletePlaces.length) {
            MainView = (
                <ScrollView>
                    {this.state.autocompletePlaces.map((merchant)=> <Autocomplete merchant={merchant}/>)}
                </ScrollView>
            );
        } else if (this.state.nearByPlaces.length) {
            console.log('NB', this.state.nearByPlaces);
            MainView = (
                <ScrollView>
                    {this.state.nearByPlaces.map((merchant)=> <Nearby merchant={merchant}/>)}
                </ScrollView>
            );
        }
        return (
            <View style={{flex: 1}}>
                <TextInput
                    placeholder={"Search"}
                    style={{
                        height     : 50,
                        borderColor: 'black',
                        borderWidth: 1
                    }}
                    onChangeText={this.getPlacesAutoComplete}
                />
                {MainView}
            </View>
        );
    }
}
