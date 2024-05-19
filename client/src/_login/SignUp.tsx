import {Link} from "react-router-dom"
import {bg} from "../assets/login"
const Register = () => {
  return (
    
        <>
      <div className="flex items-center justify-center w-screen h-screen "
        style={{ backgroundImage: `url(${bg})` }}>
        <div className=" w-[500px] h-[400px] px-[40px] py-[25px]  rounded-[25px] border  border-[2px] backdrop-blur-3xl  text-white font-poppins ">
          <form  >
            <div className="text-[25px] text-center">Register</div>
            <div className="text-center border-b rounded-[30px] border-t">
              Keep it all together and you'll be fine
            </div>
            <div className="mt-[18px]">
              <label className="block mb-[5px] hover:text-yellow-300">Email or Phone</label>
              <input type="text" className="w-full mb-[10px] text-slate-700" />
              <label className="block mb-[5px] hover:text-yellow-300 " htmlFor="">Password</label>
              <input type="password" className="w-full text-slate-700" />
            </div>
            <button className="block mt-[30px] text-center w-full py-[8px]  bg-slate-700 hover:font-bold hover:bg-slate-100 hover:text-slate-800 transition ease-linear " type="submit">Register</button>
            
          </form>

        </div>

      </div>
    </>
    
  )
}

export default Register