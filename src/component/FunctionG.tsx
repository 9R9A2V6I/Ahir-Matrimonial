
import img1 from "../assets/Bg-images/pexels-kumar-saurabh-625146-1456613.jpg"

function FunctionG() {
  return (
    <>
      <div className='w-[95%] flex justify-center items-center flex-col mt-5'>
        <h1 className='text-center font-semibold heading text-[25px] lg:text-[55px] mb-5'>
          Functions Gallery
        </h1>


        <div className="w-11/12 columns-2 sm:columns-2 lg:columns-3 gap-4 space-y-4 ">
          <img src={img1} alt="" className="rounded-lg w-full lg:h-[450px] h-[250px] " />
          <img src={img1} alt="" className="rounded-lg w-full lg:h-[200px] h-[150px]" />
          <img src={img1} alt="" className="rounded-lg w-full lg:h-[300px] h-[100px]" />
          <img src={img1} alt="" className="rounded-lg w-full lg:h-[250px] h-[200px]" />
          <img src={img1} alt="" className="rounded-lg w-full lg:h-[300px] h-[80px]" />
          <img src={img1} alt="" className="rounded-lg w-full lg:h-[400px] h-[210px]" />
          <img src={img1} alt="" className="rounded-lg w-full lg:h-[250px] h-[140px]" />
          <img src={img1} alt="" className="rounded-lg w-full lg:h-[350px] h-[260px]" />
          <img src={img1} alt="" className="rounded-lg w-full lg:h-[350px] h-[0px]" />
        </div>

      </div>

    </>
  )
}

export default FunctionG
