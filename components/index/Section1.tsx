import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Section1Html from './Section1Html'
import Section1Js from './Section1Js'
import Section1Css from './Section1Css'
import Link from 'next/link'

const Section1: FunctionComponent = () => {
  return (
    <>
    <div className='section1-container'>
        <div className='container1'>
            <Image 
                src={`/codepen-icon-section1.svg`} 
                height={15} 
                width={15} 
                alt='section 1 icon'
                className='section1-icon'
            />
            <h1 className='section1-title'>The best place to build, test, and learn front-end code.</h1><br/>
            <p className='section1-subtitle'> Nexcoder is a <b>social development environment</b> for those learning front-end development. Build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration.</p>
            <Link className='btn sign-up' href="">Sign Up for Free</Link>
        </div>
        <div className='container2'>
          <div className='gray-square'>
              <div>
                <Section1Html />
              </div>
              <div>
                <Section1Css />
              </div>
              <div>
                <Section1Js />
              </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Section1