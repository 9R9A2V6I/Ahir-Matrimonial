import img1 from "../assets/Bg-images/pexels-vireshstudio-2060240.jpg"
function GroomBribe() {
  return (
    <>
      <div className='w-[100%] flex justify-center items-center flex-col mt-4'>
        <h1 className=' heading lg:text-[40px] text-[25px]  font-semibold '>Groom and Bribe</h1>

        <div className="overflow-x-auto mt-4 w-full px-3 lg:px-10 no-scrollbar">
          <div className="flex gap-4 w-max px-2">
            {[...Array(7)].map((_, index) => (
              <div key={index} className="lg:w-[300px] w-[160px] shrink-0">
                <img src={img1} alt="" className="rounded-xl w-full" />
                <h1 className="familyInter text-[18px] lg:text-[20px] leading-[20px] mt-2 font-semibold text-blue-500">
                  Vishal Yadav
                </h1>
                <p className="familyInter text-[12px] lg:text-[14px] font-light">
                  Software Engg. Infosys Indore
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto mt-4 w-full px-3 lg:px-10 no-scrollbar">
          <div className="flex gap-4 w-max px-2">
            {[...Array(7)].map((_, index) => (
              <div key={index} className="lg:w-[300px] w-[160px] shrink-0">
                <img src={img1} alt="" className="rounded-xl w-full" />
                <h1 className="familyInter text-[18px] lg:text-[20px] leading-[20px] mt-2 font-semibold  text-primaryBtn ">
                  Prachi Yadav
                </h1>
                <p className="familyInter text-[12px] lg:text-[14px] font-light">
                  Software Engg. Infosys Indore
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}

export default GroomBribe
