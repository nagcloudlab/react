import React, { useEffect, useState } from "react";

function UseEffect(props) {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  //   useEffect(() => {
  //     console.log("useEffect");
  //   });

  //   useEffect(() => {
  //     console.log("useEffect");
  //   }, []);

  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //       .then((response) => response.json())
  //       .then((json) => setItems(json));
  //   }, [resourceType]);

  useEffect(() => {
    console.log("Effect");
    return () => {
      console.log("Cleanup");
    };
  }, [resourceType]);

  return (
    <div>
      <div>
        <button onClick={(e) => setResourceType("posts")}>Posts</button>
        <button onClick={(e) => setResourceType("comments")}>Comments</button>
        <button onClick={(e) => setResourceType("users")}>Users</button>
      </div>
      <h1>{resourceType}</h1>
      <br />
      {items.map((item) => (
        <pre>{JSON.stringify(item)}</pre>
      ))}
    </div>
  );
}

export default UseEffect;
