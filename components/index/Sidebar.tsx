import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='sidebar'>
      {/* next/image reads public folder simply as '/' - don't need exact file path */}
      <Image width={2500} height={454} src={`/codepen-logo.svg`} alt={`side-bar`} className={`sidebar-icon`}/>
      <a className='sidebar-href' href="">
        <span className='sidebar-span'>Start Coding</span>
      </a>
    </div>
  )
}

