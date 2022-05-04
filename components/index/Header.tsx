import React, { FunctionComponent } from 'react'
import Image from 'next/image'

const Header: FunctionComponent = () => {
  return (
    <>
    <div className='header'>
        {/* icons */}
        <a href="">
        <Image 
            height={25}
            width={25}
            alt={`search`}
            src={`/codepen-icon.svg`}
            className='header-icons'
            />
        </a>
        <button>
          <Image
              height={25}
              width={25}
              alt={`search`}
              src={`/menu.svg`}
              className='header-icons'
              />
        </button>
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