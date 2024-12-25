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
            sm: '7vh',
            md: '10vh',
            lg: '12vh',
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
              Get Your Membership Today
            </Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
