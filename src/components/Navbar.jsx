import React from 'react'

const Navbar = ({sectionNo, setFunc}) => {
  return (
    <div className=' flex-1 bg-prim4 mr-5 rounded-2xl p-2 flex cursor-pointer hover:text-white transition-all duration-200 ease-in-out'>
        <div onClick={()=>setFunc(1)} className={`flex-1 ${sectionNo == 1 ? 'bg-prim5 drop-shadow-cus1 text-white' : 'text-grey1'} hover:text-white transition-all duration-200 ease-in-out  mr-1 rounded-lg text-center text-sm sm:text-base py-2`}>About Me</div>
        <div onClick={()=>setFunc(2)} className={`flex-1 ${sectionNo == 2 ? 'bg-prim5 drop-shadow-cus1 text-white' : 'text-grey1'} hover:text-white transition-all duration-200 ease-in-out  mx-1 rounded-lg text-center text-sm sm:text-base py-2`}>Experiences</div>
        <div onClick={()=>setFunc(3)} className={`flex-1 ${sectionNo == 3 ? 'bg-prim5 drop-shadow-cus1 text-white' : 'text-grey1'} hover:text-white transition-all duration-200 ease-in-out  ml-1 rounded-lg text-center text-sm sm:text-base py-2`}>Recommended</div>
    </div>
  )
}

export default Navbar