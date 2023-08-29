import Image from "next/image";
import srmImage from "../../components/assets//Srmseal.png"
import Link from "next/link";
import { GrNext } from "react-icons/gr";
const CareerPage =()=>{
  return(
  <>
    <div className="container flex flex-col md:flex-row-reverse m-10 mx-auto p-10 border-4 border-black justify-between gap-y-7 rounded-3xl ">
      <div>
        <Image src={srmImage} width={400}/>
      </div>
      <div className="text-3xl text-justify flex flex-col gap-4 justify-between items-center">
        <div className="text-3xl text-justify flex flex-col gap-4 ">
          <p>We re looking for innovative talent to join our team. </p>
          <p>See all positions and submit your CV.</p>    
        </div>

      <div className="flex justify-start items-start md:flex-row flex-col gap-4 md:gap-10">
        <button className="border-4 border-black rounded-full py-4 w-36 md:w-72">Apply</button>
        <Link href="/team">
          <button className="border-4 border-black rounded-full py-4 w-36 md:w-72">Our Team</button>
        </Link>
      </div>
      
      <Link href="/about"  className="flex justify-center md:justify-start w-full">
          <button className="border-2 border-black rounded-full p-4 rotate-180">
            <GrNext />
          </button>
      </Link>
      </div>
    </div>
  </>
    
  )
}
export default CareerPage;
