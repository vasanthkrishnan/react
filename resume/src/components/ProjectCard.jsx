import React, { useState } from 'react'
import { Check, MessageCircleWarning, Pencil, Trash } from "lucide-react"
import { Toaster, toast } from 'sonner'
import { editProject, deleteProject } from '../service/api'

export const ProjectCard = ({ title, tools, duration, id, fetchProject}) => {

  const [titleState, setTitleState] = useState(title)
  const [toolsState, setToolsState] = useState(tools)
  const [durationState, setDurationState] = useState(duration)
  const [visible, setVisible] = useState(false)

  const handleEdit = async (e) => {
    e.preventDefault()
    const projectData = {
      title: titleState,
      tools: toolsState,
      duration: durationState
    }
    try {
        const response = await editProject(id, projectData)
        console.log(response.status)
        if(response.status === 200) {
          console.log("updated")
          toast('Project updated !', {
            className: 'bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
            icon: <Check />,
        });
        fetchProject()
        }
    } catch (error) {
      toast.error(error)
      toast('Error', {
          className: 'bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
          icon: <MessageCircleWarning />,
      });
    }
    setVisible(false)

  }
  const handleDelete = async () => {
      try {
          const response = await deleteProject(id)
          console.log(response.status)
          if(response.status === 200) {
            console.log("deleted")
            toast('Project deleted !', {
              className: 'bg-gradient-to-r from-red-500 to-pink-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
              icon: <Trash />,
          });
          fetchProject()
          }
      } catch (error) {
          console.log(error)
          toast('Error', {
            className: 'bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
            icon: <MessageCircleWarning />,
        });
      }
  }
  return (
        <>
          
            <div className="h-[50%] w-3/12 bg-[#f8f8f8] rounded-lg shadow-lg flex flex-col justify-center items-center">
                <div className="h-[40%] w-[90%] flex justify-center items-center bg-[#343434] rounded-md"></div>
                  <div className="h-[40%] w-[90%] flex flex-col justify-center items-center rounded-md">
                    <div className="h-[30%] w-[90%] text-black flex justify-start items-center flex-wrap">
                      Title: { title }
                    </div>
                    <div className="h-[25%] w-[90%] text-black  flex justify-start items-center flex-wrap">
                      Tools: { tools}
                    </div>
                    <div className="h-[15%] w-[90%] mt-3 text-black flex justify-start items-center flex-wrap">
                      Duration: { duration }
                    </div>
                    <div className="h-[10%] w-[90%] flex flex-row gap-2 justify-center mt-3 items-center border-t border-[#343434]">
                      <div className="h-[90%] w-3/6 flex justify-start items-center mt-10">
                        <a href="" className="hover:text-red-600 hover:cursor-pointer">read more</a>
                      </div>
                      <div className="h-[90%] w-3/6 flex justify-end items-center mt-10">
                        <Pencil onClick={() => setVisible(true) } className="hover:cursor-pointer" />
                      </div>
                    </div>
                  </div >
              </div>
              {
                  visible && (
                    <>
                        <div className="h-screen w-screen flex justify-center items-center bg-[#efebeb]">
                        <div className="h-[50%] w-[35%] flex justify-center items-center bg-[#f8f8f8] rounded-md shadow-md">
                            <form className='h-[90%] w-[80%] flex flex-row' onSubmit={ handleEdit }>
                            <div className='h-full w-full bg-[#343434] flex flow-row justify-center items-center rounded-md shadow-md'>
                                <div className='h-[70%] w-[80%]'>
                                    <input type="text" className='text-gray-400 w-full h-[20%] border-[#f8f8f8] border-b p-3 text-xl focus:outline-none bg-[#343434]' value={ titleState } onChange={ (e) => setTitleState(e.target.value)} placeholder='title' id="" />
                                    <input type="text" className='text-gray-400 w-full h-[20%] border-[#f8f8f8] border-b p-3 text-xl focus:outline-none bg-[#343434]' value={ toolsState } onChange={(e) => setToolsState(e.target.value)} placeholder='tools' id="" />
                                    <input type="text" className='text-gray-400 w-full h-[20%] border-[#f8f8f8] border-b p-3 text-xl focus:outline-none bg-[#343434]' value={ durationState } onChange={(e) => setDurationState(e.target.value)} placeholder='duration' id="" />
                                    <div className=' h-[20%] w-full flex flex-row gap-3 justify-center items-center'>
                                      <button type='button' onClick={ handleDelete } className=' h-full w-1/2 bg-[#f8f8f8] mt-[7rem] font-bold text-2xl rounded-md hover:cursor-pointer hover:bg-red-600 hover:text-[#efebeb]'>Delete</button>
                                      <button type='submit' className=' h-full w-1/2 bg-[#f8f8f8] mt-[7rem] font-bold text-2xl rounded-md hover:cursor-pointer hover:bg-green-500 hover:text-[#efebeb]' >Update</button>
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

