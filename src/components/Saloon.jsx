import React from 'react';
import { Link } from 'react-router-dom';

function Saloon() {
  return (
    <section id="saloon" className="py-10 bg-[#d9c9b9]">
      <div className="container text-center mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Saloon & Services</h2>
        <p>
          Welcome to our saloon, a place where you can relax, rejuvenate, and
          enhance your natural beauty. We offer a range of beauty therapy services.
        </p>
        <div className="text-center mt-4">
          <Link to="/beauty-therapy" className="btn btn-primary">View Beauty Therapy Services</Link>
        </div>
      </div>
    </section>
  );
}

export default Saloon;