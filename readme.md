```js
"use client"

import { createGlobalState, useGlobalState } from "natgeo7com-npm-react-global-state"

const g = createGlobalState(1)

function A() {
  const [c, setC] = useGlobalState(g)
  function h() { setC(c + 1) }
  return (
    <>
      <div>{c}</div>
      <button onClick={h}>go</button>
    </>
  )
}

function B() {
  const [c, setC] = useGlobalState(g)
  function h() { setC(c + 1) }
  return (
    <>
      <div>{c}</div>
      <button onClick={h}>go</button>
    </>
  )
}

export { A, B }
```