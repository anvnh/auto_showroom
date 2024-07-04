import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [isDropDownCategory, setDropDownCategory] = useState(false);
    return (
        <div className="bg-[#C9C6C6] flex w-[300px] h-[700px] mt-28 ml-14 rounded-3xl backdrop-blur-md font-poppins text-black">
            <ul className="mt-8 ml-8 text-[20px]">
                <li className="flex">
                    Filter
                    <MdKeyboardArrowUp className="text-2xl mt-1" />
                </li>
                <Link to="">
                    <li className="flex" onClick={() => setDropDownCategory(!isDropDownCategory)}>
                        {/* TODO */}
                        Browser by category
                        {isDropDownCategory ? <MdKeyboardArrowDown className="text-2xl mt-1" /> : <MdKeyboardArrowUp className="text-2xl mt-1" />}
                    </li>
                </Link>
                <li>
                    Brand
                </li>
                <li>
                    Country
                </li>
            </ul>
        </div>
    )
}

export default Sidebar