import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="container mt-auto border-t border-gray-200 py-6 text-center text-gray-500 dark:border-gray-600">
      Based on Md Mostafizur Rahman <Link href='https://github.com/mostafizurhimself/getprofile'><a className="text-gray-400 transition-colors duration-150 hover:text-primary-600 hover:underline">Get Profile</a></Link> personal portfolio template, copyright &#169; {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
