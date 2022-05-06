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

const Pen6: NextPage = () => {

  const router = useRouter()
  const title = 'Project Management Dashboard UI'
  const author = 'aybukeceylan'

  const {
    query: { html6, css6, js6 }
  } = router

  const props = {
    html6,
    css6,
    js6,
  }
  
  const [html, setHtml] = useState(props.html6)
  const [css, setCss] = useState(props.css6)
  const [js, setJs] = useState(props.js6)
  const [srcDoc, setSrcDoc] = useState('')

  const getData = async () => {
    await axios.all([
      axios.get('https://codepen.io/aybukeceylan/pen/OJRNbZp.html')
          .then(response => {
              setHtml(response.data)
          }),
  
          axios.get('https://codepen.io/aybukeceylan/pen/OJRNbZp.css')
          .then(response => {
              setCss(response.data)
          }),
  
          axios.get('https://codepen.io/aybukeceylan/pen/OJRNbZp.js')
          .then(response => {
              setJs(response.data)
          })
    ])
  }
  getData();

  axios.all([
    axios.get('https://codepen.io/aybukeceylan/pen/OJRNbZp.html')
        .then(response => {
            setHtml(response.data)
        }),

        axios.get('https://codepen.io/aybukeceylan/pen/OJRNbZp.css')
        .then(response => {
            setCss(response.data)
        }),

        axios.get('https://codepen.io/aybukeceylan/pen/OJRNbZp.js')
        .then(response => {
            setJs(response.data)
        })
  ])
  
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

export default Pen6
