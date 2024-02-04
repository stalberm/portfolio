import React, { useState } from 'react';

export const ProjectCard = ({ data }) => {
  const [modal, setModal] = useState(false);
  const handleModal = () => (
    setModal(!modal)
  )
  return (
    <div className='relative flex items-center justify-center w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#36454F] h-[300px]'>
      <img src={data.img} alt="/" className={`rounded-xl group-hover:opacity-10 object-cover h-full ${data.orient}`}/>
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl fond-bold text-white tracking-wider text-center'>
          {data.title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>{data.type}</p>
        <p onClick={handleModal} className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>More Info</p>
      </div>
      {modal && (
        <div className="animate-showModal fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 fadeIn">
          <div className="w-1/2 bg-gray-200 p-8 rounded-xl shadow-xl">
            <h3 className='text-2xl fond-bold text-gray-800 tracking-wider text-center'>
              {data.description}
            </h3>
            <div className='flex flex-col items-center'>{data.link && (<a href={data.link} target="_blank" rel="noopener noreferrer">
              <p className='text-center m-3 p-3 rounded-lg bg-gray-800 text-white font-bold cursor-pointer text-lg'>Visit Website</p>
            </a>)}</div>
            <p className="text-center text-gray-600 cursor-pointer mt-3" onClick={handleModal}>
              Close
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
