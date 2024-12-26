'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Box, Button, Container, Typography } from '@mui/material'
import Link from 'next/link'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
    },
    error: {
      main: '#ff3d3d'
    }
  },
  typography: {
    fontFamily: 'inherit'
  }
})

export default function NotificationPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: {
            xs: '5vh',
            sm: '5vh',
            md: '5vh',
            lg: '5vh',
          },
        }}

      >
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: 'center',
              '& > *': { color: '#ffffff' }
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '1.5rem', md: '2.5rem' },
                fontWeight: 500,
                mb: 2,
                letterSpacing: '0.5px'
              }}
            >
              আপনার ব্যবসাকে এগিয়ে নিয়ে যান!
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1rem', md: '1.5rem' },
                fontWeight: 400,
                mb: 4,
                opacity: 0.9,
                letterSpacing: '0.5px'
              }}
            >
              মুইসা কনসালটেন্সির সাথে আপনার ব্যবসা  দক্ষতা বৃদ্ধি করুন—আজই যোগ দিন!
            </Typography>
            <Button

              color="error"
              component={Link}
              href='https://www.muissa.com/membership'
              variant="contained"
              sx={{
                backgroundColor: '#fff',
                color: '#00305C',
                borderBottom: '5px solid #1591A3',
                padding: {
                  xs: '8px 6px',
                  sm: '10px 24px',
                  md: '12px 32px',
                },

                fontWeight: '900',
                fontSize: {
                  xs: '17px',
                  sm: '18px',
                  md: '20px',
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
                  background: '#1591A3',
                  borderBottom: '5px solid #fff',
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
              Get Your Membership Today
            </Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
