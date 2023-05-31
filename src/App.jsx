import React, { useMemo, useState } from 'react';
import './index.scss';
function App() {
  const [weight, setWeight] = useState(62);
  const [height, setHeight] = useState(176);
  //useMemo钩子在依赖项不改变情况下可以缓存计算结果，使得重新渲染时不需要重新运算。提升了性能。
  const result = useMemo(() => ((weight / height ** 2) * 10000).toFixed(1), [weight, height]);
  return (
    <div className="App">
      <div className="container">
        <h1>项目7:BMI计算</h1>
        <form action="">
          体重：{weight} kg
          <input type="range" min="20" max="100" value={weight} onChange={(e) => setWeight(e.target.value)} />
          身高：{height} cm
          <input type="range" min="100" max="200" value={height} onChange={(e) => setHeight(e.target.value)} />
        </form>
        <div className="result">
          <p>你的BMI为:</p>
          {/* <button>{((weight / height ** 2) * 10000).toFixed(1)}</button> */}
          <button>{result}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
