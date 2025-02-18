import { useState } from 'react'

const ToDoList = () => {

    const initialState = {
        taskName: '',
        category: ''
    }

    const [tasks, setTasks] = useState([])
    const [formData, setFormData] = useState(initialState)

    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTasks([...tasks, formData])
        setFormData(initialState)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <label>Task name:</label>
                <input 
                    type="text"
                    value={formData.taskName} 
                    onChange={handleInputChange}
                    name='taskName'
                />

                <label>Category:</label>
                <input 
                    type="text"
                    value={formData.category} 
                    onChange={handleInputChange}
                    name="category"
                />

                <button type="submit">Submit</button>
            </form>
            <h3>My Tasks</h3>
            {tasks.map((task) => (
                <p>{task.taskName}</p>
            ))}
        </>
    )
}

export default ToDoList