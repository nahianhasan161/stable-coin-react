import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import HeadingTitle from '../typography/HeadingTitle';
const LogoSliderProps = [
  
];

const LogoSlider: React.FC = () => {
  return (
    <>
     <section className="mt-5 md:px-10 ">
     <div className="px-10 sm:flex items-center justify-between">
            <HeadingTitle title="Explore Busd EchoSystem" />
            <p className='hidden sm:block cursor-pointer text-yallow_400 hover:underline underline-yallow_400 whitespace-nowrap'>View More</p>
          </div>
          <div className='my-10'>
        <Marquee direction="left" speed={50}  gradient={true}>
          <div className="mx-3 text-center">
            <Image src="/logo/one.png" alt="logo" height={200} width={200} />
          </div>
          <div className="mx-3">
            <Image src="/logo/two.png" alt="logo" height={200} width={200} />
          </div>
          <div className="mx-3">
            <Image src="/logo/three.png" alt="logo" height={200} width={200} />
          </div>
          <div className="mx-3">
            <Image src="/logo/four.png" alt="logo" height={200} width={200} />
          </div>
          <div className="mx-3">
            <Image src="/logo/five.png" alt="logo" height={200} width={200} />
          </div>
          <div className="mx-3">
            <Image src="/logo/eight.png" alt="logo" height={200} width={200} />
          </div>
        </Marquee>
        <p className='sm:hidden block cursor-pointer text-center text-yallow_400 hover:underline underline-yallow_400 whitespace-nowrap'>View More</p>
          </div>
         
        </section>
    </>
 
  );
};

export default LogoSlider;
