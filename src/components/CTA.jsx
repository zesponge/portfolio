import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Let's Build Something Together!</p>
        <Link to="/contact" className='btn'>Contact</Link>
    </section>
  );
};

export default CTA;
