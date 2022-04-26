import React, { FunctionComponent, useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'


interface EditorProps {
  language: string;
  displayName: string;
  value: any;
  onChange: any;
}

interface HandleChangeProps {
  editor: string;
  data: string;
  value: string;
}

const Editor: FunctionComponent<EditorProps> = ({language, displayName, value, onChange}) => {

  const [open, setOpen] = useState(true)

  function handleChange({editor, data, value}: HandleChangeProps) {
    onChange(value)
  }


  return (
    <>
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
        <div className='editor-title'>
            {displayName}
            <button
                type='button'
                className='expand-collapse-button'
                onClick={() => setOpen(prevOpen => !prevOpen)}    
            >
                <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
            </button>
        </div>
        <Controlled
            onBeforeChange={handleChange}
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