import axios from 'axios';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { apiConfig } from './config';

axios.post('http://inageo-development.us-west-2.elasticbeanstalk.com/api/token/', {
    username: 'alan',
    password: '12345'
}).then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
});

const getAccessToken = async () => {
    try {
        const retrievedItem = await AsyncStorage.getItem('tokenData');
        if (retrievedItem !== null) {
            const item = JSON.parse(retrievedItem);
            console.log(item);
            const authorization = `Bearer ${item.token}`;
            // We have data!!
            return authorization;
        } return null;
    } catch (error) {
        // Error retrieving data
    }
};

const loginClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        Accept: 'application/json',
    },
});

const getLoginClient = async () => {
    loginClient.defaults.headers.common.Authorization = await getAccessToken();
    return loginClient;
};

export default getLoginClient;

function getUrl(config) {
    if (config.baseURL) {
        return config.url.replace(config.baseURL, '');
    }
    return config.url;
}