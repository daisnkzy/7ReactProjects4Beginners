import React from 'react';
// import './index.scss';
import { useState } from 'react';
const App = () => {
  const [input, setInput] = useState('');
  const [task, setTask] = useState([]);

  // 使用onChange传递值
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === '') return;
    setTask([...task, input]);

    setInput('');
  };
  console.log(task);
  return (
    <div className="App">
      <h1>项目4:待办清单</h1>
      <div className="container">
        <h2>Do Something</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder="New Task?" onChange={(e) => setInput(e.target.value)} value={input} />
          <button type="submit">+</button>
        </form>
        {task.map((t, i) => (
          <div key={i}>{t}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
