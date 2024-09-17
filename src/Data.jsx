import React from 'react'
import Card from './Card'

function Data() {
    let course = [
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
        }
    ]
    return (
        <div className='container d-flex flex-wrap mt-5'>
            {course.map((ele) => {
                return <Card ele={ele}></Card>

            })
            }
        </div>
    )
}

export default Data
