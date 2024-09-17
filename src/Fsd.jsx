import React from 'react'
import Card from './Card'

function Fsd() {
    let courses = [
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
        ]
      
  return (
    <div className='d-flex flex-wrap mt-5 '>
    { courses.map((ele)=>{
        return <Card ele={ele}/>

      })}
    </div>
  )
}

export default Fsd
