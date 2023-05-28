import React, { useState } from 'react';
const App2 = () => {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.todo.value === '') return;
    setTodos([...todos, e.target.todo.value]);
    e.target.reset();
  };
  const hadnleDelete = (i) => {
    setTodos(todos.filter((todo) => todo !== i));
    // 在 handleDelete 函数中，通过 todo 参数可以获取到当前正在删除的任务 ID，
    // （在 handleSubmit 函数中，当用户提交表单时，会触发一个事件，该事件有一个 e 参数
    // ，其中包含了表单中提交的数据。在这个函数中，
    // 通过 e.target.todo.value 可以获取到用户输入的任务文本，也就是任务 ID。）
    // 然后通过 todos.filter 函数过滤出当前列表中不包含该 ID 的任务，最终更新 todos 数组。
  };
  console.log(todos);

  return (
    <div className="App">
      <h1>项目4:待办清单</h1>
      <div className="container">
        <h2>Do Something</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="todo" />
          <button type="submit">+</button>
        </form>

        {todos.map((todo, index) => (
          <span className="todo" key={index}>
            {todo}{' '}
            <span className="delete" onClick={() => hadnleDelete(todo)}>
              {/* 传todo使上面写handleDelte也能用todos.map((todo, index)里面的todo */}❌
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default App2;
