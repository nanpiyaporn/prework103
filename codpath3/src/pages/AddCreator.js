import {useState} from 'react'
import supabase from "../client"
import {useNavigate} from 'react-router-dom'

const Create =() => {

    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')
    const [error, setError] = useState(null)
    const [message, setMessage] = useState('')
    

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        if (!name || !description || !url ) {
          setError('Please fill in all fields')
          return
        }
    
        const { data, error } = await supabase
          .from('creators/')
          .insert([
            { name, description, url }
          ])
    
        if (error) {
          setError('An error occurred while saving the crewmate')
          console.error(error)
        }
    
        if (data) {
          setTitle('')
          setName('')
          setDescription('')
          setUrl('')
          setError(null)
          setMessage('Successfully created a new crewmate!') // Add this line
          setTimeout(() => {
            setMessage('') // Clear the message after 3 seconds
            navigate('/')
          }, 3000)
        }
      }
    
      return (
        <div className="page create">
          <form onSubmit ={handleSubmit}>
            <label htmlFor = "name">Name</label>
            <input 
              type = "text" 
              id = "name" value = {name} onChange = {e => setName(e.target.value)} 
              />
    
            <label htmlFor = "title">Title</label>
            <input 
              type = "text" 
              id = "description" value = {description} onChange = {e => setDescription(e.target.value)} 
              />
    
            <label htmlFor = "url">Color</label>
            <input 
              type = "text" 
              id = "url" value = {url} onChange = {e => setUrl(e.target.value)} 
              />
    
           
            <button type = "submit">Create</button>
            {formError && <p className="form-error">{formError}</p>}
            {message && <p className="form-success">{message}</p>} 
          
    
          </form>
        </div>
      )
    }
    
    export default Create

