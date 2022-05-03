import React, { FunctionComponent } from 'react'
import Image from 'next/image'

const Section1: FunctionComponent = () => {
  return (
    <>
    <div className='section1-container'>
        <div className='container1'>
            <Image 
                src={`/codepen-icon-section1.svg`} 
                height={45} 
                width={45} 
                alt='section 1 icon'
                className='section1-icon'
            />
            <h1 className='section1-title'>The best place to build, test, and discover front-end code.</h1><br/>
            <p className='section1-subtitle'> CodePen is a <b>social development environment</b> for front-end designers and developers. Build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration.</p>
        </div>
        <div className='container2'>
            <div className="codepen-example1">codepen example</div>
            <div className="codepen-example2">codepen example</div>
            <div className="codepen-example3">codepen example</div>
        </div>
    </div>
    </>
  )
}

export default Section1