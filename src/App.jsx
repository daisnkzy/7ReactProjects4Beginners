import React, { useEffect, useState } from 'react';
import './index.scss';

function App() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  /*******/
  async function fetchResults(query) {
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${query}`);
      const json = await response.json();
      return json.items || [];
    } catch (e) {
      throw new Error(e);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await fetchResults(query);
    console.log(result);
    setResult(results);
  };
  //随参数改变的URL通过异步函数获取数组，这样就能在提交表单的handleSubmit里调用函数拿到数组，再set它。
  /*******/
  return (
    <div className="App">
      <h1>项目5:用户搜索</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
          <button type="submit">搜索</button>
        </form>
        <h2>结果</h2>
        <ol>
          {result.map((user) => (
            <li key={user.login}>
              <img src={user.avatar_url} />
              <a href={user.html_url} target="_blank">
                {user.login}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
