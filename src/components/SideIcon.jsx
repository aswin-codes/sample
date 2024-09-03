import React from 'react'
import Question from '../assets/question.png';
import More from '../assets/more.png';

const SideIcon = () => {
  return (
    <div>
        <img src={Question} className='size-6 object-contain mb-20'/>
        <img src={More} className='size-6 object-contain'/>
    </div>
  )
}

export default SideIcon