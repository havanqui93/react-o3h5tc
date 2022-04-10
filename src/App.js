import React, { useRef, useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [input, setInput] = useState('');

  const refInput = useRef();
  useEffect(() => {
    console.log(refInput);
    refInput.current.focus();
  }, []);

  return (
    <div>
      <h1>useRef Tutorials</h1>
      <input ref={refInput} type="text" value={input} />
    </div>
  );
}
