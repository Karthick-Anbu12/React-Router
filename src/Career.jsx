import React from 'react'
import Card from './Card'

function Career() {
    let course=[
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
            "title": "Personal Branding and Networking",
            "image": "https://miro.medium.com/v2/resize:fit:6860/1*1BsrlsOXes3mPdshy_NkDA.jpeg"
        },
        {
            "title": "Career Advancement and Skill Building",
            "image": "https://miro.medium.com/v2/resize:fit:6860/1*1BsrlsOXes3mPdshy_NkDA.jpeg"
        }
    ]
    
    return (
        <div className='container d-flex flex-wrap mt-5'>
            {
                course.map((ele)=>{
                    return <Card ele={ele}/>

                })
            }
        </div>
    )
}

export default Career
