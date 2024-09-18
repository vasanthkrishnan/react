import { User } from 'lucide-react'
import { useRef } from 'react'

const Contact = () => {

  const firstNameref = useRef(null)
  const lastNameref = useRef(null)
  const emailref = useRef(null)
  const phoneref = useRef(null)
  const messageref = useRef(null)

  const contactReport = (e) => {

    e.preventDefault()

    console.log(firstNameref.current.value)
    console.log(lastNameref.current.value)
    console.log(emailref.current.value)
    console.log(phoneref.current.value)
    console.log(messageref.current.value)
  }
  return (
    <>
         <div className="h-screen w-screen flex justify-center items-center">
            <div className="h-[60%] w-[30%] flex justify-center items-center bg-[#f8f8f8] rounded-md shadow-md">
              <form action="" className="h-full w-full flex flex-col justify-center items-center space-y-5" onSubmit={ contactReport }>
                <div className="h-[3rem] w-[17rem] flex flex-row justify-center items-center space-x-4">
                  <input ref={ firstNameref } className="w-[8rem] h-[3rem] p-3 border-2 text-xl rounded-md" type="text" name="" placeholder="First-name" id="" />
                  <input ref={ lastNameref } type="text" className="w-[8rem] h-[3rem] p-3 border-2 text-xl rounded-md" name="" placeholder="Last-name" id="" />
                </div>
                  <input ref={ emailref } type="email" className="h-[3rem] w-[17rem] p-3 border-2 text-xl rounded-md" placeholder="email" name="" id="" />
                  <input ref={ phoneref } type="tel" className="h-[3rem] w-[17rem] p-3 border-2 text-xl rounded-md" name="" placeholder="Phone" id="" />
                  <input ref={ messageref } type="text" className="h-[3rem] w-[17rem] p-3 border-2 text-xl rounded-md text-gray-500" name="" placeholder="Message" id="" />
                  <button className="h-[3rem] w-[17rem] border-b bg-blue-500 font-bold text-xl text-white rounded-md hover:bg-blue-600">Send</button>
              </form>
            </div>
         </div>
    </>
  )
}

export default Contact
