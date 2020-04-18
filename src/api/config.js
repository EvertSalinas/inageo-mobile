import axios from 'axios';

export default axios.create({
    baseURL: "http://inageo-development.us-west-2.elasticbeanstalk.com/api/",
    responseType: "json"
});