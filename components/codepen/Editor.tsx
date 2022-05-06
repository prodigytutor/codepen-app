import React, { FunctionComponent, ChangeEvent } from 'react'
import dynamic from 'next/dynamic'
import CodeMirror from '@uiw/react-codemirror'
import Image from 'next/image'
require('@uiw/react-codemirror')

interface EditorProps { 
  language: string;
  displayName: string;
  value: any;
  onChange: any;
  // onChange: (event: React.ChangeEventHandler<HTMLInputElement>) => void;
  svg: any;
}

const Editor: FunctionComponent<EditorProps> = ({language, displayName, value, onChange, svg}) => {

  // dynamic imports for refreshing page with Next.js
  const CodeMirrorRefresh = dynamic(() => {
    require('codemirror/mode/xml/xml')
    require('codemirror/mode/javascript/javascript')
    require('codemirror/mode/css/css')
    require('codemirror/lib/codemirror.css')
    require('codemirror/theme/material.css')
    return require('@uiw/react-codemirror')
  }, {ssr: false})

  const handleChange = (event: any) => {
    onChange(event)
  }

  return (
    <>
    <div className='editor-container'>
        
          <div className='editor-header'>
              <div className='title-svg-container'>
                <div>
                  <Image alt='language type icon' src={svg} height={20} width={20}/>
                </div>
                <div>{displayName}</div>
              </div>
          </div>
          <div className='codemirror'>
          
              {CodeMirrorRefresh && <CodeMirror
                    onChange={handleChange}
                    value={value}
                    // options={{
                    //     lineWrapping: true,
                    //     lint: true,
                    //     lineNumbers: true,
                    //     mode: language,
                        // theme: 'material',
                    // }}
                />} 
          </div>
      
      
    </div>
    </>
  )
}

export default Editor
