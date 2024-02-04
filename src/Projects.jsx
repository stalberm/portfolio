import React from 'react'
import { ProjectCard } from './components/ProjectCard'
import soundbendor from './assets/soundbendor.png'
import levels from './assets/levels.png'
import weather from './assets/weather.png'
import binsight from './assets/binsight.png'
import smartbin from './assets/smartbin.png'

const Projects = () => {
  const project_data = [
    {
      'img': binsight,
      'orient': 'object-left-top',
      'title': "BinSight Mobile App",
      'type': 'Flutter & SQLite',
      'link': '',
      'description': 'The BinSight mobile app is made to interface with a Bluetooth device and provide data. It\'s main purpose is to connect to the device via Bluetooth and send the device WiFi credentials via the app. Afterwhich the app displays data retrieved from a publisher on the cloud that it subscribes to.\n' +
      'Data recieved includes images annotated by a computer vision model, and the app provides the ability to manually annotate images with segmentation maps. Both the app and Bluetooth device are apart of a food waste research project, funded by Kroger.'
    },
    {
      'img': smartbin,
      'orient': 'object-center',
      'title': "Smart Compost Bin: Cloud",
      'type': 'Python, AWS EC2 & RDS',
      'link': 'https://today.oregonstate.edu/news/osu-cascades-researcher-explores-ai-solution-tracking-and-reducing-household-food-waste',
      'description': 'This project pertains to my position as an assistant on the food waste research where I led the cloud team, where all software aspects minus hardware took place. Hosted on an EC2 instance there is a FastAPI server set up to intake the smart bin device images and sensor readings, where the images are then queued for processing by the trained computer vision model using YoloR.\n' +
      'Pydantic models are leveraged for the API and dataprocessing. After recieving the data, sensor readings and annotated images are stored on the RDS database, to then be displayed on a Streamlit frontend, and queried by the BinSight app for user interaction. Image annotation uses segmentation maps for food item boundaries. On the EC2 instance, Docker images are used for each of the \n' +
      'individual aspects, allowing for modularity and isolation of dependencies. Libraries used include Pytorch, pydantic, fastapi, matplotlib and streamlit to name a few.'
    },
    {
      'img': soundbendor,
      'orient': 'object-center',
      'title': "Soundbendor Lab Website",
      'type': 'React Js & SQLite',
      'link': 'https://soundbendor.org',
      'description': 'A website builder made for the SoundBendor research group in the School of Electrical Engineering and Computer Science at Oregon State University. The backend utilizes Strapi as a content manager, and the frontend parses the database json, creating custom services for each table.' +
      'Services implement custom filter functions, ability for pagination, sorting, and more. Each service is used for dynamic generation of each page\'s content. Through the content manager, page layouts, contents, navigation, etc can all be done without the need to touch code; Fully functioning as a website builder, catered to SoundBendor.'
    },
    {
      'img': levels,
      'orient': 'object-center',
      'title': "LevelSage",
      'type': 'React Js ',
      'link': '',
      'description': 'The LevelSage application serves as an interface with data derived from a custom ensemble of Recurrent Neural Network models. The net generates river level forecasts, and the website retrieves the data to create on-demand reports and graphical visualizations through a user-friendly web interface or mobile application.'
    },
    {
      'img': weather,
      'orient': 'object-left-top',
      'title': "Custom Weather Website",
      'type': 'React Js',
      'link': '',
      'description': 'A custom weather app built from scratch using React. Components generated using data retrieved from the OpenWeather API. Loads data using a custom React hook, taking user input and returning forecast data, loading status, and error status. Styling was done using Emotion.'
    }
  ]
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#36454F] mb-16'>
        Projects
      </h1>
      <div className='grid sm:grid-cols-2 gap-12'>
        {project_data.map((item, idx) => (
          <ProjectCard key={idx} data={item} />
        ))}
      </div>
    </div>
  )
}

export default Projects