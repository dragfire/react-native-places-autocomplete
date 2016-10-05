# react-native-places-autocomplete
React Native Google NearBy Place Search and Places Autocomplete (iOS/Android)

##Usage: 

```javascript
import React, {Component} from 'react'
import PlacesAutoComplete from 'react-native-places-autocomplete'

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
