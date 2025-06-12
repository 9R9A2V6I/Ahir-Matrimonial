
import img1 from "../assets/Bg-images/pexels-vireshstudio-2060240.jpg"
function TeamSection() {
  return (
    <>
      <div className='w-[95%] flex justify-center items-center flex-col mt-4'>
        <h1 className=' heading lg:text-[55px] text-[25px]  font-semibold '>Team Members</h1>
        <div className="flex justify-start items-start mt-3 overflow-x-scroll">
          <div className="flex flex-row gap-4  lg:gap-10">
            <div className="flex flex-col items-start">
              <img src={img1} alt="" className=" lg:w-[350px] lg:h-[260px]  w-[120px] h-[100px] rounded-lg" />
              <h1 className="heading lg:text-[25px] font-semibold">Dinesh Yadav</h1>
              <p className="interFamily lg:text-[16px] text-[10px]">Former director of Ahir Samaj</p>
            </div>
            <div className="flex flex-col items-start">
              <img src={img1} alt="" className="lg:w-[350px] lg:h-[260px]  w-[120px] h-[100px] rounded-lg" />
             <h1 className="heading lg:text-[25px] font-semibold">Dinesh Yadav</h1>
              <p className="interFamily lg:text-[16px] text-[10px]">Former director of Ahir Samaj</p>
            </div>
            <div className="flex flex-col items-start">
              <img src={img1} alt="" className=" lg:w-[350px] lg:h-[260px] w-[120px] h-[100px] rounded-lg" />
              <h1 className="heading lg:text-[25px] font-semibold">Dinesh Yadav</h1>
              <p className="interFamily lg:text-[16px] text-[10px]">Former director of Ahir Samaj</p>
            </div>
            {/* <div className="flex flex-col items-start">
      <img src={img1} alt="" className="w-[120px] h-[100px] rounded-lg" />
      <h1 className="heading font-semibold">Dinesh Yadav</h1>
      <p className="interFamily text-[10px]">Former director of Ahir Samaj</p>
    </div> */}
          </div>
        </div>

      </div>
    </>
  )
}

export default TeamSection
