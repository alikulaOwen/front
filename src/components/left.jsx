import React from 'react';
import { AcademicCapIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
const features = [
  {
    name: 'Machakos University',
    start:
      'Sept 2017',
    end: 'Dec 2016',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Chavakali high school',
    start:
      'Jan 2012',
    end: 'Dec 2016',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AcademicCapIcon,
  },
  
]

export default function Left() {
  return <div className='w-3/4 h-auto bg-transparent relative '>

    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-5xl text-black font-extrabold tracking-wide uppercase">Education</h2>
        
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</h2>
                </dt>
                <p className="mt-2 ml-16 text-base text-gray-500">From <span className='text-blue-500'>{feature.start}</span> to <span className='text-blue-500'>{feature.end}</span></p>
                <dd className="mt-2 ml-16 text-base text-black">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>

  </div>;
}
