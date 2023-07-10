import React, { useState } from 'react';
import { FaBars, FaTable, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const linkS = [
    {
      id: 1,
      link: 'Home',
    },
    {
      id: 2,
      link: 'About',
    },
    {
      id: 3,
      link: 'Recent Project',
    },
    {
      id: 4,
      link: 'Contact',
    },
  ];
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[90%] my-4 rounded-t-lg h-16 bg-gradient-to-br from-[#511480]/70 to-[#3b0562]/70 shadow-md text-gray-100 fixed flex cursor-pointer overflow-hidden">
          <div className="w-[40%] sm:w-1/4 bg-black/40 h-full flex items-center">
            <img src="" alt="" />
            <h1 className="font-bold md:text-lg text-md lg:indent-8 indent-4">Zv.Alief</h1>
          </div>

          {/* Dekstop */}
          <div className="h-full w-3/4 justify-center hidden md:flex">
            <ul className="flex items-center h-full w-[90%] justify-center gap-x-4">
              {linkS.map(({ id, link }) => (
                <li key={id} className="hover:scale-105 transition-all hover:underline underline-offset-8 hover:text-orange-400 rounded-md w-1/5">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center w-1/2 sm:w-[70%] justify-end">
            <div className="h-full flex items-center" onClick={() => setNav(!nav)}>
              {nav ? <FaTimes size={20} /> : <FaBars size={20} />};
              {nav && (
                <ul className="w-[90%] h-fit bg-[#150838]/70 top-20 right-[5%] fixed justify-center">
                  {linkS.map(({ id, link }) => (
                    <li key={id} className="my-4 cursor-pointer h-10 w-full text-center transition-all hover:bg-black/50 hover:text-orange-400 rounded-md">
                      {link}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
