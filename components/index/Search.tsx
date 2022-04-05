import React from 'react'
import Image from 'next/image'

const Search = () => {
  return (
    <>
    <div className='search'>
        <div className='search-form' >
            <form action="#">
                <Image
                    width={15}
                    height={15}
                    src={`/search.svg`}
                    alt={`side-bar`}
                    className={`sidebar-icon`}
                />
                <input type="text" placeholder='Search CodePen...' />
            </form>
        </div>
            <a className='sign-up btn' href="">Sign Up</a>
            <a className='login btn' href="">Log In</a>
    </div>
    </>
  )
}

export default Search
