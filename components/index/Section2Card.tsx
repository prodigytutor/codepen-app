import React, { FunctionComponent } from 'react'

interface Section2CardProps {
    cardSrcDoc: any;
}

const Section2Card: FunctionComponent<Section2CardProps> = ({cardSrcDoc}) => {
  return (
    <>   
    <iframe 
        srcDoc={cardSrcDoc}
        className='card-iframe'
        // scrolling='yes' 
    />
    </>
  )
}

export default Section2Card