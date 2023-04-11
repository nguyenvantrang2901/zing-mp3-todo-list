import React, { memo } from 'react'

const Section = () => {
  return (
    <div className='pt-[28px] px-[59px]'>
        <div>
            <div className='text-sm justify-between items-center'>
                <div>Title</div>
                <span>TẤT CẢ</span>
            </div>
        </div>
    </div>
  )
}

export default memo(Section)