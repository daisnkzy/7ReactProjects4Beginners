import React from 'react';
import { useState } from 'react';
import './index.scss';
const faqs = [
  {
    id: 1,
    q: '为什么你的才华如此出众横溢，惊艳世人？',
    a: '自信+坚韧+不怕失败+勇敢+好学+有效的策略+与生俱来的魅力',
  },
  {
    id: 2,
    q: '为什么你的才华如此出众横溢，惊艳世人？',
    a: '自信+坚韧+不怕失败+勇敢+好学+有效的策略+与生俱来的魅力',
  },
  {
    id: 3,
    q: '为什么你的才华如此出众横溢，惊艳世人？',
    a: '自信+坚韧+不怕失败+勇敢+好学+有效的策略+与生俱来的魅力',
  },
];

const Panel = ({ faq }) => {
  //传递props要用{}括起来！
  const [show, setShow] = useState(false);
  const handleShowCase = () => {
    setShow(!show);
  };
  return (
    <div key={faq.id} className="panel">
      <div className="faq">
        <h4>{faq.q}</h4>
        <button onClick={handleShowCase}>{show ? '-' : '+'}</button>
      </div>
      {show && <p>{faq.a}</p>}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>项目2:FAQ</h1>
      <div className="container">
        <h2>常见问题</h2>
        <div className="section">
          {faqs.map((faq) => (
            <Panel key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
