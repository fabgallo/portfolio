import React from 'react';
import SectionTitle from '@/components/shared/SectionTitle';
import Link from 'next/link';
import { FiLinkedin } from 'react-icons/fi';

const ContactSection = () => {
  return (
    <>
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="mt-14 grid gap-6">
        <div className="relative h-48">
          <h6 className="text-2xl font-bold">Let's talk about everything!</h6>
          <p className="mt-2">👋 Send me an email at <Link href='mailto:contact@fabgallo.com'><a className="transition-colors duration-150 hover:text-primary-600 hover:underline">contact@fabgallo.com</a></Link> or connect with me via <Link href='mailto:contact@fabgallo.com'><a className="transition-colors duration-150 hover:text-primary-600 hover:underline">LinkedIn <FiLinkedin className="inline-block mt-[-5px]" /></a></Link></p>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
