import { useState } from 'react'
import './App.css'
import InventoryList from './components/InventoryList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InventoryList />
    </>
  )
}

export default App
