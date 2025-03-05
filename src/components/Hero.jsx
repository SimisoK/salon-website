import React from 'react';

function Hero() {
  return (
    <div className="hero min-h-screen bg-[#d9c9b9]">
      <div className="hero-content text-center">
        <div className="max-w-full">
          <h1 className="text-4xl text-[#a1743c] font-bold">
            Welcome to <span className="text-[#aab5b9]">Myspace</span>
          </h1>
          <p className="py-6 text-xl text-justified">
            Nonhle is an entrepreneur based in Manzini, Eswatini. She is the
            Owner and CEO of Manzini Bright Light, a business whose focus is yet
            to be determined. She has a background in beauty and education,
            having studied at LH LAbeauty and African Legacy University
          </p>
          <button className="bg-[#ac7846] text-white hover:bg-[#8a5f36]">
            Learn More
          </button>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Hero;