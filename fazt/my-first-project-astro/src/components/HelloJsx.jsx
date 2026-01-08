import React, { useState } from 'react'

function HelloJsx() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Hello React</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        click me!
      </button>
    </div>
  )
}

export default HelloJsx