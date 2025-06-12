
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { MdWhatsapp } from "react-icons/md";

function Footer() {
  return (
    <>
      <div className="w-full bg-footerBg lg:h-96  h-[330px] mt-5 flex justify-center items-center flex-col">

        <h1 className=" lg:text-[28px]  text-[18px] font-semibold heading text-white">Ahir Yadav Samaj Nimar </h1>
        <p className="lg:text-[15px] font-meduim text-[10px] mt-2 lg:w-6/12 w-10/12 text-white text-center">यह वेबसाइट अहीर यादव समाज भोपाल के नाम से बनाई गई है। http://www.nimarahiryadavsamaj.com इसका उद्देश्य है कि देश भर में रह रहे अहीर यादव समाज को एक साथ जोड़ना है, जो भी सामाजिक बंधु समाज से जुड़ना चाहता है तो वह बेबसाइट पर सदस्यता फार्म भर सकता है। ओर आपके परिवार में विवाह योग्य युवक – युवती का बायोडाटा इस मोबाइल नम्बर पर +91-9999999999 व्हाट्सएप कर सकते है। जिससे युवक -युवतियों के रिश्ते ( शादी ) के योग्य युवक – युवतियों शादी के बंधन में बंध सके. ( यह सुविधा निःशुल्क है)। जय माधव – जय यादव</p>
    
          <div className="flex justify-center items-center gap-8 mt-5">
            <div className="bg-white lg:h-12 lg:w-12 h-10 w-10 rounded-full flex justify-center items-center ">
              <FaFacebook size={24} color="black" />
            </div>
            <div className="bg-white lg:h-12 lg:w-12 h-10 w-10 rounded-full flex justify-center items-center ">
              <MdWhatsapp size={24} color="black" />
            </div>
            <div className="bg-white lg:h-12 lg:w-12 h-10 w-10 rounded-full flex justify-center items-center ">
              <BsInstagram size={24} color="black" />
            </div>
            <div className="bg-white lg:h-12 lg:w-12 h-10 w-10 rounded-full flex justify-center items-center ">
              <FaYoutube size={24} color="black" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-5 lg:gap-8 mt-5 w-full">
            <h1 className="lg:text-[18px]  text-[14px] lg:font-semibold font-medium heading text-white">Home</h1>
            <h1 className="lg:text-[18px]  text-[16px] lg:font-semibold font-medium heading text-white">Bribe</h1>
            <h1 className="lg:text-[18px]  text-[16px] lg:font-semibold font-medium heading text-white">Groom</h1>
            <h1 className="lg:text-[18px]  text-[16px] lg:font-semibold font-medium heading text-white">BioData</h1>
            <h1 className="lg:text-[18px]  text-[16px] lg:font-semibold font-medium heading text-white">Contact Us</h1>
          </div>
          <hr className="lg:w-5/12 w-9/12 h-[1px] bg-white mt-3" />
          <p className="title lg:text-[16px] text-[11px] font-light text-white mt-2">Copyright ©2025 Nimar Ahir Yadav Samaj All rights reserved </p>
          </div>
      </>
  )
}

export default Footer
