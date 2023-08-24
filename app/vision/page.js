import bg from "./image1.jpg";
import Image from "next/image";
const VisionPage = () => {
    return (
        <div className="flex max-md:flex-col justify-center items-center h-screen bg-gray-100 w-full"
        // style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center'  }}
        >
            <div className="absolute flex w-full justify-end"><Image src={bg} 
            className="opacity-30 h-[100vh] md:w-[80vw]"/></div>
            <div className="w-5/12 flex justify-left items-center relative z-10 max-md:hidden">
                <div className="w-48 h-48 bg-[#bc9b76] flex justify-center items-center"></div>
                <div className="flex flex-col">
                    <h1 className="font-bold text-4xl z-5 -mx-9">OUR</h1>
                    <h1 className="font-bold text-4xl z-5 -mx-9">VISION</h1>
                </div>
                <div className="h-[500px] w-[2px] bg-gray-600 ml-[300px] max-md:hidden"></div>
            </div>
            <div className="w-full flex justify-start md:hidden">
                <div className="h-36 w-36 bg-[#bc9b76] flex justify-center items-center">
                <div className="flex flex-col">
                    <h1 className="font-bold text-xl z-5 mx-9">OUR</h1>
                    <h1 className="font-bold text-xl z-5 mx-9">VISION</h1>
                </div>
                </div>
            </div>
            <div className="w-7/12 flex flex-col justify-center h-full gap-y-2 font-Roboto relative z-10 text-[14.5px] md:text-lg text-justify font-bold tracking-wide text-[#252525]">
                <p className="">
                    This team is fueled by passion and desire to keep improving,
                    no matter the setbacks and evolve into a more well round unit, 
                    focused on consistency, hard-work and producing best end product that we are capable of.
                </p>
                <p>
                    With the rise in global focus towards alternative transportation solution, its not just an ATV for us, it's our dream to 
                    bring e-mobility to a whole new level and contribute towards a better, greener future.
                </p>
            </div>
        </div>
        );
    };
    export default VisionPage;  