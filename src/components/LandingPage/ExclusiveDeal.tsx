'use client'

import React, { useEffect, useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuissaButton from './Button';
import company from '../../../src/assets/invest/discount.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video } from 'lucide-react';

const FlipNumber = styled(Box)(({ theme }) => ({
  borderRadius: 8,
  padding: '20px 15px',
  minWidth: 100,
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  position: 'relative',
  border: '1px solid #fff',
  animation: 'flip 0.6s ease-in-out',
  '@keyframes flip': {
    '0%': {
      transform: 'rotateX(0deg)',
    },
    '100%': {
      transform: 'rotateX(360deg)',
    },
  },
  [theme.breakpoints.down('sm')]: {
    padding: '5px',
    minWidth: 50,
  },
  [theme.breakpoints.down('xs')]: {
    padding: '3px 3px',
    minWidth: 40,
  },
  [theme.breakpoints.between('sm', 'md')]: {
    padding: '8px 10px',
    minWidth: 85,
  },
  [theme.breakpoints.up('md')]: {
    padding: '20px 15px',
    minWidth: 100,
  }
}));

const NumberDisplay = styled(Typography)({
  color: 'white',
  fontWeight: 700,
  lineHeight: 1,
  fontFamily: "'Digital-7', monospace",
  fontSize: '2rem',
  '@media (max-width: 600px)': {
    fontSize: '2.2rem',
  },
  '@media (min-width: 900px)': {
    fontSize: '3.5rem',
  }
});

const TimeLabel = styled(Typography)({
  color: '#D4AF37',
  marginTop: 8,
  fontWeight: 500,
  textTransform: 'uppercase',
  fontSize: '0.75rem',
  '@media (max-width: 600px)': {
    fontSize: '.4rem',
  },
  '@media (max-width: 900px)': {
    fontSize: '.9rem',
  }
});

export default function ExclusiveDeal() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 11,
    minutes: 1,
    seconds: 2,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1;
        if (newSeconds >= 0) {
          document.querySelectorAll('.flip-number').forEach((el) => {
            const flipElement = el as HTMLElement;
            flipElement.classList.remove('flip');
            void flipElement.offsetWidth;
            flipElement.classList.add('flip');
          });
          return { ...prev, seconds: newSeconds };
        }

        const newMinutes = prev.minutes - 1;
        if (newMinutes >= 0) return { ...prev, minutes: newMinutes, seconds: 59 };

        const newHours = prev.hours - 1;
        if (newHours >= 0) return { ...prev, hours: newHours, minutes: 59, seconds: 59 };

        const newDays = prev.days - 1;
        if (newDays >= 0) return { days: newDays, hours: 23, minutes: 59, seconds: 59 };

        clearInterval(timer);
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const imageAnimation = {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const titleAnimation = {
    initial: { opacity: 0, scale: 0.8, x: -100 },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <Box sx={{
      backgroundColor: '#1591A3',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      py: { xs: 2, sm: 4, md: 6 },
      marginTop: {
        md: '50px',
        sm: '30px',
        xs: '10px'
      },
      borderRadius: '16px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <Container maxWidth="lg">
        <div className='flex flex-col lg:flex-row items-center justify-between w-full gap-y-10 lg:gap-y-0 gap-4'>
          <motion.div
            variants={imageAnimation}
            initial="initial"
            animate="animate"
            className="w-full md:w-1/2 lg:w-2/5"
          >
            <div className="relative w-full pt-[75%]">
              <Image
                alt="services"
                src={company}
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </motion.div>

          <Box className="w-full md:w-1/2 lg:w-3/5">
            <motion.div variants={titleAnimation} initial="initial" animate="animate">
              <Typography
                variant="h2"
                align="center"
                sx={{
                  color: 'white',
                  mb: { md: 6, sm: 3, xs: 3 },
                  fontWeight: 700,
                  letterSpacing: 2,
                  fontSize: { xs: '1.2rem', sm: '2rem', md: '3rem', lg: '3rem' },
                }}
              >
                ফ্রি ওয়েবিনার বুক করুন।
              </Typography>
            </motion.div>

            <Box className="md:p- rounded-xl space-y-4 mb-6">
              <div className="flex w-full lg:justify-center flex-wrap  md:flex-nowrap gap-3 lg:gap-6">
                <div className="flex items-center gap-3 text-white">
                  <div className="bg-white p-2 md:p-3 rounded-full">
                    <Calendar className="w-4 md:h-6 h-4 md:w-6 text-sky-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">তারিখ</div>
                    <div className="text-sm">০৩ জানুয়ারী, ২০২৫</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-white">
                  <div className="bg-white p-2 md:p-3 rounded-full">
                    <Clock className="w-4 md:h-6 h-4 md:w-6 text-sky-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">সময়</div>
                    <div className="text-sm">রাত ১০:৩০ ঘটিকা</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-white">
                  <div className="bg-white p-2 md:p-3 rounded-full">
                    <Video className="w-4 md:h-6 h-4 md:w-6 text-sky-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">প্ল্যাটফর্ম</div>
                    <div className="text-sm">Zoom মিটিং</div>
                  </div>
                </div>
              </div>
            </Box>

            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: { md: 3, sm: 2, xs: 1 },
              mb: { md: 6, sm: 3, xs: 2 },
              alignItems: 'center',
            }}>
              <Box sx={{ textAlign: 'center' }}>
                <FlipNumber className="flip-number">
                  <NumberDisplay>
                    {String(timeLeft.days).padStart(2, '0')}
                  </NumberDisplay>
                </FlipNumber>
                <TimeLabel sx={{ color: 'white' }}>Days</TimeLabel>
              </Box>

              <Box sx={{ textAlign: 'center' }}>
                <FlipNumber className="flip-number">
                  <NumberDisplay>
                    {String(timeLeft.hours).padStart(2, '0')}
                  </NumberDisplay>
                </FlipNumber>
                <TimeLabel sx={{ color: 'white' }}>Hours</TimeLabel>
              </Box>

              <Box sx={{ textAlign: 'center' }}>
                <FlipNumber className="flip-number">
                  <NumberDisplay>
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </NumberDisplay>
                </FlipNumber>
                <TimeLabel sx={{ color: 'white' }}>Minutes</TimeLabel>
              </Box>

              <Box sx={{ textAlign: 'center' }}>
                <FlipNumber className="flip-number">
                  <NumberDisplay>
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </NumberDisplay>
                </FlipNumber>
                <TimeLabel sx={{ color: 'white' }}>Seconds</TimeLabel>
              </Box>
            </Box>

            <Typography align="center" sx={{
              color: '#D4AF37',
              letterSpacing: 1,
              fontWeight: 500,
            }}>
              <MuissaButton />
            </Typography>
          </Box>
        </div>
      </Container>
    </Box>
  );
}