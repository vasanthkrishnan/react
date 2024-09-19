import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'


const Navbar = () => {
    const userData = useSelector(selectUser)
    return (
        <div>
            { userData?.name || "Not available"}
        </div>
    )
}

export default Navbar
