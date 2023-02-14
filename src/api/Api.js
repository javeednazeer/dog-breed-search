import axios from "axios";

var endpoint = 'https://api.thedogapi.com/';
var urlLast = '&limit=10&page=0&api_key=live_uPaSFVaBiANQw5XpPkciZz69jHSd8BRMBpqnWLKJjekRM4QouSn5VTyP0GRDvUAr';
var imageUrl = endpoint + 'v1/images/';


export const getAllDogBreeds = (query) => {
    return axios.get(endpoint + 'v1/breeds/search?q=' + query + urlLast)
        .then(res => { return res })
        .catch(err => { return err });
}

export const getImageById = (imageId) => {
    return axios.get(imageUrl + imageId)
        .then(res => { return res })
        .catch(err => { return err });
}