/**
 * Created by dragfire on 02-10-2016.
 */

exports.getPlacesAutoComplete = function (text, data) {
    let url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${text}&location=${data.location}&radius=${data.radius}&language=en&key=${data.key}&rankby=${data.rankby}`;
    return fetch(url);
};

exports.getPlacesNearBy = function (data) {
    let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${data.location}&radius=${data.radius}&type=${data.type}&key=${data.key}`;
    return fetch(url);
};
