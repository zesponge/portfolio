import React from 'react';

const Contact = () => {
  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      <div className='flex-1 min-w-[50%] flex flex-col items-start justify-center'>
        <h1 className='head-text'>
          Get <span className='blue-gradient_text font-semibold drop-shadow'>In Touch</span>
        </h1>

        <div className='mt-10 rounded-xl neo-brutalism-white p-6 sm:p-8'>
          <p className='text-lg sm:text-xl font-medium'>
            Shoot me a message at{' '}
            <a
              href='mailto:mario.su282@gmail.com'
              className='underline underline-offset-4 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black rounded'
            >
              mario.su282@gmail.com
            </a>
          </p>

          <p className='text-lg sm:text-xl font-medium mt-4'>
            or on LinkedIn at{' '}
            <a
              href='https://www.linkedin.com/in/mario-su'
              target='_blank'
              rel='noreferrer'
              className='underline underline-offset-4 hover:opacity-80 break-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black rounded'
            >
              www.linkedin.com/in/mario-su
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
