import React from 'react'
import WorkItem from './components/WorkItem'

const Work = () => {
  const work_data = [
    {
      "year": 2023,
      "title": "Research Assistant",
      "duration": "7 months",
      "details": "More specifically, I took the role as the lead developer on the cloud team. I developed and upkept the entire backend and frontend for the project. To do so, I leveraged the AWS services EC2, S3, and RDS. I built the pipeline for data to be recieved through a custom API that leveraged Pydantic models, hosted in Docker on the EC2 container that then ran a ML model on the media, store the data in RDS with media in S3, and display results on the Streamlit frontend. During this project, I collaborated with 3 other teams seamlessly."
    },
    {
      "year": 2023,
      "title": "Full Stack Web Developer",
      "duration": "4 months",
      "details": "For this position, I inherited legacy code for a website and initially refactored the entire codebase that was written using React. Furthermore, I developed dynamic content generation using Strapi as the CMS so that the content could be maintained easily by my boss once I was gone. I developed the Strapi integration to not only allow for content on pages to be added, but also entire new pages, page layouts, navigation, and content to essentially function as a custom website builder. To accomplish this I leveraged EC2 for hosting the frontend and Strapi interface, as well as RDS for the actual database."
    },
    {
      "year": 2023,
      "title": "Computer Science Tutor",
      "duration": "4 months",
      "details": "As a computer science tutor for Oregon State University, I provided personalized help to any and all students for any and all computer science courses and even personal projects. This required incredibly effective communication and adaptation to different learning styles in order to truly help students. This position not only keeps me on top of material throughout the degree, but provides more problem solving experience."
    }
  ]
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-[#36454F] text-4xl font-bold text-center mb-8'>Work</h1>
      {work_data.map((item, idx) => (
        <WorkItem key={idx} data={item}/>
      ) )}
    </div>
  )
}

export default Work