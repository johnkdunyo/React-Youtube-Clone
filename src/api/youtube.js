import axios from 'axios';

const KEY = 'AIzaSyBOV0aG5IlFhfHoUgSQ2oWN5N6wxDBrCM8';

const youtube =  axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video',
    }
});


export default youtube;
