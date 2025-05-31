import React from 'react';
import slcImg from '../public/assets/projects/SLC-CourseSystem.jpg';
import weatherApp from '../public/assets/projects/React_WeatherApp.jpg';
import simAnneal from '../public/assets/projects/Simulated Annealing.jpg';
import flowSoc from '../public/assets/projects/FlowSoccer.jpg';
import PremPredict from '../public/assets/projects/PremPredict.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
    const projects = [
        { title: 'SLC Course System', backgroundImg: slcImg, projectUrl: '/SLC_Course', skillType: 'Java' },
        { title: 'Formula One Simulated Annealing', backgroundImg: simAnneal, projectUrl: '/F1_Sched', skillType: 'Python' },
        { title: 'Weather App', backgroundImg: weatherApp, projectUrl: '/Weather_App', skillType: 'JavaScript / React' },
        { title: 'Flow Soccer', backgroundImg: flowSoc, projectUrl: '/Flow_Soccer', skillType: 'React / Tailwind /Figma' },
        { title: 'Premier League Predictor', backgroundImg: PremPredict, projectUrl: '/PremPredict', skillType: 'Python / Sklearn / Pandas / Numpy' },
    ];

    return (
        <div id='projects' className='w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16'>
            <div className='max-w-[1240px] mx-auto px-4'>
                <p className='text-xl tracking-widest uppercase text-[#e94560]'>Projects</p>
                <h2 className='py-4 text-3xl md:text-4xl font-bold'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    {projects.map((project, index) => (
                        <div key={index} className={`
                            ${projects.length % 2 !== 0 && index === projects.length - 1 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}
                        `}>
                            <ProjectItem
                                title={project.title}
                                backgroundImg={project.backgroundImg}
                                projectUrl={project.projectUrl}
                                skillType={project.skillType}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;

