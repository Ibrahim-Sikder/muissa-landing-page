'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Box, Button, Container, Typography } from '@mui/material'
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
      <div className='sectionMargin flex items-center justify-center pb-10 '

      >
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: 'center',
              '& > *': { color: '#ffffff' }
            }}
          >

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

              আপনার আবেদন কেবল এই বা সাইজনাম প্রয়োজনীয় হলে কি কনসালট্যান্টদের জন্য কল করুন অথবা মোবাইল নম্বর দিন ।
            </Typography>

            <div className="flex flex-wrap gap-2 items-center justify-center">
              <Button

                color="error"

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
                    '&::before': {
                      left: 0,
                    },
                  },
                  '&:active': {
                    transform: 'scale(0.98)',
                    transition: 'transform 0.1s',
                  },
                }}
              >
                GET FREE CONSULTANCY
              </Button>
              <Button

                color="error"

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
                    content: "''",
                    position: 'absolute',
                    top: 0,
                    right: '-100%',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#1591A3',
                    transition: 'right 0.5s ease-in-out',
                    zIndex: -1,
                  },
                  '&:hover': {
                    color: '#fff',
                    '&::before': {
                      right: 0,
                    },
                  },
                  '&:active': {
                    transform: 'scale(0.98)',
                    transition: 'transform 0.1s',
                  },
                }}
              >
                09613-244444
              </Button>


            </div>
            <p className="text-center text-white mt-5 ">
              অথবা আমাদের সাথে যোগাযোগ করতে কল করুন ০১৭....।
            </p>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  )
}
