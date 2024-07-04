import React, {useState} from 'react'
export default function Button1() {
    const [count, setCount] = useState(0);
  
    const counterFunc = () => {
      setCount(count + 1);
    };
  
    return (
      <div>
        <p>{count}</p>
        <button onClick={counterFunc}>
          Press me!
        </button>
      </div>
    );
  }
