import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video }) => {
  return(
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        type="text/html"
        width="80%"
        height="700px"
        src={`https://www.youtube.com/embed/${video.id}`}
      ></iframe>
      <div className={styles.titlebox}>
        <h2 className={styles.title}>{video.snippet.title}</h2>
        <h3 className={styles.chtitle}>{video.snippet.channelTitle}</h3>
        <pre className={styles.description}>{video.snippet.description}</pre>
      </div>
    </section>
  );

}

export default VideoDetail;
