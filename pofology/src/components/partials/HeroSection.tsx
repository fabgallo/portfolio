import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import Button from '@/components/form/Button';
import HeroBackground from './HeroBackground';
import Typed from 'react-typed';

const HeroSection = () => {
  const router = useRouter();

  return (
    <div className="hero relative -mt-16 flex items-center justify-center">
      <HeroBackground />
      <div className="flex flex-col items-center">
        <div className="overflow-hidden rounded-[48px] text-[0]">
          <Image src="/images/avatar/profile-picture.jpg" width={200} height={200} alt="avatar" />
        </div>
        <h1 className="mt-4 text-3xl font-bold ">Fabio Rufino Gallo</h1>
        <div className="mt-2 flex gap-1">
          {' '}
          I'm{' '}
          <Typed
            strings={['an Experienced People Manager', 'a Front-end Architect/Developer', 'a UI/UX Designer', 'a Creative Technologist']}
            typeSpeed={60}
            backSpeed={30}
            loop
          />
        </div>
        <div className="mt-4  flex gap-5">
          <Link href="https://www.linkedin.com/in/fabgallo">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
              <FiLinkedin size={25} />
            </a>
          </Link>
          <Link href="https://github.com/fabgallo">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
              <FiGithub size={25} />
            </a>
          </Link>
        </div>
        <Button onClick={() => router.push('/#contact')} type="button" className="mt-5 px-8">Contact Me</Button>
      </div>

      <div className="absolute bottom-0 flex flex-col items-center ">
        <p className="mb-3 text-sm">Scroll Down</p>
        <div className="relative flex h-7 w-5 justify-center rounded-full border-2 border-gray-600 dark:border-gray-100">
          <div className="animate-scroll absolute h-1 w-1 bg-gray-600 dark:bg-gray-100" style={{ top: '6px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
