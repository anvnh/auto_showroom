import { audiA5_banner } from "../../assets";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div className="box-border Banner">
      <div className="banner mt-[65px] mb-[60px]">
        <div className="relative w-full"> {/* Thêm w-full */}
          <img
            className="w-full h-auto object-cover" // Sử dụng object-cover
            src={audiA5_banner}
            alt="Audi A5 Banner"
          />
          <div className="absolute top-0 font-bold text-white inset-0 flex flex-col items-center justify-center text-center p-4 md:p-8 lg:mx-[50px] lg:my-[50px] mlg:my-[100px] xl:my-[150px] lg:items-start lg:justify-start lg:text-left"> {/* Điều chỉnh vị trí và căn chỉnh văn bản */}
            {/* Nội dung (văn bản và nút) */}
            <div className="text-[22px] lg:text-[40px]">
              Dynamic down to the last curve
            </div>
            <div className="lg:text-[20px] mt-[10px]">
              The Audi A5 models are destined to turn heads.
            </div>
            <div className="flex flex-col space-y-4 mt-[15px] md:mt-[25px] lg:flex-row lg:space-y-0 lg:space-x-[10px]"> {/* Điều chỉnh vị trí và căn chỉnh nút */}
              <Link to="/audi-A5-Couple">
                <div className="text-center px-[20px] py-[10px] text-slate-800 bg-slate-200 w-full lg:w-[250px]">
                  Explore Audi A5 Coupe
                </div>
              </Link>
              <Link to="/audi-A5-Sportback">
                <div className="text-center px-[20px] py-[10px] border border-white text-white w-full lg:w-[250px]">
                  Explore Audi A5 Sportback
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
