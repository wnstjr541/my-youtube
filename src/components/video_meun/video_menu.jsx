import React from 'react';
import styles from './video_menu.module.css';
import { faHome, faCompass, faFolder ,faClock , faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const VideoMenu = () => {
    return (
        <ul className={styles.container}>
          <li><a href="#"><FontAwesomeIcon className={styles.icons} icon={faHome} />홈 </a></li>
          <li><a href="#"><FontAwesomeIcon className={styles.icons} icon={faCompass} />탐색</a></li>
          <li><a href="#"><FontAwesomeIcon className={styles.icons} icon={faFolder} />구독</a></li>
          <li><a href="#"><FontAwesomeIcon className={styles.icons} icon={faClock} />시청기록</a></li>
          <li><a href="#"><FontAwesomeIcon className={styles.icons} icon={faPlayCircle} />Music</a></li>
        </ul>
      );
    };

export default VideoMenu;