import React, { useState } from 'react';
import Menu from './components/Menu';
import Video from './components/Video';

const videos = {
  deer: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  snail: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cat: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
};
//videos要放在外面。在 React 中，组件内部的 state 数据需要声明在组件外部，这样才能与其他组件进行共享。

function App() {
  const [videoSrc, setVideoSrc] = useState(videos['deer']); //这里useState('deer')与useState(video['deer'])不同！一个是deer，一个是链接！

  const videoNames = Object.keys(videos);
  const onSelectVideos = (video) => {
    setVideoSrc(videos[video]);
  };
  return (
    <div className="App">
      <h1>项目6:视频播放</h1>
      <Menu videoValues={videoNames} handleClick={onSelectVideos} />
      <Video videoSrc={videoSrc} />
    </div>
  );
}

export default App;
