import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next';
import Editor from '../components/codepen/Editor';
// import { htmlGameboy, cssGameboy, jsGameboy } from '../components/codepen/gameboy-code';

const Codepen: NextPage = () => {

  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
      </html>
      `)
      console.log('useEffect codepen.tsx')
    }, 250)
    return () => clearTimeout(timeout)
    
  }, [html, css, js])


  return (
    <>
      <div>
            {/* Codepen */}
            <div className='pane top-pane'>
                <Editor 
                    language='xml'
                    displayName='HTML'
                    value={html}
                    onChange={setHtml}
                />
                <Editor 
                    language='javascript'
                    displayName='JS'
                    value={js}
                    onChange={setJs}
                />
                <Editor 
                    language='css'
                    displayName='CSS'
                    value={css}
                    onChange={setCss}
                />
            </div>
            <div className='pane'>
                <iframe
                    srcDoc={srcDoc}
                    title='output'
                    sandbox='allow-scripts'
                    frameBorder='0'
                    width='100%'
                    height='100%'
                    className='iframe-codepen-page'
                />
            </div>
        </div>
    </>
  )
}

export default Codepen