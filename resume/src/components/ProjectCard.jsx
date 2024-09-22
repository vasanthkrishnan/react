import React, { useState } from 'react'
import { Pencil } from 'lucide-react'

export const ProjectCard = ({ title, tools, duration, id}) => {

  const [delProject, setDelProject] = useState(false)
  return (
        <>
          
            <div className="h-[50%] w-3/12 bg-[#f8f8f8] rounded-lg shadow-lg flex flex-col justify-center items-center">
                <div className="h-[40%] w-[90%] flex justify-center items-center bg-[#343434] rounded-md"></div>
                  <div className="h-[40%] w-[90%] flex flex-col justify-center items-center rounded-md">
                    <div className="h-[30%] w-[90%] text-black font-bold flex justify-start items-center flex-wrap">
                      Title: { title }
                    </div>
                    <div className="h-[25%] w-[90%] text-black font-bold flex justify-start items-center flex-wrap">
                      Tools: { tools}
                    </div>
                    <div className="h-[15%] w-[90%] text-black font-bold flex justify-start items-center flex-wrap">
                      Duration: { duration }
                    </div>
                    <div className="h-[10%] w-[90%] flex flex-row gap-2 justify-center mt-3 items-center border-t border-[#343434]">
                      <div className="h-[90%] w-3/6 flex justify-start items-center mt-10">
                        <a href="" className="hover:text-red-600 hover:cursor-pointer">read more</a>
                      </div>
                      <div className="h-[90%] w-3/6 flex justify-end items-center mt-10">
                        <Pencil onClick={() => setDelProject(false) } className="hover:cursor-pointer" />
                      </div>
                    </div>
                  </div >
              </div>
              {
                  delProject && (
                    <>
                        <div className="h-screen w-screen flex justify-center items-center bg-[#efebeb]">
                        <div className="h-[50%] w-[35%] flex justify-center items-center bg-[#f8f8f8] rounded-md shadow-md">
                            <form className='h-[90%] w-[80%] flex flex-row'>
                            <div className='h-full w-full bg-[#343434] flex flow-row justify-center items-center rounded-md shadow-md'>
                                <div className='h-[70%] w-[80%]'>
                                    <input type="text" className='text-gray-400 w-full h-[20%] border-[#f8f8f8] border-b p-3 text-xl focus:outline-none bg-[#343434]' placeholder='title' id="" />
                                    <input type="text" className='text-gray-400 w-full h-[20%] border-[#f8f8f8] border-b p-3 text-xl focus:outline-none bg-[#343434]' placeholder='tools' id="" />
                                    <input type="text" className='text-gray-400 w-full h-[20%] border-[#f8f8f8] border-b p-3 text-xl focus:outline-none bg-[#343434]' placeholder='duration' id="" />
                                    <div className=' h-[20%] w-full flex flex-row gap-3 justify-center items-center'>
                                      <button type='submit' className=' h-full w-1/2 bg-[#f8f8f8] mt-[7rem] font-bold text-2xl rounded-md hover:cursor-pointer hover:bg-red-600 hover:text-[#efebeb]'>Delete</button>
                                        <button type='submit' className=' h-full w-1/2 bg-[#f8f8f8] mt-[7rem] font-bold text-2xl rounded-md hover:cursor-pointer hover:bg-green-500 hover:text-[#efebeb]'>Update</button>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                    </>
                  )
              }
        </>
  )
}

export default ProjectCard

