const Navbar = () => {
    return (
        <>
                        <div className="h-screen w-screen flex flex-col justify-center items-center bg-purple-100">
                <div className="h-screen w-[90%] flex flex-col justify-start items-center">
                    <div className="h-[4rem] w-full bg-blue-500 flex flex-row justify-between items-center">
                        <div className="h-[3rem] w-[20%] font-bold text-white text-2xl flex flex-col justify-center items-center font-sans">
                            <h1>Vasantha Krishnan</h1>
                        </div>
                        <div>
                            <ul className=" h-[3rem] w-[30%] flex flex-row gap-3 font-bold text-white justify-center items-center text-xl font-sans">
                                <li className="hover:cursor-pointer bg-blue-400 p-1 rounded-md">Profile</li>
                                <li className="hover:bg-blue-400 hover:cursor-pointer  p-1 text-white hover:rounded-md">Projects</li>
                                <li className="hover:bg-blue-400 hover:cursor-pointer p-1 text-white hover:rounded-md">Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default  Navbar;