import { Codepen, Pen } from "lucide-react"
import Navbar from "../components/Navbar"

const projectData = [
  {
      title: "Vehicle Routing Problem with Time windows",
      tools: "Html, Css, Javascript, Mongodb",
      duration: "3-Months"
  },
  {
    title: "Vehicle Routing Problem with Time windows",
    tools: "Html, Css, Javascript, Mongodb",
    duration: "3-Months"
  },
  {
    title: "Vehicle Routing Problem with Time windows",
    tools: "Html, Css, Javascript, Mongodb",
    duration: "3-Months"
  }
]
const Projects = () => {
  return (
    <>
        <div className="h-screen w-screen flex flex-row flex-wrap justify-center items-center gap-8">
          {
            projectData.map((data, index) => (
              <div key={ index } className="h-[50%] w-3/12 bg-[#efebeb] rounded-lg shadow-lg flex flex-col justify-center items-center">
                <div className="h-[40%] w-[90%] flex justify-center items-center bg-[#343434] rounded-md"></div>
                  <div className="h-[40%] w-[90%] flex flex-col justify-center items-center rounded-md">
                    <div className="h-[30%] w-[90%] text-black font-bold flex justify-start items-center flex-wrap">
                      Title: { data.title}
                    </div>
                    <div className="h-[25%] w-[90%] text-black font-bold flex justify-start items-center flex-wrap">
                      Tools: { data.tools}
                    </div>
                    <div className="h-[15%] w-[90%] text-black font-bold flex justify-start items-center flex-wrap">
                      Duration:  { data.duration }
                    </div>
                    <div className="h-[10%] w-[90%] flex flex-row gap-2 justify-center mt-3 items-center border-t border-[#343434]">
                      <div className="h-[90%] w-3/6 flex justify-start items-center mt-10">
                        <a href="" className="hover:text-red-600 hover:cursor-pointer">read more</a>
                      </div>
                      <div className="h-[90%] w-3/6 flex justify-end items-center mt-10">
                        <Pen className="hover:cursor-pointer" />
                      </div>
                    </div>
                  </div >
              </div>
              ))}
        </div>
    </>
  )
}

export default Projects