import React, { useState, useEffect } from 'react'
import api from './services/api'
import Header from './components/Header'

function App() {
    const [ projects, setProjects ] = useState([])

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data)
        })
    }, [ ])

    async function handleAddProject() {
        // setProjects([...projects, 'Project3'])

        const response = await api.post('projects', {
            title: `New Project ${Date.now()}` , 
            owner: "Sergio"
        })

        const project = response.data

        setProjects([... projects, project])
    }
 
    return (
        <div>
        <Header></Header>

        <ul>
            {projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Add Project</button>
        </div>
    ) 
}

export default App