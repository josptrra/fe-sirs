import React from 'react';
import { BsEnvelopePaper } from 'react-icons/bs';
import { TiMessages } from 'react-icons/ti';

export default function Footer() {
  return (
    <footer
      className="w-full bg-blue-900 text-white text-[13px] leading-5 pt-12 pb-[30px] bottom-0"
      id="contact"
    >
      <div className="w-10/12 lg:w-9/12 mx-auto">
        <div className="w-full flex flex-wrap flex-col md:flex-row items-start justify-between mx-auto">
          <div className="basis-1/4 p-[10px] lg:p-0 flex flex-col">
            <h1 className="text-3xl text-center tracking-widest font-semibold lg:text-start text-blue-500">
              MEDDICAL
            </h1>
            <p className="pt-4 text-center text-lg tracking-wider lg:text-start">
              Leading the Way in Medical Excellence, Trusted Care.
            </p>
          </div>
          <div className="basis-1/7 p-[10px] w-full py-8 lg:p-0">
            <h3 className="w-full lg:w-fit mb-6 relative font-bold text-lg text-center ">
              Important Links
            </h3>
            <ul className="list-none mb-3 text-base">
              <li className="mb-3">
                <a href="#about">Appointment</a>
              </li>
              <li className="mb-3">
                <a href="#projects">Doctors</a>
              </li>
              <li className="mb-3">
                <a href="#experience">Services</a>
              </li>
              <li className="mb-3">
                <a href="#contact">About Us</a>
              </li>
            </ul>
          </div>
          <div className="basis-1/5 p-[10px] text-base flex flex-col w-full lg:p-0 gap-3">
            <h3 className="w-full lg:w-fit mb-6 lg:mb-3 relative font-bold text-lg text-center lg:text-start">
              Contact Us
            </h3>
            <p>Call: (237) 681-812-255</p>
            <p>Email: tronjaltronjol@gmail.com</p>
            <p className="w-fit border-white">Address: Jembatan Kapur</p>
            <p>Indonesia</p>
          </div>
          <div className="basis-1/5 p-[10px]  w-full lg:w-fit flex flex-col py-8 lg:p-0">
            <h3 className="w-full lg:w-fit mb-6 relative font-bold text-center lg:text-start text-lg">
              Newsletter
            </h3>
            <form className="w-fit">
              <div className="p-2 border-b-[1px] border-white font-bold flex items-center gap-4">
                <BsEnvelopePaper className="text-lg" />
                <input
                  type="Email"
                  placeholder="Enter your Email Address"
                  className="focus:outline-none text-lg"
                />
              </div>
              <button className="w-full mt-4 border-white border-[1px] p-2 hover:text-black hover:bg-white transisi text-base font-semibold">
                Submit
              </button>
            </form>
          </div>
        </div>
        <hr className="w-full border-white my-4 mx-auto" />
        <p className="text-center text-lg pt-4 text-sm">
          ©️ 2025 - Siloam All Rights Reserved by PNTEC
        </p>
      </div>
    </footer>
  );
}
