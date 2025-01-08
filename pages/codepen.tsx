import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next';
import Editor from '../components/codepen/Editor';
import jsIcon from '../public/js-icon.svg';
import htmlIcon from '../public/html-icon.svg';
import cssIcon from '../public/css-icon.svg';
import Split from 'react-split'
import EditorHeader from '../components/codepen/EditorHeader';
import headerIcon from '../public/nexcoder.png';
import editIcon from '../public/edit-icon.svg'
import Footer from '../components/codepen/Footer';

const Codepen: NextPage = () => {


  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState('')
  const title = 'Untitled'
  const author = 'Captain Anonymous'
  
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
    <EditorHeader 
      codepenIcon={headerIcon}
      editIcon={editIcon}
      title={title}
      author={author}
      />
    <Split className='split' direction='vertical'>
   
      <div className='editors-wrapper'>

      
        
          <Split className='editors' direction='horizontal'>
            <div className='left-divider-wrapper'>
            <div className='left-divider'/>
                <Editor
                    language='xml'
                    displayName='HTML'
                    value={html}
                    onChange={setHtml}
                    svg={htmlIcon}
                />
              </div>
            <div>
                <Editor
                    language='css'
                    displayName='CSS'
                    value={css}
                    onChange={setCss}
                    svg={cssIcon}
                  />
            </div>
            <div>
            <Editor
                  language='javascript'
                  displayName='JS'
                  value={js}
                  onChange={setJs}
                  svg={jsIcon}
              />
            </div>
          </Split>
      
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
          <Footer />
      </div>
   
      
    </Split>
    
    </>
  )
}

export default Codepen