/**
 * Created by dragfire on 02-10-2016.
 */

import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import PlacesAutoComplete from '../'

export default class SearchPlace extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PlacesAutoComplete
                apikey="AIzaSyBPjMUQYXz69YBFq3WNiBT7YLMKNmjIFt0"
                rankby="distance"
                radius="500"
                type="restaurant|department_store|pharmacy|night_club|movie_theater|bowling_alley|book_store|meal_delivery|meal_takeaway|lodging|bar"
                onSelect={(details)=>{
                    console.log(details);
                }}
            />
        );
    }
}