import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next';
import Editor from '../components/codepen/Editor';
import jsIcon from '../public/js-icon.svg';
import htmlIcon from '../public/html-icon.svg';
import cssIcon from '../public/css-icon.svg';
import Split from 'react-split'
import EditorHeader from '../components/codepen/EditorHeader';
import headerIcon from '../public/codepen-icon-small.svg';
import editIcon from '../public/edit-icon.svg';
import { useRouter } from 'next/router';
import axios from 'axios';

const Pen2: NextPage = () => {

  const router = useRouter()
  const title = 'CSS-Only Pokémon Quest Starter Icons'
  const author = 'gabriellewee'

  const {
    query: { html2, css2, js2 }
  } = router

  const props = {
    html2,
    css2,
    js2,
  }

  const [html, setHtml] = useState(props.html2)
  const [css, setCss] = useState(props.css2)
  const [js, setJs] = useState(props.js2)
  const [srcDoc, setSrcDoc] = useState('')

  const getData = async () => {
    try {
      await axios.all([
        axios.get('https://codepen.io/gabriellewee/pen/KKQwydY.html')
        .then(response => {
            setHtml(response.data)
        }),
    
        axios.get('https://codepen.io/gabriellewee/pen/KKQwydY.css')
        .then(response => {
            setCss(response.data)
        
        }),
    
        axios.get('https://codepen.io/gabriellewee/pen/KKQwydY.js')
        .then(response => {
            setJs(response.data)
        })
      ])
    } catch (error) {
      console.log(error)
    }
    
  }
  

  useEffect(() => {
    getData();
  })
  
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
    <Split className='split' direction='vertical' style={{ height: '100vh'}}>
   
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
      </div>

    </Split>
    </>
  )
}

export default Pen2
