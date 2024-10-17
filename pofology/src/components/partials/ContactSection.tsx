import React from 'react';
import SectionTitle from '@/components/shared/SectionTitle';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <>
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="mt-14 grid gap-6">
        <div className="relative h-48">
          <h6 className="text-2xl font-bold">Let's talk about everything!</h6>
          <p className="mt-2">Don't like forms? Send me an email at <Link href='mailto:contact@fabgallo.com'><a className="transition-colors duration-150 hover:text-primary-600 hover:underline">contact@fabgallo.com</a></Link> 👋</p>
        </div>
        {/* <div className="col-span-2">
          <div className="grid gap-8 md:grid-cols-2">
            <Input placeholder="Your Name" />
            <Input placeholder="Email Address" />
          </div>

          <div className="mt-8">
            <Input placeholder="Subject" />
          </div>
          <div className="mt-8">
            <TextArea placeholder="Message" />
          </div>
          <div className="mt-8">

            <Button type='submit' className="mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200">
              Send Message
            </Button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default ContactSection;
