import React from "react";

export default function Page1({ setPage , setCover, cover }) {
    const [name, setName] = React.useState("");
    const [about, setAbout] = React.useState("");
    return (
        <section className="w-11/12 flex flex-col gap-y-4 items-center ">
            <div className="w-80 flex justify-between relative mt-12">
                <hr className="w-full border-dashed absolute bg-slate-400 top-4" />
                <div className="w-8 h-8 bg-[#5389DF] text-white flex justify-center items-center rounded-full font-poppins  z-10">1</div>
                <div className="w-8 h-8 border border-black border-opacity-50 bg-white opacity-50 flex justify-center items-center rounded-full font-poppins z-10">
                    2
                </div>
                <div className="w-8 h-8 border border-black border-opacity-50 bg-white opacity-50 flex justify-center items-center rounded-full font-poppins z-10">
                    3
                </div>
                <div className="w-8 h-8 border border-black border-opacity-50 bg-white opacity-50 flex justify-center items-center rounded-full font-poppins z-10">
                    4
                </div>
            </div>
            <h1 className="font-open-sans w-64 text-center font-bold text-lg">Create your Academy</h1>
            <form className="w-full flex flex-col gap-y-8" onSubmit={() => setPage(2)}>
                <label htmlFor="" className="relative">
                    <p className="font-poppins  opacity-50 text-sm  ">Academy Name (40 charecters)</p>
                    <input
                        type="text"
                        className="w-full border  rounded-lg px-4 py-2 mt-2 border-[#50A7F4] focus:outline-[#50A7F4] opacity-50"
                        maxLength={40}
                        onChange={(e) => setName(e.target.value)}
                        required
                        minLength={3}
                    />
                    <p className="absolute bottom-3 right-4 font-poppins  opacity-50 text-xs ">{name.length}/40</p>
                </label>
                <label htmlFor="" className="relative">
                    <p className="font-poppins  opacity-50 text-sm  ">About the Academy (1000 charecters)</p>
                    <textarea
                        type="text"
                        className="w-full border  rounded-lg px-4 py-2 mt-2 border-[#50A7F4] focus:outline-[#50A7F4]  opacity-50 p-4"
                        maxLength={1000}
                        rows={7}
                        onChange={(e) => setAbout(e.target.value)}
                        required
                    />
                    <p className="absolute bottom-4 right-4 font-poppins  opacity-50 text-xs ">{about.length}/1000</p>
                </label>
                <div className="w-full flex justify-end">
                    <input
                        type="submit"
                        value={"Next"}
                        className="font-poppins  font-bold px-8 py-4 text-white rounded-full drop-shadow-xl shadow-inherit mt-4"
                        style={{
                            background: "linear-gradient(239.06deg, #5664C4 27.35%, #50A7F4 65.91%, #C3F6B6 107.52%)",
                        }}
                    />
                </div>
            </form>
        </section>
    );
}
