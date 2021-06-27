import { useEffect, useState } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

function Ex1() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const title = `You clicked ${count} time`;
  useDocumentTitle(title);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Ex1;
