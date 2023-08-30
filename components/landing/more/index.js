import { GrNext } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";
import i1 from "../../../public/assets/logo2.png";
import i2 from "../../../public/assets/logo1.png";
import i3 from "../../../public/assets/logo3.png";
const More = () => {
  const data = [
    {
      id: "1",
      name: "About SRM",
      href: "about",
      image: i1,
      description:
        "SRM Institute of Science and Technology formerly known as SRM University is one of the top ranking universities in India with over 38,000 students and more than 2600 faculty across all the campus, offering a wide range of undergraduate, postgraduate and doctoral programs in Engineering, Management, Medicine and Health sciences, and Science and Humanities.",
    },
    {
      id: "2",
      name: "Career",
      href: "career",
      image: i2,
      description:
        "We re looking for innovative talent to join our team. See all positions and submit your CV.",
    },
    {
      id: "3",
      name: "Vision",
      href: "vision",
      image: i3,
      description:
        "This team is fueled by passion and desire to keep improving, no matter the setbacks and evolve into a more well round unit, focused on consistency, hard-work and producing best end product that we are capable of With the rise in global focus towards alternative transportation solution, its not just an ATV for us, its our dream to bring e-mobility to a whole new level and contribute towards a better, greener future.",
    },
  ];
  return (
    <>
      {data.map((item) => {
        return (
          <div
            className="flex justify-center items-center flex-col border-4 border-black w-72 sm:w-96 h-full rounded-3xl p-5 gap-y-5 backdrop-blur bg-[#ffffff50]"
            key={item.id}
          >
            <div className="flex justify-center items-center w-full">
              <Image src={item.image} alt={item.name} height={200}width={200} className="h-40 w-40"/>
            </div>
            <div className="flex justify-center items-start flex-col w-full gap-y-3">
              <h1 className="font-bold text-xl">{item.name}</h1>
              <p className=" max-sm:text-sm font-semibold w-full md:h-60">
                {item.description}
              </p>
            </div>
            <div className="flex w-full justify-end">
              <Link
                href={`/${item.href}`}
                className="rounded-full p-4 border-4 "
              >
                <GrNext className="h-6 w-6" />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default More;
