
import { useEffect, useState } from "react"
import ProjectCard from "../components/ProjectCard"
import { getProject } from "../service/api"

// const projectData = [
//   {
//       title: "Vehicle Routing Problem with Time windows",
//       tools: "Html, Css, Javascript, Mongodb",
//       duration: "3-Months",
//       id : "1"
//   },
//   {
//     title: "Vehicle Routing Problem with Time windows",
//     tools: "Html, Css, Javascript, Mongodb",
//     duration: "3-Months",
//     id: "2"
//   },
//   {
//     title: "Vehicle Routing Problem with Time windows",
//     tools: "Html, Css, Javascript, Mongodb",
//     duration: "3-Months",
//     id: "3"
//   }
// ]
const Projects = () => {
const [projectData, setProjectData] = useState(null)
const fetchProject = async () => {
    try {
      const { data } = await getProject()
      setProjectData(data)
    } catch (error) {
        console.log(error)
    }
}

console.log(projectData)
useEffect(() => {
  fetchProject()
}, [])

if(!projectData) {
  return "No Project to Display"
}

  return (
    <>
      <div className="h-screen w-screen bg-[#efebeb] flex justify-center items-center">
        <div className="h-full w-[90%] flex flex-row flex-wrap justify-center items-center gap-8">
          {
            projectData.map((data, index) => (
                < ProjectCard title={ data.title } tools={ data. tools } duration={ data.duration } key={ index } id={ data.index} />
              ))}
        </div>
      </div>
    </>
  )
}

export default Projects