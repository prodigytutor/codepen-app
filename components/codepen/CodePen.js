import React, { useState, useEffect } from 'react'
import Editor from '../components/Editor.js';
import { cssDonut, jsDonut, htmlDonut } from '../components/donut-codepen.js';

export default function CodePen() {

    const [html, setHtml] = useState(htmlDonut)
    const [css, setCss] = useState(cssDonut)
    const [js, setJs] = useState(jsDonut)
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
