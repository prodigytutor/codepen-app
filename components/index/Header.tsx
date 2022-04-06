import React from 'react'
import Image from 'next/image'

const Header = () => {
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
           />
        </a>
        <div className='mobile-icon'>
          <button>
            <Image
              height={40}
              width={40}
              alt={`search`}
              src={`/menu.svg`}
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
            className={`search-icon`}
            />
          <input type="text" placeholder='Search CodePen...' />
        </form>
        <a className='btn sign-up' href="">Sign Up</a>
        <a className='btn sign-in' href="">Sign In</a>
    </div>
    </>
  )
}
export default Header