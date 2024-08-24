import React from 'react'
import slcImg from '../public/assets/projects/SLC-CourseSystem.jpg'
import weatherApp from '../public/assets/projects/React_WeatherApp.jpg'
import simAnneal from '../public/assets/projects/Simulated Annealing.jpg'
import flowSoc from '../public/assets/projects/FlowSoccer.jpg'
import ProjectItem from './ProjectItem'


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem title='SLC Course System' backgroundImg={slcImg} projectUrl='/SLC_Course'/>
          <ProjectItem title='Formula One Simulated Annealing' backgroundImg={simAnneal} projectUrl='/F1_Sched'/>
          <ProjectItem title='Weather App' backgroundImg={weatherApp} projectUrl='/Weather_App'/>
          <ProjectItem title='Flow Soccer' backgroundImg={flowSoc} projectUrl='/Flow_Soccer'/>
        </div>
      </div>
    </div>
  )
}

export default Projects

