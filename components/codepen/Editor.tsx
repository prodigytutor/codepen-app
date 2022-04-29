import React, { FunctionComponent } from 'react'
import dynamic from 'next/dynamic'
import CodeMirror from '@uiw/react-codemirror'
import Image from 'next/image'

interface EditorProps { 
  language: string;
  displayName: string;
  value: any;
  onChange: any;
  svg: any;
}

const Editor: FunctionComponent<EditorProps> = ({language, displayName, value, onChange, svg}) => {

  // dynamic imports for refreshing page with Next.js
  const CodeMirrorRefresh = dynamic(() => {
    import('codemirror/mode/xml/xml')
    import('codemirror/mode/javascript/javascript')
    import('codemirror/mode/css/css')
    import('codemirror/lib/codemirror.css')
    // import('codemirror/theme/material.css')
    return import('@uiw/react-codemirror')
  }, {ssr: false})

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event)
    console.log('handleChange')
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
                    options={{
                        lineWrapping: true,
                        lint: true,
                        lineNumbers: true,
                        mode: language,
                        // theme: 'material',
                    }}
                />}
          </div>
      
      
    </div>
    </>
  )
}

export default Editor


{/* <svg viewBox="0 0 15 15" class="file-type-icon" id="icon-file-js" fill="#FCD000" width="15" height="15" rx="4">
<path d="M6.554 3.705c0 .267-.19.496-.452.543-1.2.217-2.12 1.61-2.12 3.275 0 1.665.92 3.057 2.12 3.274a.554.554 0 0 1-.205 1.087c-1.733-.322-3.022-2.175-3.022-4.361 0-2.187 1.289-4.04 3.022-4.362a.554.554 0 0 1 .657.544zm1.892 0c0-.347.316-.607.657-.544 1.733.322 3.022 2.175 3.022 4.362 0 2.186-1.289 4.04-3.022 4.361a.554.554 0 0 1-.205-1.087c1.2-.217 2.12-1.61 2.12-3.274 0-1.665-.92-3.058-2.12-3.275a.551.551 0 0 1-.452-.543z" fill="#282828"></path>
</svg> */}