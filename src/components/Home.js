import React from "react";
import hero from "../assets/hero.svg";

export default function Home({ setPage }) {
    return (
        <section className="w-11/12 flex flex-col gap-y-4 items-center ">
            <div className="py-6">
                <img src={hero} alt="hero_image" />
            </div>
            <h1 className="font-open-sans w-64 text-center font-bold text-lg">Hi Mentor, welcome to your new Academy</h1>

            <p className="text-center w-10/12 font-open-sans text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus dolor interdum arcu sed. Amet ultrices natoque adipiscing bibendum
                scelerisque. Nisi scelerisque quam duis facilisis.
            </p>
            <button
                className="font-poppins  font-bold px-8 py-4 text-white rounded-full drop-shadow-xl shadow-inherit mt-4"
                style={{
                    background: "linear-gradient(239.06deg, #5664C4 27.35%, #50A7F4 65.91%, #C3F6B6 107.52%)",
                }}
                onClick={() => setPage(1)}
            >
                Let&apos;s get started
            </button>
        </section>
    );
}
