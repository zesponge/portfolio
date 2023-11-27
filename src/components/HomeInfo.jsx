import React from 'react';
import { Link } from 'react-router-dom';

const InfoBox = ( { text, link, btnText } ) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm::text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I'm <span className='font-semibold'>Mario</span>! 👋
            <br />
            A computer science student at the University of Waterloo.
        </h1>
    ),
    2: (
        <InfoBox 
            text={"about section placeholder text"}
            link='/About'
            btnText='Learn More'
            />
    ),
    3: (
        <InfoBox 
            text={"projects section placeholder text"}
            link='/Projects'
            btnText='Visit Portfolio'
            />
    ),
    4: (
        <InfoBox 
            text={"contact section placeholder text"}
            link='/Contact'
            btnText="Let's Connect"
            />
    )
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
