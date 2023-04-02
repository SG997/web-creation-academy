import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import Home from "./components/Home";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";

function App() {
    const [page, setPage] = useState(0);
    const [cover, setCover] = useState("");
    const [croppedImage, setCroppedImage] = useState(null);

    let component;
    if (page === 0) {
        component = <Home setPage={setPage} />;
    } else if (page === 1) {
        component = <Page1 setPage={setPage} />;
    } else if (page === 2) {
        component = <Page2 setPage={setPage} roppedImage={croppedImage} setCroppedImage={setCroppedImage} />;
    } else if (page === 3) {
        component = <Page3 setPage={setPage} croppedImage={croppedImage} cover={cover} setCover={setCover} />;
    } else if (page === 4) {
        component = <Page4 setPage={setPage} />;
    } else if (page === 5) {
        component = <Page5 croppedImage={croppedImage} cover={cover} />;
    }

    // useEffect(() => {
    //     if (page === 0) {
    //         component.current = <Home setPage={setPage} />;
    //     } else if (page === 1) {
    //         component.current = <Page1 setPage={setPage} />;
    //     } else if (page === 2) {
    //         component.current = <Page2 setPage={setPage} />;
    //     } else if (page === 3) {
    //         component.current = <Page3 setPage={setPage} />;
    //     }
    // }, [page]);

    return (
        <main className="w-screen flex flex-col items-center">
            <header className="w-full flex justify-center items-center drop-shadow-[0_5px_6px_rgba(0,0,0,0.07)]  bg-white  h-14 ">
                <a href="/" className="flex justify-center items-center gap-x-1">
                    <img src={logo} alt="logo" className="w-8 h-6" />
                    <p className="font-open-sans font-bold">UniMastery</p>
                </a>
            </header>
            {component}
            
        </main>
    );
}

export default App;
