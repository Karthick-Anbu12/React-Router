import React from 'react'
import Card from './Card'

function All() {
    let all=[
        {
          "title": "Full Stack Developer Bootcamp",
          "image":"https://tse1.mm.bing.net/th?id=OIP.suY87C4c5jwrlCWFa9L_NQHaE8&pid=Api&P=0&h=180"
        },
        {
          "title": "Introduction to Data Science",
          "image":"https://www.flexsin.com/blog/wp-content/uploads/2019/12/Custom-Software-Development.jpg"
        },
        {
          "title": "Advanced Machine Learning",
          "image": "https://tse2.mm.bing.net/th?id=OIP.BpuNQffPETrvhL475fjIIgHaEK&pid=Api&P=0&h=180"
        },
        {
          "title": "Web Development with React",
          "image": "https://tse3.mm.bing.net/th?id=OIP.42lzWZay8f4vcsmRy9YbqwHaD6&pid=Api&P=0&h=180"
        },
        {
          "title": "Cloud Computing Fundamentals",
          "image":"https://tse2.mm.bing.net/th?id=OIP.WqDreNz92-NWSDyoU6y1dwHaEj&pid=Api&P=0&h=180"       
          }
      ,
        {
            "title": "Career Planning and Development",
            "image": "https://miro.medium.com/v2/resize:fit:6860/1*1BsrlsOXes3mPdshy_NkDA.jpeg"
        },
        {
            "title": "Resume Writing and Job Search Strategies",
            "image": "https://miro.medium.com/v2/resize:fit:6860/1*1BsrlsOXes3mPdshy_NkDA.jpeg"
        },
        {
            "title": "Interview Preparation and Techniques",
            "image": "https://miro.medium.com/v2/resize:fit:6860/1*1BsrlsOXes3mPdshy_NkDA.jpeg"
        },
         {
                "title": "Introduction to Data Science",
                "image": "https://tse2.mm.bing.net/th?id=OIP.FMvBDoSKPl55TBG1e_G6PAHaEo&pid=Api&P=0&h=180"
            },
            {
                "title": "Data Analysis with Python",
                "image": "https://tse4.mm.bing.net/th?id=OIP.dJToM1TiZiJA0GYwzDHwjQHaHY&pid=Api&P=0&h=180"
            },
            {
                "title": "Machine Learning Fundamentals",
                "image": "https://tse1.mm.bing.net/th?id=OIP.xWR9Tc-KR8MjhFn4OWNiIgHaE7&pid=Api&P=0&h=180"
            },
            {
                "title": "Big Data Analytics",
                "image": "https://tse4.mm.bing.net/th?id=OIP.dJToM1TiZiJA0GYwzDHwjQHaHY&pid=Api&P=0&h=180"
            },
            {
                "title": "Deep Learning with TensorFlow",
                "image": "https://tse1.mm.bing.net/th?id=OIP.xWR9Tc-KR8MjhFn4OWNiIgHaE7&pid=Api&P=0&h=180"
            },
        {
            "title": "Personal Branding and Networking",
            "image": "https://miro.medium.com/v2/resize:fit:6860/1*1BsrlsOXes3mPdshy_NkDA.jpeg"
        },
        {
            "title": "Career Advancement and Skill Building",
            "image": "https://miro.medium.com/v2/resize:fit:6860/1*1BsrlsOXes3mPdshy_NkDA.jpeg"
        },
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
            all.map((ele)=>{
                return <Card ele={ele}></Card>

            }
            )
        }
      
    </div>
  )
}

export default All
