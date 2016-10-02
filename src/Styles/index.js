/**
 * Created by dragfire on 02-10-2016.
 */

import {StyleSheet} from 'react-native'

let Styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex         : 1
    },
    row      : {
        flex           : 1,
        flexDirection  : 'row',
        backgroundColor: "#fff",
        borderRadius   : 2,
        shadowColor    : "#000000",
        shadowOpacity  : 0.3,
        shadowRadius   : 1,
        shadowOffset   : {
            height: 1,
            width : 0.3,
        },
        margin         : 3
    },
    touchable: {
        backgroundColor: 'white',
        alignItems     : 'flex-start',
        justifyContent : 'flex-start',
        height         : 75
    },
    column   : {
        flex           : 1,
        backgroundColor: 'white',
        alignItems     : 'center',
        justifyContent : 'center'
    },
    text     : {
        marginTop: 10
    }
});

export default Styles;