import {audiA5_15} from "../assets/audiA5/"
import {bg_1,bg_2} from "@/assets/hplat_asset/img/background"
const SignIn = () => {
  return (
    <div className="box-border flex items-center justify-center w-screen h-screen bg-cover item font-poppins"
      style={{ backgroundImage :`url(${bg_2})`}} >
      <form className=" flex items-center flex-col text-white border rounded-[40px]  backdrop-blur-2xl border-purple-700 border-[2px] h-[500px] w-[600px] shadow-xl 
      shadow-purple-800">
        <p className="font-bold text-center text-[35px] ">AAP Showroom</p>
        <p className="font-medium text-[20px]">Wellcome!</p>
        <div className="mt-[50px]">
          <label className="block mb-[10px] ">User Name</label>
          <input className="w-[500px] rounded-[20px] shadow-md shadow-purple-400  py-[10px] pl-[20px] bg-transparent text-slate-200" required type="text" />
          <label className="block mt-[30px] mb-[10px] ">Password</label>
          <input className="w-[500px] rounded-[20px] shadow-md shadow-purple-400  py-[10px] pl-[20px] bg-transparent text-slate-200" required type='password'/>
        </div>
        <button className=" mt-[50px] bg-slate-800 font-bold text-slate-300 w-[300px] text-center py-[10px] rounded-[20px] hover:shadow-lg  hover:shadow-purple-700 hover:text-purple-400 transition ease-linear" type="submit">Sign In</button>
      </form> 
    </div>
  )
}

export default SignIn