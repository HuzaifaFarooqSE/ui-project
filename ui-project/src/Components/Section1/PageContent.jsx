import React from 'react'
import LeftContent from './LeftContent.jsx'
import RightContent from './RightContent.jsx'

const PageContent = () => {
  return (
    <div className='py-3 px-18 h-[90vh] gap-10 flex justify-between '>
      <LeftContent />
      <RightContent />
      
    </div>
  )
}

export default PageContent

