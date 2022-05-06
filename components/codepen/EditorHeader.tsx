import React, { FunctionComponent } from 'react'
import Image from 'next/image'

interface EditorHeaderProps {
  codepenIcon: any;
  editIcon: any;
  title: any;
  author: any;
}

const EditorHeader: FunctionComponent<EditorHeaderProps> = ({codepenIcon, editIcon, title, author}) => {
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
                <input className='editor-header-input' type="text" placeholder={title} ></input>
                <Image
                  className='editor-icon2'
                  src={editIcon}
                  height={13}
                  width={13}
                  alt='editor-icon'
                  />
              <br/>
              <span className='user-name'>{author}</span>
            </div>
        </div>
    </>
  )
}

export default EditorHeader