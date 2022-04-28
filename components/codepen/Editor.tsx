import React, { FunctionComponent } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import CodeMirror from '@uiw/react-codemirror';


interface EditorProps {
  language: string;
  displayName: string;
  value: any;
  onChange: any;
}



const Editor: FunctionComponent<EditorProps> = ({language, displayName, value, onChange}) => {



  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event)
    console.log('onchange event.target', event)
  }


  return (
    <>
    <div>
        <div className='editor-title'>
            {displayName}
            
        </div>
        <CodeMirror
            onChange={handleChange}
            value={value}
            options={{
                lineWrapping: true,
                lint: true,
                lineNumbers: true,
                mode: language,
                theme: 'material'
            }} 
        />
    </div>
    </>
  )
}

export default Editor