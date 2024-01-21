import React from 'react'

const WorkItem = ({data}) => {
  return (
    <ol className='flex flex-column md:flex-row relative border-l border-stone-400'>
        <li className='mb-10 ml-4'>
            <div className='absolute w-3 h-3 bg-stone-400 rounded-full mt-1.5 -left-1.5 border-white'/>
            <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                <span className='inline-block px-2 py-1 font-semibold text-white bg-[#36454F] rounded-md'>{data.year}</span>
                <span className='text-lg font-semibold text-[#36454F]'>{data.title}</span>
                <span className='my-1 text-sm font-normal leading-none text-[#8f9da7]'>{data.duration}</span>
            </p>
            <p className='my-2 text-base font-normal text-[#1a2126]'>
                {data.details}
            </p>
        </li>
    </ol>
  )
}

export default WorkItem