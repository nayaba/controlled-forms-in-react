import { useState } from 'react'

const LoginForm = () => {

    const [title, setTitle] = useState('')
    const [error, setError] = useState('')
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        password: '',
    })

    const handleChange = (e) => {
        setFormData({...formData,
            [e.target.name]: e.target.value,
        })
        if (e.target.name === 'password') {
            if (e.target.value.length < 6) {
                setError('password too short')
            } else {
                setError('')
            }
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitle(`Your name is: ${formData.firstName} ${formData.lastName}`)
    }

    return (
        <>
            <h2>{title}</h2>
            <form onSubmit={handleSubmit}>
            <label for="">First Name: </label>
            <input 
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                name='firstName'
                />
             <label for="">Last Name: </label>
             <input 
                type="text" 
                value={formData.lastName}
                onChange={handleChange}
                name='lastName'
                />
             <label for="">Password: </label>
             <input 
                type="password" 
                value={formData.password}
                onChange={handleChange}
                name='password'
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
             <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default LoginForm