import React, { FunctionComponent, useEffect, useState } from 'react'
import axios from 'axios'
import Section2Card from './Section2Card'
import Router from 'next/router'
import Link from 'next/link'

const Section2: FunctionComponent = () => {

    const [srcDoc2, setSrcDoc2] = useState('')
    const [html2, setHtml2] = useState('')
    const [css2, setCss2] = useState('')
    const [js2, setJs2] = useState('')
    const [srcDoc3, setSrcDoc3] = useState('')
    const [html3, setHtml3] = useState('')
    const [css3, setCss3] = useState('')
    const [js3, setJs3] = useState('')
    const [srcDoc4, setSrcDoc4] = useState('')
    const [html4, setHtml4] = useState('')
    const [css4, setCss4] = useState('')
    const [js4, setJs4] = useState('')
    const [srcDoc5, setSrcDoc5] = useState('')
    const [html5, setHtml5] = useState('')
    const [css5, setCss5] = useState('')
    const [js5, setJs5] = useState('')
    const [srcDoc6, setSrcDoc6] = useState('')
    const [html6, setHtml6] = useState('')
    const [css6, setCss6] = useState('')
    const [js6, setJs6] = useState('')

    const sendProps2 = () => {
        Router.push({
            pathname: '/pen2',
            query: {
                html2,
                css2,
                js2,
            }
        })
    }
    const sendProps3 = () => {
        Router.push({
            pathname: '/pen3',
            query: {
                html3,
                css3,
                js3,
            }
        })
    }
    const sendProps4 = () => {
        Router.push({
            pathname: '/pen4',
            query: {
                html4,
                css4,
                js4,
            }
        })
    }
    const sendProps5 = () => {
        Router.push({
            pathname: '/pen5',
            query: {
                html5,
                css5,
                js5,
            }
        })
    }
    const sendProps6 = () => {
        Router.push({
            pathname: '/pen6',
            query: {
                html6,
                css6,
                js6,
            }
        })
    }

    // URL thats work
    // https://codepen.io/michellebarker/pen/YzePRve.html  
    // https://codepen.io/z-/pen/OBPJKK 
    // https://codepen.io/hexagoncircle/pen/XWbWKwL
    // https://codepen.io/aybukeceylan/pen/poEqdWZ
    // Animations:
    // https://codepen.io/Mamboleoo/pen/rNzYPjq

    axios.all([
        axios.get('https://codepen.io/gabriellewee/pen/KKQwydY.html')
        .then(response => {
            setHtml2(response.data)
        }),

        axios.get('https://codepen.io/gabriellewee/pen/KKQwydY.css')
        .then(response => {
            setCss2(response.data)
        
        }),

        axios.get('https://codepen.io/gabriellewee/pen/KKQwydY.js')
        .then(response => {
            setJs2(response.data)
        }),
        
        axios.get('https://codepen.io/Mamboleoo/pen/rNzYPjq.html')
        .then(response => {
            setHtml3(response.data)
        }),

        axios.get('https://codepen.io/Mamboleoo/pen/rNzYPjq.css')
        .then(response => {
            setCss3(response.data)
        
        }),

        axios.get('https://codepen.io/Mamboleoo/pen/rNzYPjq.js')
        .then(response => {
            setJs3(response.data)
            
        }),
        // 4
        axios.get('https://codepen.io/aybukeceylan/pen/poEqdWZ.html')
        .then(response => {
            setHtml4(response.data)
        }),

        axios.get('https://codepen.io/aybukeceylan/pen/poEqdWZ.css')
        .then(response => {
            setCss4(response.data)
        
        }),

        axios.get('https://codepen.io/aybukeceylan/pen/poEqdWZ.js')
        .then(response => {
            setJs4(response.data)
            
        }),
        // 5
        axios.get('https://codepen.io/hexagoncircle/pen/XWbWKwL.html')
        .then(response => {
            setHtml5(response.data)
        }),

        axios.get('https://codepen.io/hexagoncircle/pen/XWbWKwL.css')
        .then(response => {
            setCss5(response.data)
        
        }),

        axios.get('https://codepen.io/hexagoncircle/pen/XWbWKwL.js')
        .then(response => {
            setJs5(response.data)
            
        }),
        // 6
        axios.get('https://codepen.io/z-/pen/OBPJKK.html')
        .then(response => {
            setHtml6(response.data)
        }),

        axios.get('https://codepen.io/z-/pen/OBPJKK.css')
        .then(response => {
            setCss6(response.data)
        
        }),

        axios.get('https://codepen.io/z-/pen/OBPJKK.js')
        .then(response => {
            setJs6(response.data)
            
        })
    ])

    useEffect(() => {
        setSrcDoc2(`
        <html>
            <body>${html2}</body>
            <style>${css2}</style>
            <script>${js2}</script>
        </html>
        `)
        setSrcDoc3(`
        <html>
            <body>${html3}</body>
            <style>${css3}</style>
            <script>${js3}</script>
        </html>
        `)
        setSrcDoc4(`
        <html>
            <body>${html4}</body>
            <style>${css4}</style>
            <script>${js4}</script>
        </html>
        `)
        setSrcDoc5(`
        <html>
            <body>${html5}</body>
            <style>${css5}</style>
            <script>${js5}</script>
        </html>
        `)
        setSrcDoc6(`
        <html>
            <body>${html6}</body>
            <style>${css6}</style>
            <script>${js6}</script>
        </html>
        `)
    }, )

  return (
    <>
        <div className='section2'>
                

                <div className='card-container'>
                    <h2>Find inspiration from 1.8 million+ 
                    front-end designers and developers.</h2>
                </div>
                <div className='card-container'>
                    <Link href='/pen2' passHref >
                        <a onClick={sendProps2}>
                            <Section2Card
                            cardSrcDoc={srcDoc2}
                            />
                            <span>by: gabriellewee</span>
                        </a>
                    </Link>
                </div>
                <div className='card-container'>
                    <Link href='/pen3' passHref >
                        <a onClick={sendProps3}>
                            <Section2Card
                            cardSrcDoc={srcDoc3}
                            />
                            <span>by: Mamboleoo</span>
                        </a>
                    </Link>
                </div>
                <div className='card-container'>
                    <Link href='/pen4' passHref >
                        <a onClick={sendProps4}>
                            <Section2Card
                            cardSrcDoc={srcDoc4}
                            />
                            <span>by: aybukeceylan</span>
                        </a>
                    </Link>
                </div>
                <div className='card-container'>
                    <Link href='/pen5' passHref >
                        <a onClick={sendProps5}>
                            <Section2Card
                            cardSrcDoc={srcDoc5}
                            />
                            <span>by: hexagoncircle</span>
                        </a>
                    </Link>
                </div>
                <div className='card-container'>
                    <Link href='/pen6' passHref >
                        <a onClick={sendProps6}>
                            <Section2Card
                            cardSrcDoc={srcDoc6}
                            />
                            <span>by: z-</span>
                        </a>
                    </Link>
                </div>
                
     
        </div>
    </>
  )
}

export default Section2
