/**
 * Created by dragfire on 29-09-2016.
 */

import React, {Component, PropTypes} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Switch, Image, ScrollView} from 'react-native'
import {AutoComplete, Nearby} from './src/Items'

const Ajax = require('./src/lib');

export default class PlacesAutocomplete extends Component {
    static defaultProps = {
        rankby           : 'distance',
        radius           : '500',
        type             : 'restaurant|cafe',
        iconColor        : '#FC1D47',
        merchantNameColor: '#424346'
    };

    static propTypes = {
        apikey           : PropTypes.string.isRequired,
        rankby           : PropTypes.string,
        radius           : PropTypes.string,
        type             : PropTypes.string,
        iconColor        : PropTypes.string,
        merchantNameColor: PropTypes.string,
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
            key   : this.props.apikey,
            rankby: this.props.rankby,
            radius: this.props.radius,
            type  : this.props.type
        };
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let location = position.coords.latitude.toString() + ',' + position.coords.longitude.toString();
                this.setState({location}, ()=>this.getNearByPlaces());
            },
            (error) => {
                console.log("Error:", error);
            }
        );
    }

    componentWillReceiveProps(props) {
        if (props.searchText && props.searchText.length) {
            this.getPlacesAutoComplete(props.searchText);
        } else {
            this.setState({autocompletePlaces: []})
        }
    }

    getNearByPlaces() {
        let data = Object.assign({}, this.data, {location: this.state.location});

        Ajax.getPlacesNearBy(data)
            .then(res=>res.json())
            .then((res)=> {
                this.setState({
                    location    : this.state.location,
                    nearByPlaces: res.results.map((merchant)=>({
                        name     : merchant.name,
                        icon     : merchant.icon,
                        icon_name: merchant.icon_name,
                        address  : merchant.vicinity
                    }))
                });
            })
            .catch((err)=> {
                console.log(err);
            });
    }

    getPlacesAutoComplete(text) {
        let data = Object.assign({}, this.data, {location: this.state.location});

        Ajax.getPlacesAutoComplete(text, data)
            .then(res => res.json())
            .then((res)=> {
                this.setState({autocompletePlaces: res.predictions.map((place)=>({name: place.description}))});
            })
            .catch((err)=> {
                console.log(err);
            });
    }

    render() {
        let MainView;

        let {searchInput, onSelect} = this.props;

        if (this.state.autocompletePlaces.length) {
            MainView = (
                <ScrollView>
                    {this.state.autocompletePlaces.map((merchant)=>
                        <AutoComplete
                            merchant={merchant}
                            iconColor={this.props.iconColor}
                            onSelect={onSelect}
                            merchantNameColor={this.props.merchantNameColor}
                            key={Math.random()}
                        />
                    )}
                </ScrollView>
            );
        } else if (this.state.nearByPlaces.length) {
            MainView = (
                <ScrollView>
                    {
                        this.state.nearByPlaces.map((merchant)=>
                            <Nearby
                                merchant={merchant}
                                iconColor={this.props.iconColor}
                                onSelect={onSelect}
                                merchantNameColor={this.props.merchantNameColor}
                                key={Math.random()}
                            />)
                    }
                </ScrollView>
            );
        } else {
            MainView = (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold', color: this.props.iconColor}}>Loading...</Text>
                </View>
            );
        }

        return (
            <View style={{flex: 1}}>
                {searchInput ? searchInput :
                    <TextInput
                        placeholder={"Search"}
                        style={{
                            height     : 50,
                            borderColor: 'black',
                            borderWidth: 1
                        }}
                        onChangeText={this.getPlacesAutoComplete}
                    />
                }
                {MainView}
            </View>
        );
    }
}
