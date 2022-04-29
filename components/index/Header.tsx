import React, { FunctionComponent } from 'react'
import Image from 'next/image'

const Header: FunctionComponent = () => {
  return (
    <>
    <div className='header'>
      <div className='mobile-icons'>
        <a className='mobile-icon' href="">
          <Image 
            height={50}
            width={50}
            alt={`search`}
            src={`/codepen-icon.svg`}
            className='header-icon1'
           />
        </a>
        <div className='mobile-icon'>
          <button>
            <Image
              height={40}
              width={40}
              alt={`search`}
              src={`/menu.svg`}
              className='header-icons'
             />
          </button>
        </div>
        </div>  
        <form className='search-form' action="">
          <Image 
            height={25}
            width={25}
            alt={`search`}
            src={`/search.svg`}
            className='header-icons'
            
            />
          <input type="text" placeholder='Search CodePen...' />
        </form>
        <a className='btn sign-up' href="">Sign Up</a>
        <a className='btn log-in' href="">Sign In</a>
    </div>
    </>
  )
}
export default Header