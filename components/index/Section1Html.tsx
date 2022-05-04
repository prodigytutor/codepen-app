import React, { FunctionComponent } from 'react'
import Image from 'next/image'

const Section1Html: FunctionComponent = () => {
  return (
    <>
    <div className='example1'>
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
                    <span>HTML</span>
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
                <span className='brown'>
                    {`<div `}
                </span>
                <span className='yellow'>
                    {`class`}
                </span>
                =
                <span className='green'>
                    {`"rect"`}
                </span>
                <span className='brown'>
                    {`></div>`}
                </span>
            </code>
        </div>
    </div>
    
    </>
  )
}

export default Section1Html
