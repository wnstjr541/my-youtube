import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './app';
// import Youtube from './service/youtube';

// const youtube = new Youtube(process.env.REACT_APP_TUBE_API_KEY);
// ReactDOM.render(
//   <React.StrictMode>
//     <App youtube={youtube} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
