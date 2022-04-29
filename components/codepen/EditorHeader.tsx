import React, { FunctionComponent } from 'react'
import Image from 'next/image'

interface EditorHeaderProps {
  codepenIcon: any;
  editIcon: any;
}

const EditorHeader: FunctionComponent<EditorHeaderProps> = ({codepenIcon, editIcon}) => {
  return (
    <>
        <div className="editor-header-top">
            <div className='icon-wrapper'>
              <Image
                className='editor-icon1'
                height={35}
                width={35}
                src={codepenIcon}
                alt='editor-icon'
                />
            </div>
            <div>
                <input className='editor-header-input' type="text" placeholder='Untitled' ></input>
                <Image
                  className='editor-icon2'
                  src={editIcon}
                  height={13}
                  width={13}
                  alt='editor-icon'
                  />
              <br/>
              <span className='user-name'>Captain Anonymous</span>
            </div>
        </div>
    </>
  )
}

export default EditorHeader