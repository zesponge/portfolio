import React from 'react'
import { skills } from '../constants'

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hi, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Mario</span>
      </h1>

    <div className='flex flex-col gap-3 text-slate-500'>
      <p>
        Computer science student at the University of Waterloo, specializing in web development and software engineering.
      </p>
    </div>

    <div className='py-10 flex flex-col'>
      <h3 className='subhead-text'>My Skills</h3>
      <div className='mt-16 flex flex-wrap gap-12'>
        {skills.map((skill) =>(
          <div className='flex flex-col justify-center items-center block-container w-20 h-20'>
            <div className='btn-back rounded-xl'/>
            <div className='btn-front rounded-xl flex justify-center items-center flex-col'>
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className='w-1/2 h-1/2 object-contain'
              />
              <p className='flex flex-wrap justify-center items-center'>{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='py-16'>
      <h3></h3>
    </div>

    </section>
  )
}

export default About
