import React from 'react';
import facialsImage from '/img/facials.jpg';
import manicuresImage from '/img/manicures.jpg';
import massagesImage from '/img/massages.jpg';
import pedicuresImage from '/img/pedicures.jpg';
import waxingImage from '/img/waxing.jpg';

function BeautyTherapyPage() {
  return (
    <div className="mx-auto py-10 bg-[#d9c9b9]">
      <h2 className="text-3xl font-bold text-center text-[#ab7745] mb-8">Beauty Therapy</h2>
      <p className="text-center">Welcome to our Beauty Therapy services.</p>
      <div className="mt-8 ">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-3">
          <div className="card pt-4 bg-[#82858c] shadow-xl transform transition-transform duration-300 hover:scale-105">
            <figure><img className='mt-8' src={facialsImage} alt="Facials" /></figure>
            <div className="card-body pt-4">
              <h3 className="text-xl font-semibold">Facials</h3>
              <p>A facial is a beauty treatment that cleanses, exfoliates, and nourishes the skin.</p>
            </div>
          </div>
          <div className="card pt-4 bg-[#82858c] shadow-xl transform transition-transform duration-300 hover:scale-105">
            <figure><img src={manicuresImage} alt="Manicures" /></figure>
            <div className="card-body">
              <h3 className="text-xl font-semibold">Manicures</h3>
              <p>A manicure is a beauty treatment that cleanses, shapes, and polishes the fingernails.</p>
            </div>
          </div>
          <div className="card pt-4 bg-[#82858c] shadow-xl transform transition-transform duration-300 hover:scale-105">
            <figure><img src={pedicuresImage} alt="Pedicures" /></figure>
            <div className="card-body">
              <h3 className="text-xl font-semibold">Pedicures</h3>
              <p>A pedicure is a beauty treatment that cleanses, shapes, and polishes the toenails.</p>
            </div>
          </div>
          <div className="card pt-6 bg-[#82858c] shadow-xl transform transition-transform duration-300 hover:scale-105">
            <figure><img src={waxingImage} alt="Waxing" /></figure>
            <div className="card-body">
              <h3 className="text-xl font-semibold">Waxing</h3>
              <p>Waxing is a hair removal method that uses wax to remove hair from the root.</p>
            </div>
          </div>
          <div className="card pt-4 bg-[#82858c] shadow-xl transform transition-transform duration-300 hover:scale-105">
            <figure><img src={massagesImage} alt="Massages" /></figure>
            <div className="card-body">
              <h3 className="text-xl font-semibold">Massages</h3>
              <p>A massage is a beauty treatment that uses touch to relax the muscles and improve circulation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeautyTherapyPage;