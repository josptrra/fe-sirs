import React from 'react';
import { RiToothFill } from 'react-icons/ri';
import { FaDisease } from 'react-icons/fa6';
import { FaEye } from 'react-icons/fa6';
import { GiMeshNetwork } from 'react-icons/gi';
import { RiPsychotherapyFill } from 'react-icons/ri';
import { FaHeartbeat } from 'react-icons/fa';

export default function Doctors() {
  return (
    <div className="bg-white pt-12 md:pt-0 pb-12 relative w-full mx-auto px-6 md:px-6">
      <h2 className="uppercase text-blue-500 font-bold text-lg lg:text-2xl tracking-widest lg:tracking-[.25em] text-center lg:pt-16">
        Health Professionals You Can Count On
      </h2>
      <h1 className=" text-blue-900 text-3xl font-bold lg:text-4xl tracking-wider py-4 lg:tracking-widest text-center">
        Specialized Doctors on Our Side!
      </h1>
      <div className="flex flex-col mx-8 md:mx-12 gap-8 md:flex-row pt-8">
        <div className="hover:shadow-xl w-full border flex flex-col items-center rounded-xl gap-4 p-4">
          <RiToothFill className="text-blue-500 text-[120px]" />
          <h1 className="uppercase font-bold text-xl text-blue-900">Dentist</h1>
        </div>
        <div className="hover:shadow-xl w-full border flex flex-col items-center rounded-xl gap-4 p-4">
          <FaDisease className="text-blue-900 text-[120px]" />
          <h1 className="uppercase font-bold text-xl text-blue-500">
            Dermatologist
          </h1>
        </div>
        <div className="hover:shadow-xl w-full border flex flex-col items-center rounded-xl gap-4 p-4">
          <FaEye className="text-blue-500 text-[120px]" />
          <h1 className="uppercase font-bold text-xl text-blue-900">
            Ophthalmologist
          </h1>
        </div>
        <div className="hover:shadow-xl w-full border flex flex-col items-center rounded-xl gap-4 p-4">
          <GiMeshNetwork className="text-blue-900 text-[120px]" />
          <h1 className="uppercase font-bold text-xl text-blue-500">
            Neurologist
          </h1>
        </div>
        <div className="hover:shadow-xl w-full border flex flex-col items-center rounded-xl gap-4 p-4">
          <RiPsychotherapyFill className="text-blue-500 text-[120px]" />
          <h1 className="uppercase font-bold text-xl text-blue-900">
            Psychologist
          </h1>
        </div>
        <div className="hover:shadow-xl w-full border flex flex-col items-center rounded-xl gap-4 p-4">
          <FaHeartbeat className="text-blue-900 text-[120px]" />
          <h1 className="uppercase font-bold text-xl text-blue-500">
            Cardiologist
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 pt-8 lg:pt-6">
        <p className="text-blue-400 text-center text-lg py-4">
          And Much More Certified Doctors!
        </p>
      </div>
    </div>
  );
}
