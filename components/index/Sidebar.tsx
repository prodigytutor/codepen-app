import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar: FunctionComponent = () => {
  return (
    <div className='sidebar'>
      {/* next/image reads public folder simply as '/' - don't need exact file path */}
      <Image
        width={148} 
        height={101} 
        src={`/nexcoder.png`} 
        alt={`side-bar`} 
        className='sidebar-icon'
      />
      <span className='sidebar-subtitle'>TRY OUR ONLINE EDITOR</span>
      {/* next/link href only needs '/' + page name (no file extension) */}
      <Link href="/codepen" passHref >
        <div className='sidebar-href'><span className='sidebar-span'>Start Coding</span></div>
      </Link>
    </div>
  )
}

export default Sidebar