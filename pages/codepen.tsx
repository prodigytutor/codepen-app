import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next';
import Editor from '../components/codepen/Editor';
import jsIcon from '../public/js-icon.svg';
import htmlIcon from '../public/html-icon.svg';
import cssIcon from '../public/css-icon.svg';
import Split from 'react-split'

// import axios from 'axios'

const Codepen: NextPage = () => {

  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState('')


  // GET requests for html and js from a codepen id
  // axios.get('https://codepen.io/chriscoyier/pen/gHnGD.html')
  // .then(response => {
  //   console.log('getPens html', response)
  // })

  // axios.get('https://codepen.io/chriscoyier/pen/gHnGD.js')
  // .then(response => {
  //   console.log('getPens js', response)
  // })
  
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

           
              <Split direction='vertical' style={{ height: '100vh'}}>
                
                    
                      
                        <div className='editors'>
                          <div className='editor'>
                            <Editor
                                language='xml'
                                displayName='HTML'
                                value={html}
                                onChange={setHtml}
                                svg={htmlIcon}
                            />
                          </div>
                          <div className='editor'>
                            <Editor
                                language='javascript'
                                displayName='JS'
                                value={js}
                                onChange={setJs}
                                svg={jsIcon}
                            />
                          </div>
                          <div className='editor'>
                            <Editor
                                language='css'
                                displayName='CSS'
                                value={css}
                                onChange={setCss}
                                svg={cssIcon}
                            />
                          </div>
                        </div>
                 
                 
              
                <div className='iframe'>
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
              </Split>

    </>
  )
}

export default Codepen