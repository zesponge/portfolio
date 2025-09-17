import React from 'react'
import { skills, experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA'
import {head, cat, full, linkedin, github} from '../assets/images'
import { git } from '../assets/icons';

const Experience = () => {
  return (
    <section className='max-container'>
      <div className='py-5 flex justify-between items-center'>
        <div className='w-3/5'>
          <h1 className='head-text'>
            Hi, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Mario</span>
          </h1>

          <div className='mt-1 flex flex-col gap-3 text-slate-1000'>
            <p className='mb-5'>
              I'm a developer with a passion for building software, working with others, and learning new things!
            </p>

          <div className='flex gap-8 items-center'>
            <h3 className='subhead-text'>About Me</h3>
            <div className='flex gap-8'>
              <a href="https://www.linkedin.com/in/mario-su/"><img src={linkedin} alt="" className='h-8 hover:bg-sky-200'/></a>
              <a href="https://github.com/zesponge"><img src={github} alt="" className='h-8 hover:bg-sky-200'/></a>
            </div>
          </div>
            <p>
              I'm a Computer Science graduate from the University of Waterloo. I've worked with all sorts of companies, developing my skills and collaborating with others. Here's the rundown:
            </p>
          </div>

        </div>
          <img src={head} alt="" className='rounded-full h-1/2 w-2/5'/>
      </div>

    <div className='py-5 flex flex-col'>
      <h3 className='subhead-text'>My Skills</h3>
      <div className='mt-12 flex flex-wrap gap-6'>
        {skills.map((skill) =>(
          <div className='flex flex-col justify-center items-center block-container w-16 h-16'>
            <div className='btn-back rounded-xl'/>
            <div className='btn-front rounded-xl flex justify-center items-center flex-col text-center'>
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className='w-1/2 h-1/2 object-contain'
              />
              <p className='text-xs'>{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='py-5'>
      <h3 className='subhead-text'>Experience</h3>
      <div className='mt-1 flex flex-col gap-3 text-slate-1000'>
        <p>
          I've worked with all sorts of companies, developing my skills and collaborating with others. Here's the rundown:
        </p>
      </div>

      <div className='mt-6 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <div>
                  <p>{experience.tech}</p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/90 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200'/>
      <CTA/>

    </section>
  )
}

export default Experience
