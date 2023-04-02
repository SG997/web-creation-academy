import React, { useCallback, useEffect, useRef, useState } from "react";
import image_add from "../assets/image_add.svg";
import tick from "../assets/tick.svg";
import Cropper from "react-easy-crop";
import getCroppedImg from "./Crop";

export default function Page2({ setPage, setCroppedImage, croppedImage }) {
    const ref = useRef(null);

    const [preview, setPreview] = useState(null);

    const [selectedFile, setSelectedFile] = useState();

    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);

    const onCropComplete = useCallback(
        async (croppedArea, croppedAreaPixels) => {
            // console.log(croppedArea, croppedAreaPixels);
            try {
                const croppedImage = await getCroppedImg(preview, croppedAreaPixels);
                setCroppedImage(croppedImage);
            } catch (e) {
                console.error(e);
            }
        },
        [preview, setCroppedImage]
    );

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined);
            return;
        }

        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl);

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile, setPreview]);
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
                <div className="w-8 h-8 bg-[#5389DF] text-white flex justify-center items-center rounded-full font-poppins  z-10">2</div>
                <div className="w-8 h-8 border border-black border-opacity-50 bg-white opacity-50 flex justify-center items-center rounded-full font-poppins z-10">
                    3
                </div>
                <div className="w-8 h-8 border border-black border-opacity-50 bg-white opacity-50 flex justify-center items-center rounded-full font-poppins z-10">
                    4
                </div>
            </div>
            <h1 className="font-open-sans w-64 text-center font-bold text-lg">Upload your Academy Logo</h1>
            {!preview && (
                <div className="w-full flex flex-col justify-center">
                    <div className="w-full flex justify-center items-center">
                        <label
                            htmlFor="file-upload"
                            className="w-64 h-64 bg-[#F2F2F2] flex justify-center items-center rounded-full"
                            onClick={() => ref.current.click()}
                        >
                            <img src={image_add ? image_add : croppedImage} alt="image_add" />
                            <input type="file" accept="image/png , image/jpeg " className="hidden" ref={ref} onChange={handleImageUpload} />
                        </label>
                    </div>
                    <div>
                        <p className="text-center font-poppins text-slate-500 text-sm mt-4">512x512 .png / .jpeg 5MB</p>
                    </div>
                </div>
            )}
            {preview && (
                <div className="w-full h-80 bg-black bg-opacity-50 rounded-xl flex justify-center items-center relative">
                    <Cropper
                        image={preview}
                        crop={crop}
                        zoom={zoom}
                        aspect={1}
                        cropShape="round"
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                    />
                    {/* <div className="border-4 h-40 w-40 rounded-full absolute overflow-hidden">
                        <img src={preview} alt="upload_image" className="w-full h-full " />
                    </div> */}
                </div>
            )}
            <div>
                <p className="text-center font-poppins text-slate-500 text-sm">Move and scele to logo so it will fit the circle</p>
            </div>
            <div className="w-full flex items-center justify-between mt-4">
                <button className="font-poppins" onClick={() => setPage(1)}>
                    Back
                </button>
                <button
                    className={`font-poppins  font-bold px-8 py-4 text-white rounded-full drop-shadow-xl shadow-inherit ${
                        preview ? "" : "opacity-40"
                    } `}
                    style={{
                        background: "linear-gradient(239.06deg, #5664C4 27.35%, #50A7F4 65.91%, #C3F6B6 107.52%)",
                    }}
                    disabled={!preview}
                    onClick={() => setPage(3)}
                >
                    Next
                </button>
            </div>
        </section>
    );
}
