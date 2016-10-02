# react-native-google-places-autocomplete
React Native Google NearBy Place Search and places autocomplete (iOS/Android)

##Usage: 

```javascript
import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import PlacesAutoComplete from 'react-native-google-places-autocomplete'

export default class SearchPlace extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PlacesAutoComplete
                apikey="YOUR_API_KEY"
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
```
