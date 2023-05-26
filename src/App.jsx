import { useState } from 'react';
import React from 'react';
import './index.scss';
function App() {
  const pic = [
    'https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',

    'https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',

    'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  ];
  // const [img,setImg] = useState(pic[0]);
  const [count, setCount] = useState(0); //这里的img与pic不能同名，因为是const定义的
  //不使用img来表示pic[0],而是使用count表示0.这样就可以轻松地通过改变count来切换pic
  const goPrevious = () => {
    count === 0 ? setCount(2) : setCount(count - 1);
  };
  const goNext = () => {
    count === 2 ? setCount(0) : setCount(count + 1);
  };
  return (
    <div className="App">
      <h1>项目1:图片轮播</h1>
      <div className="form">
        <div className="left" onClick={goPrevious}>
          ⇦
        </div>
        <img src={pic[count]} alt="" />
        <div className="right" onClick={goNext}>
          ⇨
        </div>
      </div>
    </div>
  );
}

export default App;
