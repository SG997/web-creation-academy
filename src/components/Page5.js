import React, { useEffect } from "react";
import tick from "../assets/tick.svg";
import share from "../assets/share.svg";

export default function Page5({ croppedImage, cover }) {
    return (
        <section className="w-11/12 flex flex-col gap-y-4 items-center ">
            <div className="w-80 flex justify-between relative mt-12">
                <hr className="w-full border-dashed absolute bg-slate-400 top-4" />
                <div className="w-8 h-8 bg-[#B7EEBD] text-white flex justify-center items-center rounded-full font-poppins  z-10">
                    <img src={tick} alt="tick" />
                </div>
                <div className="w-8 h-8 bg-[#B7EEBD] text-white flex justify-center items-center rounded-full font-poppins  z-10">
                    <img src={tick} alt="tick" />
                </div>
                <div className="w-8 h-8 bg-[#B7EEBD] text-white flex justify-center items-center rounded-full font-poppins  z-10">
                    <img src={tick} alt="tick" />
                </div>
                <div className="w-8 h-8 bg-[#B7EEBD] text-white flex justify-center items-center rounded-full font-poppins  z-10">
                    <img src={tick} alt="tick" />
                </div>
            </div>
            <h1 className="font-open-sans text-center font-bold text-lg">Your Academy Created succesfully</h1>
            <div className="w-full flex flex-col justify-center bg-[#F2F2F2] rounded-2xl overflow-hidden drop-shadow-xl relative ">
                <div className="w-full h-56 flex justify-center items-center">
                    <div className="w-full h-56 bg-black bg-opacity-50 rounded-xl flex justify-center items-center absolute">
                        <img src={cover? cover : ""} alt="cover" className="w-full h-full " />
                    </div>
                </div>

                <div className="w-full bg-white h-20 flex justify-center items-center relative">
                    <div className="w-16 h-16 border-4 border-white rounded-full  absolute top-[-3rem] overflow-hidden">
                        <img src={croppedImage} alt="croppedImage" className="w-full h-full" />
                    </div>
                    <h1 className="font-poppins text-lg">Trading Academy</h1>
                </div>
            </div>

            <button className="w-full py-4 gap-x-3 flex justify-center items-center font-poppins text-[#5389DF] border border-black border-opacity-10 rounded-full">
                <img src={share} alt="share" />
                <p>share your Academy</p>
            </button>

            <button
                className={`font-poppins  font-bold px-8 py-4 text-white rounded-full drop-shadow-xl shadow-inherit w-full text-lg`}
                style={{
                    background: "linear-gradient(239.06deg, #5664C4 27.35%, #50A7F4 65.91%, #C3F6B6 107.52%)",
                }}
            >
                Open in Unimastery app
            </button>
            <a href="/" className="opacity-50 underline">
                Continue editing on browser
            </a>
        </section>
    );
}
