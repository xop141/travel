import React from 'react'
import Image from "next/image";
import TextPop from './textPop';

const homeTOP = () => {
  return (
    <div>
        {/* homepage img */}
        <div className='w-full h-[400px] bg-blue-300'>
            <TextPop/>
        </div>
     
    </div>
  )
}

export default homeTOP
