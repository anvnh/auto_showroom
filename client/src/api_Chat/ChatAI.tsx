import React, { useState, useEffect } from "react";
import axios from "axios";
import { logo } from "../assets";
import { FiSend, FiCamera, FiMic } from 'react-icons/fi';
import { MdSend } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

function ChatAI() {
  // hiệu ứng hiển thị khi 3s trôi qua
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [messages, setMessages] = useState<{ type: string, text: string, image?: string, audio?: string }[]>([]);
  const [isChatBoxVisible, setIsChatBoxVisible] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  async function generateAnswer() {
    setAnswer("loading...");
    setMessages((prev) => [...prev, { type: "question", text: question, image: image ? URL.createObjectURL(image) : undefined }]);

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCD37nODIvAgfled44EzWO-NJfG_m6TKf4",
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });
      const aiAnswer = response.data.candidates[0].content.parts[0].text;
      setAnswer(aiAnswer);
      setMessages((prev) => [...prev, { type: "answer", text: aiAnswer }]);
    } catch (error) {
      setAnswer("Error fetching the answer. Please try again.");
      setMessages((prev) => [...prev, { type: "answer", text: "Error fetching the answer. Please try again." }]);
    }

    setQuestion("");
    setImage(null);
    setImageUrl(null);
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImageUrl(null);
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end pr-6">
      {isVisible && (
        <>
          {!isChatBoxVisible && (
            <button 
              onClick={() => setIsChatBoxVisible(true)}
              className="relative w-16 h-16 bg-gray-800 animate-pulse rounded-full flex items-center justify-center text-black mb-2 group"
            >
              <img src={logo} alt="" className="h-auto w-[40px]" />
              <p className="absolute bottom-full mb-2 left-1 transform px-2 py-1 bg-white text-black text-xs w-[60px] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">APP AI</p>
            </button>
          )}
          {isChatBoxVisible && (
            <div data-aos="fade-left" className="w-[350px] bg-gray-900 rounded-lg shadow-lg text-white overflow-hidden">
              <div className="flex flex-col h-[500px]">
                <div data-aos="fade-left" data-aos-delay="400" className="flex justify-between items-center p-4 border-b border-gray-700">
                  <div className="flex gap-3 items-center">
                    <img
                      src={logo}
                      className="w-[39px] h-auto"
                    />
                    <h1 className="text-lg font-poppins">Chat bot</h1>
                  </div>
                  <button 
                    onClick={() => setIsChatBoxVisible(false)}
                    className="text-white hover:text-red-500 transition-all duration-300 text-xl hover:scale-125"
                  >
                    X
                  </button>
                </div>
                <div data-aos="fade-left" className="p-4 bg-gray-800 overflow-y-auto flex-1">
                  <div className="chat-messages text-sm w-full">
                    {messages.map((msg, index) => (
                      <div  key={index} className="flex w-full">
                        {msg.type === "question" ? (
                          <div className="ml-auto max-w-[75%] my-2 p-2 rounded-lg bg-gray-700 text-start">
                            {msg.text}
                            {msg.image && <img src={msg.image} alt={`msg-${index}`} className="mt-2 h-auto rounded-xl" />}
                          </div>
                        ) : (
                          <div className="mr-auto max-w-[75%] my-2 p-2 rounded-lg bg-gray-500 self-start text-left">
                            {msg.text}
                            {msg.image && <img src={msg.image} alt={`msg-${index}`} className="mt-2 rounded-xl" />}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div  className="bg-gray-700 w-full flex items-center gap-2">
                  {imageUrl && (
                    <div  className="relative">
                      <img src={imageUrl} alt="preview" className="w-[100px] h-auto pt-2 mb-2 px-1 rounded-lg" />
                      <button
                        onClick={handleRemoveImage}
                        className="absolute top-2 right-0 text-white hover:text-red-700 transition-colors"
                      >
                        <AiOutlineCloseCircle className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>
                <div className="p-2 border-t border-gray-700 flex gap-4 items-center">
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <FiCamera className="text-white w-6 h-6 hover:scale-110 duration-300 transition-all" />
                  </label>
                  <textarea 
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="w-[400px] min-h-[40px] max-h-[40px] p-2 rounded-xl bg-gray-800 text-white px-4"
                    placeholder="Type your question..."
                  />
                  <div className="flex gap-2 items-center">
                    <input 
                      type="file" 
                      id="image-upload" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={handleImageChange} 
                    />
                    <button 
                      onClick={generateAnswer} 
                      className="w-full rounded-lg hover:scale-110 duration-300 transition-all flex justify-center items-center"
                    >
                      <MdSend className="text-white w-6 h-6 rotate-90 hover:rotate-0 duration-300 transition-all" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ChatAI;
