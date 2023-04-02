import React, { useEffect, useRef, useState } from "react";
import image_add from "../assets/image_add.svg";
import tick from "../assets/tick.svg";

export default function Page3({ setPage, croppedImage, cover, setCover }) {
    const [ready, setReady] = useState(false);
    const ref = useRef(null);

    const [selectedFile, setSelectedFile] = useState();
    // const [preview, setPreview] = useState();

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setCover(undefined);
            return;
        }

        const objectUrl = URL.createObjectURL(selectedFile);
        setCover(objectUrl);

        // free memory when ever this component is unmounted
    }, [selectedFile, setCover]);
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };
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
                <div className="w-8 h-8 bg-[#5389DF] text-white flex justify-center items-center rounded-full font-poppins  z-10">3</div>
                <div className="w-8 h-8 border border-black border-opacity-50 bg-white opacity-50 flex justify-center items-center rounded-full font-poppins z-10">
                    4
                </div>
            </div>
            {ready ? (
                <div className="text-center">
                    <h1 className="text-lg text-[#5389DF] font-poppins">Congrats!</h1>
                    <p className="font-poppins w-80 opacity-50">
                        Your’e almost done opening your Academy - it’s ready for you to edit it and start your academy
                    </p>
                </div>
            ) : (
                <h1 className="font-open-sans w-64 text-center font-bold text-lg">Upload your Academy cover image </h1>
            )}
            {}
            {
                <div className="w-full flex flex-col justify-center bg-[#F2F2F2] rounded-2xl overflow-hidden drop-shadow-xl relative ">
                    <div className="w-full h-56 flex justify-center items-center">
                        {cover && (
                            <div className="w-full h-56 bg-black bg-opacity-50 rounded-xl flex justify-center items-center absolute">
                                <img src={cover} alt="upload_image" className="w-full h-full " />
                            </div>
                        )}

                        {!ready && (
                            <label
                                htmlFor="file-upload"
                                className="w-16 h-16 bg-white flex justify-center items-center rounded-full z-10"
                                onClick={() => ref.current.click()}
                            >
                                <img src={image_add} alt="image_add" />
                                <input type="file" accept="image/png , image/jpeg " className="hidden" ref={ref} onChange={handleImageUpload} />
                            </label>
                        )}
                    </div>

                    <div className="w-full bg-white h-20 flex justify-center items-center relative">
                        <div className="w-16 h-16 border-4 border-white rounded-full  absolute top-[-3rem] overflow-hidden">
                            <img src={croppedImage} alt="croppedImage" className="w-full h-full" />
                        </div>
                        <h1 className="font-poppins text-lg">Trading Academy</h1>
                    </div>
                </div>
            }
            {!ready && (
                <div>
                    <p className="text-center font-poppins opacity-50 text-sm"> 1416x800 .png / .jpeg 5MB </p>
                </div>
            )}
            <div className="w-full flex items-center justify-between mt-4">
                {ready ? (
                    <button className="font-poppins text-[#979797]">I have a coupon</button>
                ) : (
                    <button className="font-poppins" onClick={() => setPage(2)}>
                        Back
                    </button>
                )}
                {!ready && (
                    <button
                        className={`font-poppins  font-bold px-8 py-4 text-white rounded-full drop-shadow-xl shadow-inherit ${
                            cover ? "" : "opacity-50"
                        }`}
                        style={{
                            background: "linear-gradient(239.06deg, #5664C4 27.35%, #50A7F4 65.91%, #C3F6B6 107.52%)",
                        }}
                        disabled={!cover}
                        onClick={() => setReady(true)}
                    >
                        I'm ready
                    </button>
                )}
                {ready && (
                    <button
                        className={`font-poppins  font-bold px-8 py-4 text-white rounded-full drop-shadow-xl shadow-inherit ${
                            cover ? "" : "opacity-50"
                        }`}
                        style={{
                            background: "linear-gradient(239.06deg, #5664C4 27.35%, #50A7F4 65.91%, #C3F6B6 107.52%)",
                        }}
                        disabled={!cover}
                        onClick={() => setPage(4)}
                    >
                        Continue
                    </button>
                )}
            </div>
        </section>
    );
}
