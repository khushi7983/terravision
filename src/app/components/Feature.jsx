import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import FeatureCard from './FeatureCard';

const featuresData = [
  {
    imageSrc: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2023/04/earth_30_year_comparison/24832556-1-eng-GB/Earth_30_year_comparison_pillars.jpg",
    title: "COG Conversion",
    description: "Converts INSAT Level 1 data into Cloud Optimized GeoTIFFs with support for multiple spectral bands.",
    className: "mr-0",
    titleColor: "text-fuchsia-800"
  },
  {
    imageSrc: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2023/04/earth_30_year_comparison/24832556-1-eng-GB/Earth_30_year_comparison_pillars.jpg",
    title: "Selective Streaming",
    description: "Implement selective streaming and partial downloads for targeted data access and reduced bandwidth usage.",
    className: "grow pr-20 pb-5 mt-80 w-full",
    titleColor: "text-red-700"
  },
  {
    imageSrc: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2023/04/earth_30_year_comparison/24832556-1-eng-GB/Earth_30_year_comparison_pillars.jpg",
    title: "Real-Time Manipulation",
    description: "Develop tools for on-the-fly spectral band adjustments and integrate them into a user-friendly cloud-based interface.",
    className: "pr-12 pb-7 mt-0 ml-20 max-w-full w-[867px]",
    titleColor: "text-black"
  }
];

const Features = () => {
  return (
    <main className="flex overflow-hidden flex-col items-start py-20 pr-8 pl-20 bg-black max-md:px-5">
      <h1 className="ml-16 text-3xl font-bold text-white max-md:ml-2.5 max-md:text-4xl">
        FEATURES
      </h1>
      <div className="z-10 self-end mt-20 w-full max-w-[1578px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {featuresData.map((feature, index) => (
            <div key={index} className={`flex flex-col ${index === 0 ? 'w-6/12' : 'ml-5 w-6/12'} max-md:ml-0 max-md:w-full`}>
              <FeatureCard
                imageSrc={<Image src={feature.imageSrc} alt={feature.title} width={500} height={300} />} // 
                title={feature.title}
                description={feature.description}
                className={`${feature.className} ${feature.titleColor}`}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Features;