import React, { useState, useEffect } from 'react';
import {
	r1,
	r2,
	r3,
	r4,
	r5,
	r6,
	r7,
	r8,
	change1,
	change2,
	change3,
	change4,
	change5,
	change6,
	VideoCar3Popular,
	Videohieuung,
} from "../../assets";
interface ColorOption {
  color: string;
  colorName: string;
  image: {change1}; // Đường dẫn đến ảnh
}

interface ColorPickerProps {
  options: ColorOption[];
  title?: string; // Tiêu đề tùy chọn
  subtitleTop?: string;
  subtitleBottom?: string;
  bodyTitle?: string;
  bodyCopy?: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  options,
  title = '',
  subtitleTop = '',
  subtitleBottom = '',
  bodyTitle = '',
  bodyCopy = '',
}) => {
  const [selectedColor, setSelectedColor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedColor((prevIndex) => (prevIndex + 1) % options.length);
    }, 5000); // Tự động chuyển màu sau 5 giây

    return () => clearInterval(interval);
  }, [options.length]); // Tái tạo interval khi options thay đổi

  return (
    <div className="relative">
      {/* Ảnh nền */}
      <div
        className="h-screen bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${options[selectedColor].image})` }}
      />

      {/* Tiêu đề và nội dung */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        {title && <h1 className="text-4xl font-bold mb-4">{title}</h1>}
        {subtitleTop && <h3 className="text-xl mb-2">{subtitleTop}</h3>}
        {subtitleBottom && <h3 className="text-xl mb-2">{subtitleBottom}</h3>}
        {bodyTitle && <h2 className="text-2xl font-bold mb-4">{bodyTitle}</h2>}
        {bodyCopy && <p className="text-lg">{bodyCopy}</p>}
      </div>

      {/* Các ô màu */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {options.map((option, index) => (
          <div
            key={index}
            className={`w-10 h-10 rounded-full border-2 ${
              selectedColor === index ? 'border-white' : 'border-transparent'
            } transition-all duration-300 ease-in-out`}
            style={{ backgroundColor: option.color }}
            onMouseEnter={() => setSelectedColor(index)}
          >
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {option.colorName}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
