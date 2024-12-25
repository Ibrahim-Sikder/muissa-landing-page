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
  }
}))

const TimeLabel = styled(Typography)({
  color: '#D4AF37',
  marginTop: 8,
  fontWeight: 500,
  textTransform: 'uppercase',
})

const NumberDisplay = styled(Typography)({
  color: 'white',
  fontSize: '3.5rem',
  fontWeight: 700,
  lineHeight: 1,
  fontFamily: "'Digital-7', monospace",
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
              xs: '1.5rem',
              sm: '2rem',   // Medium devices (tablets)
              md: '3rem',   // Large devices (desktops)
              lg: '4rem',   // Extra large devices
            },
          }}
        >
          Exclusive Deals Available Until!
        </Typography>


        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 3,
          mb: 6,
          flexWrap: 'wrap',
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
            component={Link}
            href="https://www.muissa.com/membership"
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
              '&:hover': {
                backgroundColor: '#1591A3',
                color: '#fff',
              },
            }}
          >
            Get Membership Today
          </Button>

        </Typography>
      </Container>
    </Box>
  )
}

