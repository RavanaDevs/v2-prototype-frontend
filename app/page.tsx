"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
  ];

  // Automatically cycle through images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000); // 2000ms = 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      {/* Header */}
      <header className="bg-[#0F0F0F] text-white py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">University of Sri Jayewardenepura</div>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-[#0E46A3]">About Us</a></li>
            <li><a href="#courses" className="hover:text-[#0E46A3]">Courses</a></li>
            <li><a href="#contact" className="hover:text-[#0E46A3]">Contact</a></li>
          </ul>
          <Link href={"/login"}><button className="bg-[#0E46A3] text-white py-2 px-4 rounded hover:bg-white hover:text-[#0E46A3] border-2 border-[#0E46A3] transition">Login</button></Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-[#0F0F0F] bg-opacity-60 flex items-center justify-center text-white text-center"
        >
          <div className='z-10'>
            <h1 className="text-4xl font-bold">Welcome to the University of Sri Jayewardenepura</h1>
            <p className="mt-4 text-xl">Shaping Future Leaders with Excellence</p>
          </div>
        </div>
        <div className="w-full h-full flex transition-transform duration-1000"
             style={{ transform: `translateX(-${currentImage * 100}%)` } }>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F0F0F] text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 University of Sri Jayewardenepura. All rights reserved.</p>
          <ul className="flex justify-center space-x-4 mt-2">
            <li><a href="#privacy" className="hover:text-[#0E46A3]">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-[#0E46A3]">Terms & Conditions</a></li>
            <li><a href="#contact" className="hover:text-[#0E46A3]">Contact</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
