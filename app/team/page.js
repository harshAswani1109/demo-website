import Image from "next/image";
const TeamPage = () => {
  const data = [
    {
      name: "Jayaram V M",
      position: "CAPTAIN",
      img: "https://static.wixstatic.com/media/ffb6a1_69df6928ead34eaf967656186c5b241f~mv2.jpg/v1/fill/w_281,h_372,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ffb6a1_69df6928ead34eaf967656186c5b241f~mv2.jpg",
    },
    {
      name: "Mohan R",
      position: "VICE-CAPTAIN",
      img: "https://static.wixstatic.com/media/ffb6a1_cec8b9704ee54303aa9ae174a5aea320~mv2.jpg/v1/fill/w_279,h_372,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ffb6a1_cec8b9704ee54303aa9ae174a5aea320~mv2.jpg",
    },
    {
      name: "Matura Ganesh",
      position: " ELECTRONICS LEAD",
      img: "https://static.wixstatic.com/media/ffb6a1_3ba016e6c4ca446494be55dbf3a3ddaa~mv2.jpg/v1/fill/w_272,h_372,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ffb6a1_3ba016e6c4ca446494be55dbf3a3ddaa~mv2.jpg",
    },
    {
      name: "Gowthaman SP",
      position: "ELECTRICAL SAFETY OFFICER",
      img: "https://static.wixstatic.com/media/ffb6a1_7f5047f73dfb44b6b9461bd0adea2657~mv2.jpg/v1/fill/w_271,h_372,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ffb6a1_7f5047f73dfb44b6b9461bd0adea2657~mv2.jpg",
    },
    {
      name: "",
      position: "",
      img: "https://static.wixstatic.com/media/ffb6a1_3cc2e4a1bdda41158fe7d9ee7a2cd248~mv2.jpg/v1/fill/w_289,h_372,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC_0190%20-%20Copy_edited.jpg",
    },
    {
      name: "",
      position: "",
      img: "https://static.wixstatic.com/media/ffb6a1_440e9ff94803489f8ca42146a12ca590~mv2.jpg/v1/fill/w_279,h_372,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC_0074%20-%20Copy_edited.jpg",
    },
    {
      name: "",
      position: "",
      img: "https://static.wixstatic.com/media/ffb6a1_e2c049aca867495ca5f78dc409499aec~mv2.jpg/v1/fill/w_263,h_372,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC_0127%20-%20Copy_edited.jpg",
    },
    {
      name: "",
      position: "",
      img: "https://static.wixstatic.com/media/ffb6a1_508e0ef49dba44529f60587fc9d7f4bd~mv2.jpg/v1/crop/x_62,y_0,w_1722,h_2257/fill/w_277,h_362,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC_0056%20-%20Copy_edited.jpg",
    },
    {
      name: "",
      position: "",
      img: "https://static.wixstatic.com/media/ffb6a1_508e0ef49dba44529f60587fc9d7f4bd~mv2.jpg/v1/crop/x_62,y_0,w_1722,h_2257/fill/w_277,h_362,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC_0056%20-%20Copy_edited.jpg",
    },
    {
      name: "",
      position: "",
      img: "https://static.wixstatic.com/media/ffb6a1_15738a370a974619982301c2b373fa3a~mv2.jpg/v1/crop/x_0,y_0,w_4000,h_5192/fill/w_365,h_474,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ffb6a1_15738a370a974619982301c2b373fa3a~mv2.jpg",
    },
    {
      name: "",
      position: "",
      img: "https://static.wixstatic.com/media/ffb6a1_0cd9c93e64294e2c907f5857b3032089~mv2.jpg/v1/crop/x_0,y_0,w_4000,h_5405/fill/w_351,h_475,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ffb6a1_0cd9c93e64294e2c907f5857b3032089~mv2.jpg"
    },
    {
      name: "",
      position: "",
      img: "https://static.wixstatic.com/media/ffb6a1_fff60974db704dbea29f3928d1f9df2c~mv2.jpg/v1/crop/x_0,y_0,w_4000,h_5248/fill/w_359,h_471,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ffb6a1_fff60974db704dbea29f3928d1f9df2c~mv2.jpg",
    },
    {
      name: "",
      position: "",
      img: "https://static.wixstatic.com/media/ffb6a1_1cf8cf10e62b4cbeb10462dfe0f25f49~mv2.jpg/v1/crop/x_0,y_0,w_4000,h_5274/fill/w_365,h_481,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ffb6a1_1cf8cf10e62b4cbeb10462dfe0f25f49~mv2.jpg",
    },
    {
      name: "",
      position: "",
      img: "https://static.wixstatic.com/media/ffb6a1_6f9b0bf4ef17410d9babea0ff3d8f656~mv2.jpg/v1/crop/x_0,y_0,w_4000,h_5383/fill/w_356,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ffb6a1_6f9b0bf4ef17410d9babea0ff3d8f656~mv2.jpg",
    },
    {
      name: "",
      position: "",
      img: "https://static.wixstatic.com/media/ffb6a1_4522715d255b4a5e92e04b8ac1e92c59~mv2.jpg/v1/crop/x_0,y_0,w_4000,h_5276/fill/w_366,h_483,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ffb6a1_4522715d255b4a5e92e04b8ac1e92c59~mv2.jpg",
    },
  ];

  return (
    <div className="flex justify-center items-center gap-5 flex-wrap">
      {data.map((item) => {
        return (
          <div
            className="rounded-3xl overflow-hidden shadow-xl backdrop-blur bg-[#ffffff50] h-80 w-80 flex flex-col justify-center items-center gap-4"
            key={item.id}
          >
            <div className="flex justify-center mt-4 items-center h-52 w-52 hover:h-96 hover:w-96 ">
              <Image
                src={item.img}
                height={200}
                width={200}
                alt={item.name}
                className="transition-all ease-in-out duration-300 rounded-full border-solid border-white border-2 h-full w-full hover:rounded-none text-[#252525]"
              />
            </div>
            <div className="text-center">
              <h3 className=" text-sm font-bold font-sans tracking-wider">
                {item.name}
              </h3>
              <p className="mt-2 font-sans font-semibold ">{item.position}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TeamPage;
