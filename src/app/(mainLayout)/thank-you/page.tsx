'use client'

import React, { useState, useEffect } from 'react'
import { Box, Typography, Button, Container, Paper, useMediaQuery, useTheme } from '@mui/material'
import { motion, useAnimation } from 'framer-motion'
import { CheckCircle, Lightbulb, TrendingUp, Schedule, ArrowBack, Star } from '@mui/icons-material'

const ThankYouPage = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const controls = useAnimation()
  const [activeService, setActiveService] = useState<number | null>(null)

  const services = [
    { icon: <Lightbulb sx={{ fontSize: 40 }} />, text: 'পরামর্শ', description: 'বিশেষজ্ঞ পরামর্শ প্রদান' },
    { icon: <TrendingUp sx={{ fontSize: 40 }} />, text: 'বিজনেস গ্রোথ', description: 'আপনার ব্যবসা বাড়ানোর কৌশল' },
    { icon: <Schedule sx={{ fontSize: 40 }} />, text: '২৪/৭ সাপোর্ট', description: 'সারা দিন সহায়তা' },
  ]

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  return (
    <Box
      sx={{
        bgcolor: '#00305C',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          <Paper
            elevation={24}
            sx={{
              borderRadius: 8,
              overflow: 'hidden',
              position: 'relative',
              bgcolor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Box
              sx={{
                background: 'linear-gradient(135deg, rgba(21,145,163,0.9) 0%, rgba(0,48,92,0.9) 100%)',
                p: { xs: 3, sm: 4, md: 6 },
                position: 'relative',
                zIndex: 2,
              }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
              >
                <CheckCircle sx={{ fontSize: 120, color: '#FFD700', display: 'block', margin: '0 auto', mb: 3 }} />
              </motion.div>

              <Typography variant="h3" component="h1" align="center" sx={{ color: 'white', fontWeight: 700, mb: 2 }}>
                ধন্যবাদ!
              </Typography>
              <Typography variant="h5" align="center" sx={{ color: 'white', mb: 4 }}>
                আপনার অনুরোধ সফলভাবে জমা হয়েছে।
              </Typography>

              <Box 
                sx={{ 
                  display: 'flex', 
                  flexDirection: isMobile ? 'column' : 'row',
                  justifyContent: 'center', 
                  alignItems: 'center',
                  gap: 4, 
                  mb: 4 
                }}
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    onHoverStart={() => setActiveService(index)}
                    onHoverEnd={() => setActiveService(null)}
                  >
                    <Paper
                      elevation={8}
                      sx={{
                        p: 2,
                        width: isMobile ? '100%' : 160,
                        height: 160,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'rgba(255,255,255,0.1)',
                        borderRadius: '16px',
                        color: 'white',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          bgcolor: 'rgba(255,255,255,0.2)',
                        },
                      }}
                    >
                      {service.icon}
                      <Typography variant="body1" align="center" sx={{ mt: 2, fontWeight: 'bold' }}>
                        {service.text}
                      </Typography>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: activeService === index ? 1 : 0, height: activeService === index ? 'auto' : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                          {service.description}
                        </Typography>
                      </motion.div>
                    </Paper>
                  </motion.div>
                ))}
              </Box>

              <Typography variant="body1" align="center" sx={{ color: 'white', mb: 4 }}>
                আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
              </Typography>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<ArrowBack />}
                  sx={{
                    display: 'flex',
                    mx: 'auto',
                    bgcolor: 'white',
                    color: '#1591A3',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    borderRadius: 50,
                    boxShadow: '0 4px 20px rgba(255,255,255,0.3)',
                    '&:hover': {
                      bgcolor: '#e0e0e0',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 25px rgba(255,255,255,0.4)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  হোম পেজে ফিরে যান
                </Button>
              </motion.div>
            </Box>
          </Paper>
        </motion.div>
      </Container>

      {/* Animated background elements */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{ 
              repeat: Infinity, 
              duration: Math.random() * 8 + 4,
              delay: Math.random() * 2,
            }}
            style={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              backgroundColor: 'white',
              borderRadius: '50%',
            }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: 360,
            }}
            transition={{ 
              repeat: Infinity, 
              duration: Math.random() * 4 + 2,
              delay: Math.random() * 2,
            }}
            style={{
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <Star sx={{ fontSize: 40, color: 'rgba(255,215,0,0.6)' }} />
          </motion.div>
        ))}
      </Box>
    </Box>
  )
}

export default ThankYouPage

