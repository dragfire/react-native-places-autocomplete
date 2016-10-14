/**
 * Created by dragfire on 02-10-2016.
 */

import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import PlacesAutoComplete from '../'

var SearchBar = require('react-native-search-bar');

export default class SearchPlace extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <View style={{flex: 1, marginTop: 64}}>
                <PlacesAutoComplete
                    apikey="YOUR_API_KEY"
                    rankby="distance"
                    radius="500"
                    type="restaurant|department_store|pharmacy|night_club|movie_theater|bowling_alley|book_store|meal_delivery|meal_takeaway|lodging|bar"
                    iconColor="#FC1D47"
                    merchantNameColor="#37383B"
                    searchText={this.state.searchText}
                    searchInput={
                        <SearchBar
                            ref='searchBar'
                            placeholder='Search'
                            onChangeText={text => {
                                console.log(text);
                                this.setState({searchText: text});
                            }}
                            onSearchButtonPress={()=> {
                            }}
                            onCancelButtonPress={()=> {
                            }}
                        />
                    }
                    onSelect={(details)=> {
                        console.log(details);
                    }}
                />
            </View>
        );
    }
}