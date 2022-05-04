import React, { FunctionComponent } from 'react'
import Image from 'next/image'

const Section1Js: FunctionComponent = () => {
  return (
    <div>
        <div className='code-example'>
            <div className='code-example-header'>   
                <div className='settings-label-container'>
                    <div className='img-wrapper'>
                        <Image
                            src={`/settings.svg`}
                            alt='settings'
                            width={17}
                            height={17}
                            className='example-icon'
                            />
                    </div>
                    <span>JS</span>
                </div>
                <div className='img-wrapper'>
                    <Image
                        src={`/down-arrow.svg`}
                        alt='settings'
                        width={16}
                        height={16}
                        className='example-icon'
                    />
                </div>
            </div>
            <code className='code-section'>
                <span className='yellow'>
                    {`var `}
                </span>
                <span className='blue'>
                    {`colors `}
                </span>
                = 
            </code><br/>
            <code className='code-section'>
                [
                <span className='green'>
                    {`"#74B087"`}
                </span>
                ,
                <span className='green'>
                    {`"#DE7300"`}
                </span>
                ,
                <span className='green'>
                    {`"#74B087"`}
                </span>
                ];
            </code><br/>
            <code className='code-section'>
                {/* Extra spaces */}
                <span >
                    {` `}
                </span><br/>
                <span>
                    {` `}
                </span>
            </code>
            <br/>
            <code className='code-section'>
                <span className='yellow'>
                    {`function `}
                </span>
                <span className='blue'>
                    {`animate`}
                </span>
                <span className='white'>
                    {`() {};`}
                </span>

            </code>
        </div>
    </div>
  )
}

export default Section1Js