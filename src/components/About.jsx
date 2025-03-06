import React from 'react';

import aboutImage from '/img/b3.jpg';

function About() {
  return (
    <section id="about" className="py-5 bg-[#d8c6b2]">
      <div className="container mx-16 text-center">
        <h2 className="text-3xl font-bold text-center mb-5">About Me</h2>
        <div className="flex flex-col md:flex-row items-center ml-16">
          <div className="md:w-1/4 ml-5">
            <img src={aboutImage} alt="Client" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 text-center">
            <p className='text-xl'>Nonhle is an entrepreneur based in Manzini, Eswatini. She is the Owner and CEO of Manzini Bright Light, a business whose focus is yet to be determined. She has a background in beauty and education, having studied at LH LAbeauty and African Legacy University.<br></br>Nonhle completed her high school education at Manzini Nazarene High School. She has built a presence in her community, being followed by a growing number of people on social media.<br></br>With her roots and current residence in Manzini, Nonhle is deeply connected to her hometown. Her educational and entrepreneurial background suggests she is passionate about personal development, business, and possibly the beauty industry.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;