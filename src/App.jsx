import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calender from './component/Calender'

function App() {
  const [count, setCount] = useState(0)
  const events = [
    {
      title: "The Title",
      start: "2023-03-01T08:00:00",
      end: "2023-03-03T09:00:00",
    },
    {
      title: "The Title",
      start: "2023-03-25T08:00:00",
      end: "2023-03-27T09:00:00",
    },
    {
      title: "The Title",
      start: "2023-03-15T08:00:00",
      end: "2023-03-16T09:00:00",
    }
  ];
  return (
    <div className="App">
      <Calender events={events} />
    </div>
  )
}

export default App
