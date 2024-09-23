    import axios from "axios";

    const api = "https://66e526db5cc7f9b6273c6ab5.mockapi.io"

    const getProject = () => axios.get(`${api}/projects`)
    const addProject = (projectData) => axios.post(`${api}/projects`, projectData)
    const editProject = (id, projectData) => axios.put(`${api}/projects/${id}`, projectData)
    const deleteProject = (id) => axios.delete(`${api}/projects/${id}`)


    export { getProject, addProject, editProject, deleteProject } 