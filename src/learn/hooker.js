import React, { useState } from "react";

export default function Hooker() {
  const [count, setCount] = useState(new Testingg());
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

function Testingg() {
  return <p>1</p>;
}
