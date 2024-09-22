    import axios from "axios";

    const api = "https://66e526db5cc7f9b6273c6ab5.mockapi.io"

    const getProject = () => axios.get(`${api}/projects`)
    const addProject = (projectData) => axios.post(`${api}/projects/`, projectData)


    export { getProject, addProject } 