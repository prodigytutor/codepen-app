import React, { FunctionComponent } from 'react'
import Image from 'next/image'

const Section1Css: FunctionComponent = () => {
  return (
    <>
        <div className='example2'>
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
                        <span>SCSS</span>
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
                        {`.rect `}
                    </span>
                    <span className='white'>
                        {`{`}
                    </span><br/>
                    <span className='transparent'>
                        {`....`}
                    </span>
                    <span className='purple'>
                        {`background`}
                    </span>
                    :
                    <span className='yellow'>
                        {` linear-gradient`}
                    </span>
                    (<br/>
                    <span className='transparent'>
                        {`........`}
                    </span>
                    <span className='orange'>
                        {`-119deg`}
                    </span>
                    ,<br/>
                    <span className='transparent'>
                        {`........`}
                    </span>
                    <span className='yellow'>
                        {`$gray `}
                    </span>
                    <span className='orange'>
                        {`0%`}
                    </span>
                    ,<br/>
                    <span className='transparent'>
                        {`........`}
                    </span>
                    <span className='yellow'>
                        {`$dark-gray `}
                    </span>
                    <span className='orange'>
                        {`100%`}
                    </span>
                    <span className='white'>
                        {`); }`}
                    </span>
                    <br/>
                </code>
            </div>
        </div>
    </>
  )
}

export default Section1Css