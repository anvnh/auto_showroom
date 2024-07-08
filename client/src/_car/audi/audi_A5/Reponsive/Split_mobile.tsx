import { a5_10,a5_13 } from "@/assets/audiA5/couple"
const Split_mobile = () => {
  return (
    <div className="flex flex-col ">
        <div className=" w-full h-full flex flex-col  ">
          <div className="w-screen h-[600px]">
            <img src={a5_10} className="w-screen h-full object-cover" />
          </div>
          <div className="w-screen flex flex-col justify-center items-center h-[300px]  bg-slate-100 text-slate-800 ">
            <h1
              className=" font-syncopate  text-[25px] ss:text-[35px]  "
            >
              POWER AND PRECISION
            </h1>
            <p className=" font-kanit  text-center text-[18px] xs:text-[20px] px-[7%] ">
              Audi's engines are renowned for their exceptional power delivery
              and precision engineering.
            </p>
          </div>
        </div>

        <div className="w-screen h-full flex  flex-col ">
          <div className="w-screen h-[600px]">
            <img src={a5_13} className="w-full h-full object-cover" />
          </div>
          <div className="w-screen flex flex-col justify-center items-center h-[300px]  bg-slate-100 text-slate-800 ">
            <h1
              className=" font-syncopate  text-[20px] xs:text-[25px] ss:text-[35px]  "
            >
              Quattro® All-Wheel Drive
            </h1>
            <p className=" font-kanit  text-center text-[18px] xs:text-[20px] px-[7%] ">
              Conquer any road, in any condition, with Audi's legendary
              quattro® all-wheel drive system.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Split_mobile