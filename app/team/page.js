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
      img: "https://drive.google.com/file/d/1l39nI7b-H4SMnOw2hP3hQl3MDlCmMZHg/view?usp=sharing",
    },
    {
      name: "",
      position: "",
      img: "https://drive.google.com/file/d/1W77ZN89qSLmtl-CHHCuIWpO-59yniwS8/view?usp=sharing",
    },
    {
      name: "",
      position: "",
      img: "https://drive.google.com/file/d/1Z5B9Qf7HQxFvuBA7vAHq4E6GRyEPrBTf/view?usp=sharing",
    },
    {
      name: "",
      position: "",
      img: "https://drive.google.com/file/d/1OzjVeMNiu2rYfLfn_4P1CZkBkq4-eDsY/view?usp=sharing",
    },
    {
      name: "",
      position: "",
      img: "https://drive.google.com/file/d/1VOPLz6BQVfo7K_Q3ccXXLke5ceXdGL_I/view?usp=sharing",
    },
    {
      name: "",
      position: "",
      img: "https://drive.google.com/file/d/1Hb2vzxeyn2v7BoLM-REH0CJkACk3MfiV/view?usp=sharing",
    },
    {
      name: "",
      position: "",
      img: "https://drive.google.com/file/d/1-BD-3CxgiZO7h8zFYke3yNJAkrqwybmI/view?usp=sharing",
    },
    {
      name: "",
      position: "",
      img: "https://drive.google.com/file/d/1S95A6RwOvd9UPt7o3II3KcJ0urxMbhVQ/view?usp=sharing",
    },
    {
      name: "",
      position: "",
      img: "https://drive.google.com/file/d/1RANtFfn72KAEPyq_xQuvwHG649NJOXxW/view?usp=sharing",
    },
    {
      name: "",
      position: "",
      img: "https://drive.google.com/file/d/17w0OZ9uIaahIiAaGibm0XLg7OyckdeZI/view?usp=sharing",
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
            <div className="flex justify-center mt-4 items-center h-52 w-52 hover:h-96 hover:w-96 transition hover:ease-in ease-out duration-150">
              <Image
                src={item.img}
                height={200}
                width={200}
                alt={item.name}
                className="rounded-full border-solid border-white border-2 h-full w-full hover:rounded-none text-[#252525]"
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
