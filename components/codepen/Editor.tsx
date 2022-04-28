import React, { FunctionComponent } from 'react'
import dynamic from 'next/dynamic'
import CodeMirror from '@uiw/react-codemirror'

interface EditorProps { 
  language: string;
  displayName: string;
  value: any;
  onChange: any;
}

const Editor: FunctionComponent<EditorProps> = ({language, displayName, value, onChange}) => {


  // dynamic imports for refreshing page with Next.js
  const CodeMirrorRefresh = dynamic(() => {
    import('codemirror/mode/xml/xml')
    import('codemirror/mode/javascript/javascript')
    import('codemirror/mode/css/css')
    import('codemirror/lib/codemirror.css')
    import('codemirror/theme/material.css')
    return import('@uiw/react-codemirror')
  }, {ssr: false})

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event)
    console.log('handleChange')
  }

  return (
    <>
    <div>
        <div className='editor-title'>
            {displayName}
        </div>
      {CodeMirrorRefresh && <CodeMirror
            onChange={handleChange}
            value={value}
            options={{
                lineWrapping: true,
                lint: true,
                lineNumbers: true,
                mode: language,
                theme: 'material'
            }} 
        />}
    </div>
    </>
  )
}

export default Editor