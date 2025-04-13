```js
"use client"

import { GlobalState, useGlobalState } from "natgeo7com-npm-react-global-state"

const g = new GlobalState(1)

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