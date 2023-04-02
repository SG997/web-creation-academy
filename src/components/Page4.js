import React from "react";
import tick from "../assets/tick.svg";
import paypal from "../assets/paypal.svg";
import apple from "../assets/apple.svg";
import credit from "../assets/credit.svg";
import hyp from "../assets/hyp.svg";

export default function Page4({ setPage }) {
    const [phone, setPhone] = React.useState("");
    const [toggle, setToggle] = React.useState(false);
    const [payment, setPayment] = React.useState(false);
    return (
        <section className="w-11/12 flex flex-col gap-y-16 items-center ">
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
                <div className="w-8 h-8 bg-[#5389DF] text-white flex justify-center items-center rounded-full font-poppins  z-10">4</div>
            </div>
            {payment ? (
                <div
                    className="w-full h-96 rounded-xl border border-black border-opacity-10 flex justify-center items-start"
                    onClick={(e) => {
                        e.preventDefault();
                        setPage(5);
                    }}
                >
                    <img src={hyp} alt="hyp" />
                </div>
            ) : (
                <div className="w-full   space-y-16">
                    <h1 className="text-center font-poppins">{toggle ? "Choose your prefer payment method" : "Enter your account Phone number"}</h1>
                    {toggle ? (
                        <div className="flex flex-col justify-center items-center gap-y-6">
                            <button
                                className="bg-[hsl(42,100%,55%)] w-72 flex justify-center items-center py-2 rounded-full"
                                onClick={() => setPayment(true)}
                            >
                                <img src={paypal} alt="paypal" />
                            </button>
                            <button
                                className="border-2 border-black w-72 flex justify-center items-center py-4 rounded-full gap-x-2"
                                onClick={() => setPayment(true)}
                            >
                                <img src={apple} alt="apple" />
                                <p className="opacity-40">Pay with apple pay</p>
                            </button>
                            <button
                                className="bg-[#5389DF] text-white w-72 flex justify-center items-center py-4 rounded-full gap-x-2"
                                onClick={() => setPayment(true)}
                            >
                                <img src={credit} alt="apple" />
                                <p>Pay with Credit Card</p>
                            </button>
                        </div>
                    ) : (
                        <form className="w-full flex flex-col gap-y-8" onSubmit={() => setToggle(true)}>
                            <label htmlFor="" className="relative">
                                <p className="font-poppins  opacity-50 text-sm  ">Phone number</p>
                                <input
                                    type="number"
                                    className="w-full border  rounded-lg px-4 py-2 mt-2 border-[#50A7F4] focus:outline-[#50A7F4] opacity-50"
                                    maxLength={15}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                    minLength={3}
                                />
                                {/* <p className="absolute bottom-3 right-4 font-poppins  opacity-50 text-xs ">{phone.length}/40</p> */}
                            </label>
                            <div className="w-full flex items-center justify-between">
                                <button className="font-poppins text-[#979797]">I have a coupon</button>
                                <input
                                    type="submit"
                                    value={"Continue"}
                                    className="font-poppins  font-bold px-8 py-4 text-white rounded-full drop-shadow-xl shadow-inherit"
                                    style={{
                                        background: "linear-gradient(239.06deg, #5664C4 27.35%, #50A7F4 65.91%, #C3F6B6 107.52%)",
                                    }}
                                />
                            </div>
                        </form>
                    )}
                </div>
            )}
        </section>
    );
}
