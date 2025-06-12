import React from 'react'


interface SubmitBtnProps {
  text: string;
  disabled?: boolean;
}


const SubmitBtn: React.FC<SubmitBtnProps> = ({ text, disabled = false }) => {
  return (
    <>
      <button className='bg-primaryBtn w-10/12 h-full p-2 text-center rounded' type="submit"
        disabled={disabled}>
        <h1 className='text-white heading text-[16px]  font-semibold'>{text}</h1>
      </button>

    </>
  )
}

export default SubmitBtn
