# react-native-places-autocomplete
React Native Google NearBy Place Search and Places Autocomplete (iOS/Android)

##Usage: 

```javascript
import PlacesAutoComplete from 'react-native-places-autocomplete'

var SearchBar = require('react-native-search-bar'); // Optional but recommended on iOS

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
```

Demo:

![Demo](/Example/SearchPlace.gif)