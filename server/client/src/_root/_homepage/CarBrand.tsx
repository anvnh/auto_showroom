import { mer, toyota, bmw, audi, audisport, lexus, lambo, hyundai, acura, ferari, } from "@/assets/hplat_asset/img/car_logo";
import Slider from "react-infinite-logo-slider"
const CarBrand = () => {

    return (
        <div className="py-[20px] bg-gray-800 bg-opacity-50" >
            <Slider
                width="250px"
                duration={10}
                pauseOnHover={false}
                blurBorders={false}
                blurBoderColor={"#fff"}
            >
                <Slider.Slide>
                    <img src={toyota} className="  w-[90px] ss:w-[100px] lg:w-[150px]  object-cover" />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={bmw}  className="  w-[50px] ss:w-[50px] lg:w-[100px]  object-cover" />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={audi}  className=" w-[70px] ss:w-[80px] lg:w-[100px] object-cover" />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={acura}  className="   w-[90px] ss:w-[100px] lg:w-[150px] object-cover" />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={lambo}  className="    w-[110px]  object-cover" />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={ferari} className=" w-[40px] lg:w-[60px]  object-cover" />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={hyundai}  className="    w-[85px] ss:w-[100px] lg:w-[150px] object-cover" />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={audisport} className="    w-[120px] ss:w-[150px]  lg:w-[200px] object-cover" />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={lexus}  className="  w-[90px] ss:w-[100px] lg:w-[150px] object-cover" />
                </Slider.Slide>
            </Slider>
        </div>
    )
}

export default CarBrand;
