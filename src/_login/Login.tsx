import {bg} from "../assets"
import  {Link} from "react-router-dom"
const Login = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen "
     style={{backgroundImage: `url(${bg})`}}>
       <div>
        <p className="text-white w-[100px] h-[100px] bg-red-300">click here</p>
        <Link to="/user" >
            <div className="w-[200px] h-[100px] bg-white text-black text-center">
                User
            </div>
        </Link>
        <Link to="/admin">
            <div className="w-[200px] h-[100px] bg-black text-white text-center">
                Admin
            </div>
        </Link>
       </div>
    </div>
  )
}

export default Login