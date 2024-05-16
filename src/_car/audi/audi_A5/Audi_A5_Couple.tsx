import { Navbar } from "../../../_root/_homepage"
import { banner } from "@/assets/audiA5/couple"
const audi_A5_Couple = () => {
  return (
    <div> 
      <div className="flex items-start justify-center">
        <div className="w-screen">
          <Navbar />
        </div>
      </div>
      <div className="">
        <div className="relative">
         <img className="object-cover w-screen h-screen" src={banner}/>   
         <div className="absolute top-0 text-slate-500 mx-[20px] my-[10px]">
          <div className="font-bold text-[25px]">
            2024 A5 Coupe
          </div>
          <div>
            Starting at $48,000
          </div>
         </div>
        </div> 
      </div>
    </div>
  )
}

export default audi_A5_Couple