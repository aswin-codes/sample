import { useState } from 'react'
import SideIcon from './SideIcon'
import Navbar from './Navbar'

const RightPart1 = () => {
    const [sectionNo, setSectionNo] = useState(1);
    return (
        <div className='flex-1 flex-col flex items-center max-w-screen sm:text-base text-xs'>
            <div className='flex-1 bg-prim3 w-full rounded-2xl drop-shadow-cus flex  lg:gap-2 gap-1 py-4 lg:px-3 px-2 mb-4  '>
                <SideIcon />
                <div className='flex-col flex-1'>
                    <Navbar sectionNo={sectionNo} setFunc={setSectionNo} />
                    <div className='overflow-y-auto pt-3 max-h-44  text-grey2'>
                        {sectionNo == 1 && <p>Hello! I'm Aswin Raaj P S, your cool frontend dev here from VIT. I've been working at this field for 3 years now.
                            I was born and raised in Trichy,India have been living in Chennai for the past 3 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...= h-1/2sdfgj eirtgjioerutgidtufgiosdfug hjostyuhosidfjgiosrtuysdiofjg lekrjt weruteiosfjglkerjtgearigj ir5terut ert</p>}
                        {sectionNo == 2 && <p>Hello! This is the content for Expriences</p>}
                        {sectionNo == 3 && <p>Hello! The content for Recommended could be added here</p>}
                    </div>
                </div>
            </div>
            <div className='h-1 w-5/6 rounded bg-prim3 drop-shadow-cus mb-2'></div>
        </div>
    )
}

export default RightPart1