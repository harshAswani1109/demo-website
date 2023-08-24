import Image from "next/image";
import i1 from "@/public/assets/solid.png";
import i2 from "@/public/assets/proj.png";
import i3 from "@/public/assets/indianoil.png";
import i4 from "@/public/assets/ansys.png";
const SponsorPage = () => {
  const data = [
    {
      id: "1",
      name: "BS SOLID WORKS",
      image: i1,
    },
    {
      id: "2",
      name: "TATA PRODUCTS",
      image: i2,
    },
    {
      id: "3",
      name: "ANSYS",
      image: i4,
    },
    {
      id: "4",
      name: "INDIAN OIL",
      image: i3,
    },
  ];
  return (
    <div className="flex flex-wrap justify-center items-center gap-10 py-6">
      {data.map((item) => {
        return (
          <div
            className="flex flex-col rounded-lg bg-[#ffffff50] backdrop-blur shadow-2xl h-80 w-80"
            key={item.id}
          >
            <div className="flex justify-center items-center h-full w-full">
              <Image
                className="rounded-t-lg sm:rounded-tl-none h- w-"
                src={item.image}
                alt={item.name}
                height={300}
                width={300}
              />
            </div>

            <div className="p-6">
              <h5 className="mb-2 text-xl font-bold text-[#252525]">
                {item.name}
              </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default SponsorPage;
