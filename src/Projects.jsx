import React from 'react'
import { ProjectCard } from './components/ProjectCard'
import placeholder from './assets/placeholder.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className=' text-4xl font-bold text-center text-[#36454F]'>
      </h1>
      <p className='text-cetner py-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad esse itaque atque eligendi. Tenetur eveniet, commodi repudiandae maiores reprehenderit sint cumque suscipit similique eos maxime aperiam perferendis, dolor corrupti odio.</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectCard img={placeholder} title='Placeholder'/>
        <ProjectCard img={placeholder} title='Placeholder'/>
        <ProjectCard img={placeholder} title='Placeholder'/>
        <ProjectCard img={placeholder} title='Placeholder'/>
      </div>
    </div>
  )
}

export default Projects