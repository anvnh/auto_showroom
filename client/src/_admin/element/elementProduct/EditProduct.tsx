import React from "react";
import { useState, useEffect, useRef } from "react";
import "aos/dist/aos.css";
import { IoIosClose } from "react-icons/io";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";
import { CiImageOn } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EditProduct = ({product}) => {
	const [imgs, setImgs] = useState([]);

	const imgRef = useRef(null);

	const [formData, setFormData] = useState({
		horsepower: "",
		torque: "",
		top_speed: "",
		acceleration: "",
		bio: "",
		brand: "",
		car_model: "",
		production_year: "",
		body_style: "",
		engine: "",
		transmission: "",
		drive_type: "",
		colors: [],
		fuel_type: "",
		seat_capacity: "",
		cargo_space: "",
		audio_system: "",
		price: "",
		quantity: "",
		warranty: "",
		images: [],
	});

	const handleRemoveImg = (indexToRemove) => {
		setImgs(imgs.filter((_, index) => index !== indexToRemove));
	};

	const closeModal = () => {
		const modal = document.getElementById("Add_Car");
		if (modal) {
			modal.close();
		}
	};
    
    useEffect(() => {
        if(product && product.images){
            setImgs(product.images);
        }
    }, [product]);

	return (
		<div className="w-full">
			<div className="backdrop-blur-3xl bg-gray-600 bg-opacity-0 w-full h-full flex ">
				<div className=" rounded-lg shadow-lg w-full">
                    {product && (
                        <>
                            <h2 className="text-xl text-white px-3">
                                <textarea
                                    className="textarea textarea-bordered h-[10px] w-full"
                                    placeholder="Bio"
                                    name="bio"
                                    value={product.bio}
                                >
                                </textarea>
                            </h2>
                            <h2 className="text-xl text-white p-3 grid grid-cols-2 gap-2">
                                <Toaster position="top-center" reverseOrder={false} />
                                <textarea
                                    className="textarea textarea-bordered h-[10px]"
                                    placeholder="Brand"
                                    name="brand"
                                    value={product.brand}
                                ></textarea>
                                <textarea
                                    className="textarea textarea-bordered  h-[10px]"
                                    placeholder="Model"
                                    name="car_model"
                                    value={product.car_model}
                                ></textarea>
                                <textarea
                                    className="textarea textarea-bordered  h-[10px]"
                                    placeholder="Production year"
                                    name="production_year"
                                    value={product.production_year}
                                ></textarea>
                                <textarea
                                    className="textarea textarea-bordered  h-[10px]"
                                    placeholder="Body style"
                                    name="body_style"
                                    value={product.body_style}
                                ></textarea>
                                <textarea
                                    className="textarea textarea-bordered  h-[10px]"
                                    placeholder="Engine"
                                    name="engine"
                                    value={product.engine}
                                ></textarea>
                                <textarea
                                    className="textarea textarea-bordered h-[10px]"
                                    placeholder="Transmission"
                                    name="transmission"
                                    value={product.transmission}
                                ></textarea>
                                <textarea
                                    className="textarea textarea-bordered  h-[10px]"
                                    placeholder="Drive type"
                                    name="drive_type"
                                    value={product.drive_type}
                                ></textarea>
                                <textarea
                                    className="textarea textarea-bordered h-[10px]"
                                    placeholder="Fuel type"
                                    name="fuel_type"
                                    value={product.fuel_type}
                                ></textarea>

                                <Button
                                    variant="outline"
                                    className="bg-black border-none h-[48px]"
                                    onClick={() =>
                                        document
                                        .getElementById("Add_Perfo")
                                        .showModal()
                                    }
                                >
                                    <div className="w-full flex justify-start text-gray-400">
                                        Performance
                                    </div>
                                </Button>

                                <dialog id="Add_Perfo" className="modal w-full">
                                    <div className="w-[500px] bg-gray-700 rounded-xl p-3 shadow-md shadow-white bg-opacity-50 backdrop-blur-sm z-5 relative top-10">
                                        <div className="grid gap-4ss">
                                            <div className="grid gap-2">
                                                <div className="grid grid-cols-3 items-center gap-4">
                                                    <Label htmlFor="width">
                                                        Horse Power
                                                    </Label>
                                                    <Input
                                                        id="width"
                                                        defaultValue={product.horsepower}
                                                        className="col-span-2 h-8"
                                                        name="horsepower"
                                                    />
                                                </div>
                                                <div className="grid grid-cols-3 items-center gap-4">
                                                    <Label htmlFor="maxWidth">
                                                        Torque
                                                    </Label>
                                                    <Input
                                                        id="maxWidth"
                                                        defaultValue={product.torque}
                                                        className="col-span-2 h-8"
                                                        name="torque"

                                                    />
                                                </div>
                                                <div className="grid grid-cols-3 items-center gap-4">
                                                    <Label htmlFor="height">
                                                        Top Speed
                                                    </Label>
                                                    <Input
                                                        id="height"
                                                        defaultValue={product.top_speed}
                                                        className="col-span-2 h-8"
                                                        name="top_speed"

                                                    />
                                                </div>
                                                <div className="grid grid-cols-3 items-center gap-4">
                                                    <Label htmlFor="maxHeight">
                                                        Acceleration
                                                    </Label>
                                                    <Input
                                                        id="maxHeight"
                                                        defaultValue={product.acceleration}
                                                        className="col-span-2 h-8"
                                                        name="acceleration"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <form
                                        method="dialog"
                                        className="modal-backdrop w-full absolute h-screen"
                                    >
                                        <button className="">
                                            Close
                                        </button>
                                    </form>
                                </dialog>
                                <textarea
                                    className="textarea textarea-bordered h-[10px]"
                                    placeholder="Seat capacity"
                                    name="seat_capacity"
                                    value={product.seat_capacity}
                                ></textarea>
                                <textarea
                                    className="textarea textarea-bordered h-[10px]"
                                    placeholder="Cargo capacity"
                                    name="cargo_space"
                                    value={product.cargo_space}
                                ></textarea>
                                <textarea
                                    className="textarea textarea-bordered h-[10px]"
                                    placeholder="Audio system"
                                    name="audio_system"
                                    value={product.audio_system}
                                ></textarea>
                                <textarea
                                    className="textarea textarea-bordered h-[10px]"
                                    placeholder="Price"
                                    name="price"
                                    value={product.price}
                                ></textarea>
                                <textarea
                                    className="textarea textarea-bordered h-[10px]"
                                    placeholder="Quantity"
                                    name="quantity"
                                    value={product.quantity}
                                ></textarea>
                                <textarea
                                    className="textarea textarea-bordered h-[10px]"
                                    placeholder="Warranty"
                                    name="warranty"
                                    value={product.warranty}
                                ></textarea>
                            </h2>
                        </>
                    )}
					<div className="w-full bg-black p-4 h-[200px] rounded-2xl bg-opacity-20">
                        {product && (
                            <ScrollArea>
                                <div className="flex space-x-3">
                                    {imgs.map((img, index) => (
                                        <div
                                            key={index}
                                            className="relative w-[100px] h-[100px] bg-black bg-opacity-20 rounded-xl"
                                        >
                                            <img
                                                src={img}
                                                className="w-[100px] h-[100px] object-cover bg-center rounded-xl"
                                            />
                                            <IoIosClose
                                                className="absolute top-2 right-2 text-red-500 cursor-pointer"
                                                onClick={() => handleRemoveImg(index)}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <ScrollBar
                                    orientation="horizontal"
                                    className="bg-white bg-opacity-20"
                                />
                            </ScrollArea>
                        )}
						<div className="flex justify-between border-t py-2 border-t-gray-700">
							<div className="flex gap-1 items-center">
								<CiImageOn
									className="fill-[#2191d8] w-6 h-6 cursor-pointer"
									onClick={() => imgRef.current.click()}
								/>
							</div>

							<input
								type="file"
								hidden
								ref={imgRef}
								accept="image/*"
								multiple
							/>
						</div>
					</div>

					<div className="flex items-center">
						<div className="mt-4 flex w-full justify-end">
							<Button
								variant="secondary"
								className="bg-opacity-40 rounded-xl"
							>
								Change
							</Button>
						</div>
					</div>
				</div>
                <form method="dialog" className="modal-backdrop ">
					<button className="outline-none">Close</button>
				</form>
			</div>
 
		</div>
	);
};

export default EditProduct;
