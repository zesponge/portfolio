import React from 'react'
import { skills, experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA'
import { head, linkedin, github } from '../assets/images'

const skillGroups = {
  'Frontend': [
    'React', 'Next.js', 'JavaScript', 'TypeScript', 'Kotlin', 'HTML', 'CSS', 'Tailwind CSS', 'Material UI'
  ],
  'Backend & Databases': [
    'Python', 'Django', 'Node.js', 'FastAPI', 'Flask', 'PostgreSQL', 'MongoDB', 'SQL', 'Azure SQL', 'Firebase', 'Java', 'C++', 'C'
  ],
  'Cloud & DevOps': [
    'AWS', 'Azure Container Apps', 'Google Cloud', 'Docker', 'Vercel', 'GitHub Actions'
  ],
  'Data & AI': [
    'Pandas', 'LLMs'
  ],
  'Dev Tools': [
    'Git', 'VS Code', 'Jira', 'PowerShell', 'Jest'
  ],
};

const skillByName = new Map(skills.map((skill) => [skill.name, skill]));

const SkillCard = ({ skill }) => (
  <div className='block-container w-24 h-20'>
    <div className='btn-back rounded-xl' />
    <div className='btn-front rounded-xl flex flex-col items-center justify-center gap-1 px-2 text-center'>
      {skill.imageUrl && (
        <img
          src={skill.imageUrl}
          alt=''
          className='w-7 h-7 object-contain'
        />
      )}
      <p className={skill.imageUrl ? 'text-xs' : 'text-sm font-medium'}>{skill.name}</p>
      {skill.details && <p className='text-[10px] leading-tight'>{skill.details}</p>}
    </div>
  </div>
);

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
                <a href="https://www.linkedin.com/in/mario-su/">
                  <img src={linkedin} alt="LinkedIn" className='h-8 hover:bg-sky-200' />
                </a>
                <a href="https://github.com/zesponge">
                  <img src={github} alt="GitHub" className='h-8 hover:bg-sky-200' />
                </a>
              </div>
            </div>

            <p>
              I'm a Computer Science graduate from the University of Waterloo. I've worked with all sorts of companies, developing my skills and collaborating with others. Here's the rundown:
            </p>
          </div>
        </div>

        <img src={head} alt="Profile" className='rounded-full h-1/2 w-2/5' />
      </div>

      <div className='py-5 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-12'>
          {Object.entries(skillGroups).map(([title, names]) => (
            <div className='mb-10' key={title}>
              <h4 className='text-xl font-semibold mb-4'>{title}</h4>
              <div className='mt-4 flex flex-wrap gap-6'>
                {names.map((name) => (
                  <SkillCard key={name} skill={skillByName.get(name)} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-5'>
        <h3 className='subhead-text'>Experience</h3>
        <div className='mt-6 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full' aria-hidden='true'>
                    {experience.icon ? (
                      <img src={experience.icon} alt='' className='w-[60%] h-[60%] object-contain' />
                    ) : (
                      <span className='text-sm font-bold text-slate-800'>{experience.initials}</span>
                    )}
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
                  <p className='text-slate-600 text-sm' style={{ margin: 0 }}>
                    {experience.location}
                  </p>
                </div>
                <div className='mt-1'>
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

      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}

export default Experience
