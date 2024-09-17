import React from 'react'
import Card from './Card'

function Cyber() {
    let course=[
        {
            "title": "Introduction to Cybersecurity",
            "image": "https://tse2.mm.bing.net/th?id=OIP.wvWADW_Uve9rFEPRHKCxSwHaGl&pid=Api&P=0&h=180"
        },
        {
            "title": "Network Security Essentials",
            "image": "https://tse2.mm.bing.net/th?id=OIP.wvWADW_Uve9rFEPRHKCxSwHaGl&pid=Api&P=0&h=180"
        },
        {
            "title": "Ethical Hacking Basics",
            "image": "https://tse2.mm.bing.net/th?id=OIP.wvWADW_Uve9rFEPRHKCxSwHaGl&pid=Api&P=0&h=180"
        },
        {
            "title": "Advanced Threat Detection",
            "image": "https://tse2.mm.bing.net/th?id=OIP.wvWADW_Uve9rFEPRHKCxSwHaGl&pid=Api&P=0&h=180"
        },
        {
            "title": "Incident Response and Management",
            "image": "https://tse2.mm.bing.net/th?id=OIP.wvWADW_Uve9rFEPRHKCxSwHaGl&pid=Api&P=0&h=180"
        }
    ]
    
  return (
    <div className='container d-flex flex-wrap mt-5'>
      {
        course.map((ele)=>{
            return <Card ele={ele}></Card>
        })
      }
    </div>
  )
}

export default Cyber
