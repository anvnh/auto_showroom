import { mer, toyota, bmw, audi, audisport, lexus, lambo, hyundai, acura, ferari, } from "@/assets/hplat_asset/img/car_logo";
import Slider from "react-infinite-logo-slider"
const CarBrand = () => {

    return (
        <div >
            <Slider
              width="250px"
              duration={10}
              pauseOnHover={false}
              blurBorders={false}
              blurBoderColor={"#fff"}
            >
              <Slider.Slide>
                <img src={toyota} className="w-[150px]  object-cover" />
              </Slider.Slide>
              <Slider.Slide>
                <img src={bmw}  className="w-[100px]  object-cover" />
              </Slider.Slide>
              <Slider.Slide>
                <img src={audi}  className="w-[100px] object-cover" />
              </Slider.Slide>
              <Slider.Slide>
                <img src={acura}  className="w-[150px] object-cover" />
              </Slider.Slide>
              <Slider.Slide>
                <img src={lambo}  className="w-[100px]  object-cover" />
              </Slider.Slide>
              <Slider.Slide>
                <img src={ferari} className="w-[60px]  object-cover" />
              </Slider.Slide>
              <Slider.Slide>
                <img src={hyundai}  className="w-[150px] object-cover" />
              </Slider.Slide>
              <Slider.Slide>
                <img src={audisport} className="w-[200px] object-cover" />
              </Slider.Slide>
              <Slider.Slide>
                <img src={lexus}  className="w-[150px] object-cover" />
              </Slider.Slide>
            </Slider>
          </div>
    )
}

export default CarBrand;