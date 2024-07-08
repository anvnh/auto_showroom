import { audiold1, a5_6 } from "@/assets/audiA5/couple"
const History_mobile = ()=>{
    return(
        <div>
            <div className="w-full h-screen flex sm:hidden flex-col bg-slate-100 text-slate-800 " >
          <div className="w-full px-[10%] h-full flex flex-col justify-center items-center ">
            <div className="flex justify-center items-center h-[20%] w-full text-[60px] font-bold font-syncopate ">
              1995
            </div>
            <div className="h-[20%] w-full text-[20px]  text-center font-playwrite " >
              Step inside an Audi and experience a world of refined luxury. Premium materials, meticulous craftsmanship
            </div>
          </div>
          <div className="w-full h-full relative bg-slate-500">
            <img src={audiold1} className="absolute  w-[350px]  h-[250px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]  object-cover" />

          </div>
        </div>
        <div
          className="w-full h-screen flex sm:hidden flex-col  justify-center items-center bg-slate-100 text-slate-800"
        >
          <div className="w-full  px-[10%] h-full flex flex-col justify-center items-center ">
            <div className="flex justify-center items-center h-[20%] w-full text-[60px]  font-bold font-syncopate ">
              2025
            </div>
            <div className="h-[20%] w-full text-[20px]  text-center font-playwrite " >
              Ergonomic design create an inviting and comfortable environment for both drivers and passengers.
            </div>
          </div>
          <div className="w-full  h-full relative bg-green-800">
            <img src={a5_6} className="absolute w-[350px]  h-[250px]  object-cover left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" />

          </div>
        </div>
        </div>
    )
}

export default History_mobile