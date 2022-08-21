import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoMenu from './components/video_meun/video_menu'
import YoutubeApi from './service/youtubeApi';
import axios from 'axios';

function App() {
  const [videos, setVideos] = useState([]);
  const [search, setSearch]   = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [menu, setmenu] = useState(false);
  
  const selectVideo = video => {
    setSelectedVideo(video);
    setmenu(true)
  };

  // 나타나게 하는거
  useEffect(() => {  
    if(search === ""){
      const url =  `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&key=${process.env.REACT_APP_TUBE_API_KEY}`;
      axios.get(url)
      .then((response) => {
          setVideos(response.data.items);
          console.log("성공");
      })
      .catch((error) => {
          console.log("실패");
      })
      setSelectedVideo(null);
    } else {
      const url =  `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${search}&type=video&key=${process.env.REACT_APP_TUBE_API_KEY}`;
      axios.get(url)
      .then((response) => {
        console.log(response.data.items)
          setVideos(response.data.items);
          console.log("성공");
      })
      .catch((error) => {
          console.log("실패");
      })
      setSelectedVideo(null);
      setSearch("")
    }
  },[search]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={setSearch} mostPopular={videos}/>
      <section className={styles.content}> 
        {!selectedVideo && (
          <VideoMenu />
        )}
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}

        <div className={styles.list}>
          <VideoList
            search={search}
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
