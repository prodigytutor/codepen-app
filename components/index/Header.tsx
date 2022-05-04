import React, { FunctionComponent } from 'react'
import Image from 'next/image'

const Header: FunctionComponent = () => {
  return (
    <>
    <div className='header'>
        {/* icons */}
        <div className='mobile-icons'>
          <a className='mobile-href' href="">
            <Image
                height={45}
                width={45}
                alt={`search`}
                src={`/codepen-icon-small.svg`}
                className='header-icons'
                />
          </a>
          <button className='mobile-btn'>
            <Image
                height={35}
                width={42}
                alt={`search`}
                src={`/menu.svg`}
                className='header-icons'
                />
          </button>
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
        <div className='flex-grow-1'>
          <a className='btn sign-up' href="">Sign Up</a>
          <a className='btn log-in' href="">Sign In</a>
        </div>
    </div>
    </>
  )
}
export default Header