/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useEffect, useState } from 'react'
import { Box, Typography, Container, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import Link from 'next/link'
const FlipNumber = styled(Box)(({ theme }) => ({
  background: '#FF0000',
  borderRadius: 8,
  padding: '20px 15px',
  minWidth: 100,
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    right: 0,
    top: '50%',
    height: 2,
    background: 'rgba(0,0,0,0.2)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '3px 3px',
    minWidth: 50,
  },
  [theme.breakpoints.down('xs')]: {
    padding: '3px 3px',
    minWidth: 40,
  },
  [theme.breakpoints.between('sm', 'md')]: {
    padding: '5px 5px',
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
    fontSize: '1.5rem',
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
  '@media (min-width: 600px)': {
    fontSize: '.4rem',
  },
  '@media (min-width: 900px)': {
    fontSize: '1rem',
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
        if (newSeconds >= 0) return { ...prev, seconds: newSeconds }

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
            mb: 6,
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
          mb: 6,
        }}>
          <Box sx={{ textAlign: 'center', background: 'FF0000' }}>
            <FlipNumber sx={{ background: 'FF0000' }}>
              <NumberDisplay sx={{ background: 'FF0000' }}>
                {String(timeLeft.days).padStart(2, '0')}
              </NumberDisplay>
            </FlipNumber>
            <TimeLabel sx={{ color: 'white' }}>Days</TimeLabel>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <FlipNumber>
              <NumberDisplay>
                {String(timeLeft.hours).padStart(2, '0')}
              </NumberDisplay>
            </FlipNumber>
            <TimeLabel sx={{ color: 'white' }}>Hours</TimeLabel>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <FlipNumber>
              <NumberDisplay>
                {String(timeLeft.minutes).padStart(2, '0')}
              </NumberDisplay>
            </FlipNumber>
            <TimeLabel sx={{ color: 'white' }}>Minutes</TimeLabel>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <FlipNumber>
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
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#fff',
              color: '#1591A3',
              padding: {
                xs: '8px 16px',
                sm: '10px 24px',
                md: '12px 32px',
              },
              fontSize: {
                xs: '14px',
                sm: '15px',
                md: '16px',
              },
              borderRadius: '8px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'color 0.5s ease-in-out',
              zIndex: 1,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 0,
                height: 0,
                backgroundColor: '#1591A3',
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
                transition: 'width 0.5s ease-out, height 0.5s ease-out',
                zIndex: -1,
              },
              '&:hover': {
                color: '#fff',
                '&::before': {
                  width: '300%',
                  height: '300%',
                },
              },
              '&:active': {
                transform: 'scale(0.98)',
                transition: 'transform 0.1s',
              },
            }}
          >
            ওয়েবিনার বুক করুন
          </Button>

        </Typography>
      </Container>
    </Box>
  )
}

