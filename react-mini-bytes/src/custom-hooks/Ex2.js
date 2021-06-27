import { useEffect, useState } from "react";

function useLocalStorageState(key, defaultValue) {
  const [state, setState] = useState(() => {
    let value;
    try {
      value = JSON.parse(localStorage.getItem(key) || String(defaultValue));
    } catch (e) {
      value = defaultValue;
    }
    return value;
  });

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [state]);

  return [state, setState];
}

function Ex2() {
  const [count, setCount] = useLocalStorageState("my-count", 0);
  const increment = () => setCount((prevCount) => prevCount + 1);
  return (
    <div>
      <button onClick={increment}>{count}</button>
    </div>
  );
}

export default Ex2;
