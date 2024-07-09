import { GoShieldCheck } from "react-icons/go";
import { IoDiamondOutline } from "react-icons/io5";
import { IoIosPricetags } from "react-icons/io";
import { FaCarRear } from "react-icons/fa6";

const Features = () => {
    return (
        
      <div className="pt-5">  
         <hr className="w-1/2 border-black mx-auto relative top-1" /> 
        <section className="pb-24 pt-20">
  
      <div className="w-full flex px-12 sm:px-20 md:pl-60 justify-between gap-16 h-auto pt-10 font-poppins">
          <div className="bg-opacity-50 rounded-2xl flex items-start justify-start text-black ">
              <div className="md:text-4xl text-2xl sm:text-4xl font-bold">
                  We're BIG on <br/> what matters to you
              </div>
          </div>
          <div className="bg-opacity-50 sm:text-xl w-1/2 rounded-2xl grid md:grid-cols-2 text-black">
              <div className="px-5">
                  <GoShieldCheck className="text-5xl text-blue-400"/>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                      Special Financing Offers
                  </h1>
                  <p className="pt-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt aliqua.
                  </p>
              </div>
              <div className="px-5 pt-5">
                  <IoDiamondOutline className="text-5xl  text-blue-400 "/>
                  <h1 className="text-2xl font-bold md:text-4xl">
                      Trusted Car Dealership
                  </h1>
                  <p className="pt-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
              </div>
              <div className="px-5 pt-5">
                  <IoIosPricetags className="text-5xl text-blue-400"/>
                  <h1 className="text-2xl  font-bold md:text-4xl">
                      Transparent Pricing
                  </h1>
                  <p className="pt-5">
                      Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis.
                  </p>
              </div>
              <div className="px-5 pt-5">
                  <FaCarRear className="text-5xl mb-4 text-blue-400"/>
                  <h1 className="text-2xl  font-bold md:text-4xl">
                      Expert Car Service
                  </h1>
                  <p className="pt-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
              </div>
          </div>
  </div>
  </section></div>
    );
}

export default Features
