import React from 'react';
import Image from 'next/image'; // Import Image from next/image

const FeatureCard = ({ imageSrc, title, description, className }) => {
  return (
    <section className={`py-16 pr-20 pl-3.5 bg-indigo-200 shadow-sm rounded-[70px] ${className}`}>
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
          <Image 
            loading="lazy" 
            src={imageSrc} 
            alt={title} 
            className="object-contain grow w-full aspect-[1.1] max-md:mt-10 max-md:max-w-full" 
            width={500} // Specify width
            height={450} // Specify height
            layout="responsive" // Use responsive layout
          />
        </div>
        <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-5 max-md:mt-10">
            <h2 className="text-3xl font-bold tracking-widest max-md:text-3xl">{title}</h2>
            <p className="mt-12 text-2xl font-semibold tracking-widest leading-7 text-black max-md:mt-10 max-md:mr-2.5">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;