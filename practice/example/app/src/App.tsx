import React        from 'react'
import { useState } from 'react'

const App = () => {
  const [time, setTime] = useState<number>(0)

  setInterval(() => setTime(time + 1), 1000)

  return <h1>{time}</h1>
}

export default App
