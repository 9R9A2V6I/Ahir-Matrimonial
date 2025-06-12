
import img1 from "../assets/Bg-images/pexels-vireshstudio-2060240.jpg"
function TeamSection() {
  return (
    <>
      <div className='w-[100%] flex justify-center items-center flex-col mt-4'>
        <h1 className=' heading lg:text-[40px] text-[25px]  font-semibold '>Team Members</h1>
        <div className="overflow-x-auto mt-4  px-3 lg:px-10 no-scrollbar w-full">
          <div className="flex gap-4 w-max   ">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="flex flex-col items-start shrink-0 w-[120px] lg:w-[350px]">
                <img
                  src={img1}
                  alt=""
                  className="lg:w-[350px] lg:h-[260px] w-[120px] h-[100px] rounded-lg"
                />
                <h1 className="heading lg:text-[25px] font-semibold">Dinesh Yadav</h1>
                <p className="interFamily lg:text-[16px] text-[10px]">
                  Former director of Ahir Samaj
                </p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </>
  )
}

export default TeamSection
