/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useEffect, useState } from 'react'
import { Box, Typography, Container, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import MuissaButton from './Button'

const FlipNumber = styled(Box)(({ theme }) => ({

  borderRadius: 8,
  padding: '20px 15px',
  minWidth: 100,
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  position: 'relative',
  border: '2px dashed #fff',
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
}))

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
})

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
})

export default function ExclusiveDeal() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 11,
    minutes: 1,
    seconds: 2,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1
        if (newSeconds >= 0) {
          document.querySelectorAll('.flip-number').forEach(el => {
            el.classList.remove('flip')
            void (el as HTMLElement).offsetWidth
            el.classList.add('flip')
          })
          return { ...prev, seconds: newSeconds }
        }

        const newMinutes = prev.minutes - 1
        if (newMinutes >= 0) return { ...prev, minutes: newMinutes, seconds: 59 }

        const newHours = prev.hours - 1
        if (newHours >= 0) return { ...prev, hours: newHours, minutes: 59, seconds: 59 }

        const newDays = prev.days - 1
        if (newDays >= 0) return { days: newDays, hours: 23, minutes: 59, seconds: 59 }

        clearInterval(timer)
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Box sx={{

      backgroundColor: '#1591A3',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      py: 4,
      marginTop: {
        md: '50px',
        sm: '30px',
        xs: '10px'
      }
    }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            color: 'white',
            mb: {
              md: 6,
              sm: 3,
              xs: 3
            },
            fontWeight: 700,
            letterSpacing: 2,
            fontSize: {
              xs: '1.2rem',
              sm: '2rem',
              md: '3rem',
              lg: '4rem',
            },
          }}
        >
          ফ্রি ওয়েবিনার বুক করুন।
        </Typography>

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: {
            md: 3,
            sm: 2,
            xs: 1
          },
          mb: {
            md: 6,
            sm: 3,
            xs: 2
          },
        }}>
          <Box sx={{ textAlign: 'center', background: 'FF0000' }}>
            <FlipNumber sx={{ background: 'FF0000' }} className="flip-number">
              <NumberDisplay sx={{ background: 'FF0000' }}>
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

        <Typography
          align="center"
          sx={{
            color: '#D4AF37',
            letterSpacing: 1,
            fontWeight: 500,
          }}
        >

          <MuissaButton />

        </Typography>
      </Container>
    </Box>
  )
}

