import Navbar from "./components/Navbar";

const App = () => {
    const data = async function getData() {
        const request = await fetch('https://66e526db5cc7f9b6273c6ab5.mockapi.io/users');
        const response = await request.json();
        return response;
    }
    return (
        <>
        <div className="flex flex-col justify-start items-center">
            <Navbar Data = {data} />
        </div>
            <div className="h-screen w-screen flex justify-center items-center bg-[#f5f5f5]">
                <div className="h-[50%] w-[30%] flex justify-center items-center shadow-md bg-white rounded-md hover:h-[51%] hover:w-[31%]">
                    <form action="" className="h-[80%] w-[80%] flex flex-col justify-center items-center gap-4">
                         <input type="text" name="" className="p-3 w-full bg-[#f8f8f8] rounded-md outline-none focus:border-2 hover:border-purple-500 font-bold " id="" placeholder="Name" />
                         <input type="tel" name="" className="p-3 w-full bg-[#f8f8f8] font-bold rounded-md outline-none focus:border-2 hover:border-purple-500" id="" placeholder="Phone"/>
                        <button className="p-3 bg-purple-500 w-full text-white rounded-md font-bold"> Submit</button>
                    </form>
                </div>
            </div>
        </>
        
    )   
}

// function App() {
//     return (
//         <h1 className="bg-purple-500">
//             Hello
//         </h1>
//     )
// }
export default App;