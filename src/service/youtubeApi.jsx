import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const YoutubeApi =  () => {
    const [popular, setPopular] = useState(null);
    const [searchData, setSearchData] = useState(null);

    useEffect(()=>{
        const url =  `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&key=${process.env.REACT_APP_TUBE_API_KEY}`;
        axios.get(url)
        .then(function(response) {
            setPopular(response.data);
            console.log("성공");
        })
        .catch(function(error) {
            console.log("실패");
        })
    })

    useEffect(()=>{
        const url =   `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&type=video&key=${process.env.REACT_APP_TUBE_API_KEY}`;
        axios.get(url)
        .then(function(response) {
            setSearchData(response.data);
            console.log("성공");
        })
        .catch(function(error) {
            console.log("실패");
        })
    })

    return {popular,searchData}

};

export default YoutubeApi;