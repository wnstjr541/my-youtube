import axios from 'axios';
import React from 'react';
import { useState } from 'react';

function Youtube(props) {

  
  const test = []
    const url =  `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&key=${props}`;
    axios.get(url)
    .then(function(response) {
      test = response.data;
        console.log("성공");
    })
    .catch(function(error) {
        console.log("실패");
    })
  
}

export default Youtube;

// function MostPopular(props) {

//   const [popular, setPopular] = useState(null);
  
//   const url =  `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&key=${props.key}`;
//   axios.get(url)
//   .then(function(response) {
//       setPopular(response.data);
//       console.log("성공");
//   })
//   .catch(function(error) {
//       console.log("실패");
//   })

//   return popular;
  
// }


// function Search(props) {
//   const [search, setSearch] = useState(null);
  
//   const url =   `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${props.query}&type=video&key=${props.key}`;
//   axios.get(url)
//   .then(function(response) {
//       setSearch(response.data);
//       console.log("성공");
//   })
//   .catch(function(error) {
//       console.log("실패");
//   })
//   console.log(search)


//   // const response = await fetch(
   
//   //   this.getRequestOptions
//   // );
//   // const result = await response.json();
//   // return result.items.map(item => ({ ...item, id: item.id.videoId }));
// }


// export default MostPopular;

