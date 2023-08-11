import React, { useEffect, useState } from 'react'
import {BsArrowUpSquareFill} from 'react-icons/bs'
import './BackToTopButton.css'

function BackToTopButton() {
    const [button, setButton] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if( window.scrollY > 100) {
                setButton(true)
            }else{
                setButton(false)
            }
        })
    },[])

    const scrollUpBtn = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <div>
       {
        button && (
            <button onClick={scrollUpBtn} ><BsArrowUpSquareFill className='scroll-btn'/></button>
        )
       }
    </div>
  )
}

export default BackToTopButton