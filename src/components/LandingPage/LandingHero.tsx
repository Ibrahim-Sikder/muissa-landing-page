'use client'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { Button } from '@mui/material'
import RegistrationForm from './RegForm';
import Link from "next/link";
import { motion, Variants } from 'framer-motion';

const slides = [
  {
    title: "আপনার ব্যবসায়িক সাফল্যের পথে বিশ্বস্ত সাথী",
    points: [
      "ব্যবসায়ের জরুরী ফান্ড তৈরিতে পরামর্শ ও সহযোগিতা করা।",
      "প্রতিষ্ঠানের কাগজাদি তৈরিতে পরামর্শ ও সহযোগিতা করা।",
      "ফান্ডিং প্রোপোজাল তৈরি করা।"
    ],
    date: "২৭ ডিসেম্বর, ২০২৪",
    time: "রাত ১১ টা",
    image: "/placeholder.svg",
    info: {
      title: "MUISSA CONSULTANCY",
      points: [
        "IRS Certified Acceptance Agent",
        "Lead Consultant, Business Globalizer"
      ]
    }
  },
];

export default function TaxTalksLanding() {
  const textAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' }
    },
  };


  const pointsAnimation = {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.2 }
    },
  };


  const buttonAnimation: Variants = {
    initial: {
      scale: 1
    },
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="text-white relative">
      {slides.map((slide, index) => (
        <div key={index} className="mx-auto px-0 md:px-4 place-content-center grid lg:grid-cols-2 gap-8 items-center py-14 md:py-16">
          <div className="space-y-8">

            <div className="relative">
              <div className="absolute -left-4 top-0 bg-[#1591A3] text-white py-2 px-4 transform -rotate-12">
                <p className="text-sm font-medium">MUISSA</p>
              </div>
            </div>


            <motion.h1
              className="text-4xl lg:text-6xl font-bold leading-tight mt-16"
              initial="initial"
              animate="animate"
              variants={textAnimation}
            >
              {slide.title}
            </motion.h1>

            <motion.ul
              className="space-y-3 text-lg text-gray-300"
              initial="initial"
              animate="animate"
              variants={pointsAnimation}
            >
              {slide.points.map((point, i) => (
                <motion.li key={i} variants={pointsAnimation}>
                  • {point}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              variants={buttonAnimation}
              animate="animate"
            >
            <Button
  component={Link}
  href="https://www.muissa.com/membership"
  variant="contained"
  sx={{
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#1591A3',
    padding: {
      xs: '8px 16px',
      sm: '10px 24px',
      md: '12px 32px',
    },
    fontWeight: 'bold',
    fontSize: {
      xs: '18px',
      sm: '18px',
      md: '20px',
    },
    margin: '0 auto', // Center the button
    borderRadius: '8px',
    borderBottom: '6px solid #1591A3',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
    zIndex: 1,
    width: {
      xs: '80%', // Adjust width on small devices
      sm: 'auto', // Default width for larger devices
    },
    textAlign: 'center', // Align text inside the button
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      backgroundColor: '#1591A3',
      transition: 'left 0.5s ease-in-out',
      zIndex: -1,
    },
    '&:hover': {
      color: '#fff',
      transform: 'translateY(-2px)',
      borderBottom: '5px solid #fff',
      '&::before': {
        left: 0,
      },
    },
    '&:active': {
      transform: 'scale(0.98) translateY(0)',
      boxShadow: `
        0 1px 2px rgba(255, 255, 255, 0.1),
        0 2px 4px rgba(255, 255, 0.1),
        0 4px 8px rgba(255, 255, 255, 0.1),
        0 8px 16px rgba(255, 255, 255, 0.1),
        0 16px 32px rgba(255, 255, 255, 0.1)
      `,
      transition: 'all 0.1s',
    },
  }}
>
  সদস্যপদ পান
</Button>

            </motion.div>
          </div>

          <RegistrationForm />
        </div>
      ))}
    </div>
  );
}
