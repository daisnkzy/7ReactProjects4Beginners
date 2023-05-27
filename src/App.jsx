import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.scss';
function App() {
  const [quote, setQuote] = useState([]);
  const [count, setCount] = useState(0);
  const [quotes, setQuotes] = useState(null);
  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  const handleClick = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  // 使用fetch，监听count
  // useEffect(() => {
  //   fetch('https://type.fit/api/quotes')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setQuote(data[count]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [count]);

  //使用axios,监听count来更新谚语
  // useEffect(() => {
  //   axios
  //     .get('https://type.fit/api/quotes')
  //     .then((res) => {
  //       setQuote(res.data[count]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [count]); //设置当count改变时重新执行useEffect,但是这样使得每次生成都要请求一次http，很慢。

  //使用axios，从quotes里随机给一个quote
  useEffect(() => {
    axios
      .get('https://type.fit/api/quotes')
      .then((res) => {
        setQuotes(res.data);
        setQuote(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1>项目3:谚语生成</h1>
      <div className="container">
        <button onClick={handleClick}>生 成</button>
        <h2>{quote?.text}</h2>
        <i>——{quote?.author}</i>
      </div>
    </div>
  );
}

export default App;

// axios是异步请求，在它外面且在下面的代码不会等待它完成，
// 会直接开始运行，而异步请求体里面的内容会在其请求成功或者失败才执行相应的代码。
//这里必须使用{quote?.text}因为它会在访问对象时先进行类型检查，而{quote.text}直接访问对象属性，异步请求导致直接报错。
