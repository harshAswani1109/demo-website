import Image from "next/image"
import srmImage from "../../components/assets/Srmseal.png"
import { GrNext } from "react-icons/gr";
import Link from "next/link";
const AboutPage =()=>{
  return(
    <div className="container my-10 md:mx-auto flex flex-col md:flex-row border-4 p-6 md:p-12 justify-between items-center border-black rounded-3xl space-y-10 md:space-x-40">
      <div>
        <Image src={srmImage} width={2500}/>
      </div>
      
      <div className="flex flex-col justify-between items-center space-y-10 md:space-y-20">
        <div className="text-lg md:text-3xl ">
        SRM Institute of Science and Technology (formerly known as SRM University) is one of the top ranking universities in India with over 38,000 students and more than 2600 faculty across all the campus, offering a wide range of undergraduate, postgraduate and doctoral programs in Engineering, Management, Medicine and Health sciences, and Science and Humanities.
        </div>
        <Link href="/career"  className="flex justify-end w-full">
          <button className="border-2 border-black rounded-full p-4 ">
          <GrNext />
        </button>
        </Link>
        
      </div> 
      
    </div>
    
    
  )
}
export default AboutPage;