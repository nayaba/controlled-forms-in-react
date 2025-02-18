import './App.css'
import { useState } from 'react'
import LoginForm from './LoginForm'
import ToDoList from './ToDoList'

const App = () => {

  const [formData, setFormData] = useState('')

  const handleChange = (e) => {
    console.log('event: ', e.target.value)
    setFormData(e.target.value)
  }

  return (
    <>
      {/* <label for="">City: </label>
      <input 
        type="text" 
        value={formData} 
        onChange={handleChange}
      /> */}
      {/* <LoginForm /> */}
      <ToDoList />
    </>
  )
}

export default App