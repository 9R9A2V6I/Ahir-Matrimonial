
import img1 from "../assets/Bg-images/pexels-vireshstudio-2060240.jpg"

function NewsSection() {
  return (
    <>
      <div className='w-[90%] flex justify-center items-center flex-col mt-4'>
        <h1 className=' heading lg:text-[40px] text-[25px]  font-semibold '>Today News</h1>
        <div className='flex justify-around items-center lg:gap-10 gap-10 mt-5 '>
          <img src={img1} alt="" className='w-4/12 lg:h-[200px] h-[130px] rounded-lg ' />
          <div className="w-7/12">
            <h1 className='heading lg:text-[30px] text-[16px] font-semibold  lg:leading-[45px]'>Publication of the website of Ahir Yadav Samaj</h1>
            <p className='interFamily lg:text-[16px] text-[10px]  font-extralight lg:mt-3 mt-1 lg:leading-[28px] leading-[14px]'>Apr 4, 2025 Program No Comments 75 Views Social Brothers: - This website has been created in the name of Ahir Yadav Samaj.  Its objective is to provide free education to the people living across the state.</p>
          </div>
        </div>
        <div className='flex justify-around items-center lg:gap-10 gap-3 mt-5 '>

         <div className="w-7/12">
            <h1 className='heading lg:text-[30px] text-[16px] font-semibold  lg:leading-[45px]'>Publication of the website of Ahir Yadav Samaj</h1>
            <p className='interFamily lg:text-[16px] text-[10px]  font-extralight lg:mt-3 mt-1 lg:leading-[28px] leading-[14px]'>Apr 4, 2025 Program No Comments 75 Views Social Brothers: - This website has been created in the name of Ahir Yadav Samaj.  Its objective is to provide free education to the people living across the state.</p>
          </div>
          <img src={img1} alt="" className='w-4/12 lg:h-[200px] h-[130px] rounded-lg ' />
        </div>
      </div>


    </>
  )
}

export default NewsSection
