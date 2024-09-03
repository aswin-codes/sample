import React from 'react'
import RightPart1 from './RightPart1'
import RightPart2 from './RightPart2'

const RightComponent = () => {
  return (
    <div className='flex-1 flex flex-col gap-[2px]'>
        <RightPart1/>
        <RightPart2/>
    </div>
  )
}

export default RightComponent