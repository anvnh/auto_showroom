import { FaFacebook, FaTwitter, FaInstagram, } from 'react-icons/fa';
import { SiZalo } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { logo } from "@/assets";
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className='relative h-[600px]'
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className='fixed bottom-0 h-[600px] w-full bg-neutral-800'>
                <section className='w-full h-full flex flex-col justify-center items-center'>
                    <div className='h-[65%] w-[93%] md:w-[85%] xl:w-[90%]    flex flex-col justify-center items-center'>
                        <p className='w-full text-center text-[75px] sm:text-[90px] md:text-[110px] lg:text-[130px] mlg:text-[150px] xl:text-[200px] font-semibold font-syncopate'>
                            let's talk
                        </p>
                        <div className='w-full h-[20%] ss:h-[30%] border-t  flex justify-between items-center'>
                            <div className='hidden xsm:block font-bold'>
                                Legal notice
                            </div>
                            <div className='hidden ss:block w-[40%] sm:w-[50%] xsm:w-[40%] lg:w-auto font-semibold'>
                                This website is built on the laws issued by the state, does not violate any laws.
                            </div>
                            <Link to="https://www.instagram.com/just.hplat/">
                                <div className='font-bold flex items-center gap-x-[5px]'>
                                    <FaInstagram /> Instagram
                                </div>
                            </Link>
                            <Link to="https://github.com/anvnh">
                                <div className='font-bold flex items-center gap-x-[5px]'>
                                    <ImGithub /> Github
                                </div>
                            </Link>
                            <Link to="https://www.facebook.com/profile.php?id=100032385616885&locale=vi_VN">
                                <div className='font-bold flex items-center gap-x-[5px]'>
                                    <FaFacebook />Facebook
                                </div>
                            </Link>
                        </div>
                        <div className='w-full flex ss:hidden justify-between   border-t pt-[20px]'>
                            <section className=' font-bold'>
                                Legal notice
                            </section>
                            <section className=' w-[70%] font-semibold'>
                                This website is built on the laws issued by the state, does not violate any laws.
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
        // <footer className=" box-border text-white w-screen md:h-[320px] bg-primary border-t  flex flex-col  md:gap-y-[60px] px-[10px] md:py-[20px]">
        //     <div className='w-screen hidden md:flex '>
        //         <section className='w-[20%]  '>
        //             <Link to="/"><img src={logo} className='w-[80px] md:w-[90px] xl:w-[110px] object-cover bg-center' /></Link>
        //         </section>
        //         <section className='w-[20%] flex flex-col gap-y-[35px] '>
        //             <div className='text-[20px] md:text-[24px] lg:text-[26px] font-kanit'>
        //                 Vehicles
        //             </div>
        //             <div className=' text-[14px] flex flex-col gap-y-[4px]'>
        //                 <Link to="/Mercedes-AMG-CLS" ><div className=''>AMG CLS</div></Link>
        //                 <Link to="/Mercedes-Benz-Maybach-2022"><div className=''>Maybach 2022</div></Link>
        //                 <Link to="/audi-a5-couple"><div className=''>A5 Couple</div></Link>
        //                 <Link to="/audi-s6-limousin"><div className=''>A5 Limousin</div></Link>
        //             </div>
        //         </section>
        //         <section className='w-[20%] flex flex-col gap-y-[35px]'>
        //             <div className='text-[20px] md:text-[24px] lg:text-[26px] font-kanit'>
        //                 Shopping assist
        //             </div>
        //             <div className='flex text-[14px] flex-col gap-y-[4px]'>
        //                 <div>Offer and incentives</div>
        //                 <div>Build your car</div>
        //                 <div>Test drive</div>
        //             </div>
        //         </section>
        //         <section className='w-[20%] flex flex-col gap-y-[35px] '>
        //             <div className='text-[20px] md:text-[24px] lg:text-[29px] font-kanit'>
        //                 Inventory
        //             </div>
        //             <div className='flex flex-col text-[14px] gap-y-[4px]'>
        //                 <div>Audi</div>
        //                 <div>Mercerdes</div>
        //                 <div>Rolls Royce</div>
        //                 <div>Porsche</div>
        //             </div>
        //         </section>
        //         <section className='w-[20%] flex flex-col gap-y-[25px] '>
        //             <Link to="/owners"><div className='text-[20px] md:text-[24px] lg:text-[29px] font-kanit '>
        //                 Owners
        //             </div></Link>
        //             <div className='flex flex-col text-[14px] gap-y-[2px]'>
        //                 <div >Connect</div>
        //                 <div>Software update</div>
        //                 <div>Maintenace plans</div>
        //                 <div>Resources</div>
        //             </div>
        //         </section>
        //     </div>
        //     <div className=' w-screen hidden  md:flex justify-between h-full items-end border-t border-slate-300 '>
        //         <div className='flex w-[600px] gap-x-[20px] text-[14px]'>
        //             <h1>@2024 AAP Company</h1>
        //             <Link to="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">
        //                 <h1>Privacy Policy</h1>
        //             </Link>
        //             <Link to="https://www.kia.com/us/en/terms-of-service"><h1>Terms of Service</h1></Link>
        //             <h1>Cookies Settings</h1>
        //         </div>
        //         <div className='flex justify-center w-[200px] gap-x-[20px]  text-white text-[30px]'>
        //             <Link to="https://www.facebook.com/aanvnh/"><FaFacebook /></Link>
        //             <Link to="<RiInstagramFill/>"><RiInstagramFill /></Link>
        //             <Link to="https://github.com/anvnh"><ImGithub /></Link>
        //         </div>
        //     </div>

        //     {/* ---mobile--- */}
        //     <div className='w-full pt-[35px] h-[525px] md:hidden   '>
        //         <section className='w-full flex justify-center '>
        //             <div className='w-[40%] h-[225px]'>
        //                 <h1 className=' text-[22px] sm:text-[25px] font-kanit mb-[15px]'>
        //                     Vehicles
        //                 </h1>
        //                 <div className='w-full flex flex-col gap-y-[4px]'>
        //                     <Link to="/Mercedes-AMG-CLS"><div className=''>AMG CLS</div></Link>
        //                     <Link to="/Mercedes-Benz-Maybach-2022"><div className=''>Maybach 2022</div></Link>
        //                     <Link to="/audi-a5-couple"><div className=''>A5 Couple</div></Link>
        //                     <Link to="/audi-s6-limousin"><div className=''>A5 Limousin</div></Link>
        //                 </div>
        //             </div>
        //             <div className='w-[40%] h-[225px]'>
        //                 <h1 className='text-[22px] sm:text-[25px] font-kanit mb-[15px]'>Shopping Assist</h1>
        //                 <p className='text-[15px]'>Offer and Incentives</p>
        //                 <p className='text-[15px]'>Build Your Car</p>
        //                 <p className='text-[15px]'>Text Drive</p>
        //             </div>
        //         </section>
        //         <section className='w-full flex justify-center'>
        //             <div className='w-[40%] '>
        //                 <h1 className='  text-[22px] sm:text-[25px] font-kanit mb-[15px]'>Inventory</h1>
        //                 <div className='w-full flex flex-col gap-y-[4px]'>
        //                     <p className='text-[15px]'>Audi</p>
        //                     <p className='text-[15px]'>Mercerdes</p>
        //                     <p className='text-[15px]'>Rolls Royce</p>
        //                     <p className='text-[15px]'>Porche</p>
        //                 </div>
        //             </div>
        //             <div className='w-[40%] '>
        //                 <Link to="/owners"><h1 className='text-[22px] sm:text-[25px] font-kanit mb-[15px] underline'>Owner</h1></Link>
        //                 <p className='text-[15px]'>Connect Store</p>
        //                 <p className='text-[15px]'>Software Update</p>
        //                 <p className='text-[15px]'>Maintenance Plans</p>
        //                 <p className='text-[15px]'>Resource</p>
        //             </div>
        //         </section>
        //         <section className='w-full flex justify-evenly text-[30px]  mt-[30px] border-t pt-[20px] '>
        //             <FaFacebook />
        //             <RiInstagramFill />
        //             <FaTwitter />
        //             <SiZalo />
        //             <ImGithub />
        //         </section>
        //     </div>
        // </footer>
    )
}

export default Footer
