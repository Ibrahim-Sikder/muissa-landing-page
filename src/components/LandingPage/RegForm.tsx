'use client'
import {
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material'
import { Person, Email, Phone, Home, Apartment } from '@mui/icons-material'

export default function QuoteRequestForm() {

  return (
    <Box
      sx={{
        bgcolor: 'white',
        borderRadius: '20px',
        p: { xs: 2, sm: 4, md: 4 },
        width: '100%',
        maxWidth: '500px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: 700,
          mb: 1,
          color: '#1591A3',
          fontSize: {
            xs: '1.3rem',
            sm: '2rem',
          },
          textAlign: 'center',
          text: 'uppercase'
        }}
      >
        ফ্রি পরামর্শ নিন
      </Typography>



      <Box component="form" noValidate autoComplete="off">
        <TextField
          fullWidth
          placeholder="নাম"
          variant="outlined"
          sx={{ mb: 2 }}
          InputProps={{
            startAdornment: (
              <Person sx={{ color: 'text.secondary', mr: 1 }} />
            ),
          }}
        />

        <TextField
          fullWidth
          placeholder="ইমেইল"
          variant="outlined"
          type="email"
          sx={{ mb: 2 }}
          InputProps={{
            startAdornment: (
              <Email sx={{ color: 'text.secondary', mr: 1 }} />
            ),
          }}
        />

        <TextField
          fullWidth
          placeholder="হোয়াটসঅ্যাপ নাম্বার"
          variant="outlined"
          sx={{ mb: 2 }}
          InputProps={{
            startAdornment: (
              <Phone sx={{ color: 'text.secondary', mr: 1 }} />
            ),
          }}
        />
        <TextField
          fullWidth
          placeholder="ব্যবসার নাম"
          variant="outlined"
          sx={{ mb: 2 }}
          InputProps={{
            startAdornment: (
              <Apartment sx={{ color: 'text.secondary', mr: 1 }} />
            ),
          }}
        />
        <TextField
          fullWidth
          placeholder="ব্যবসার ধরন"
          variant="outlined"
          sx={{ mb: 2 }}
          InputProps={{
            startAdornment: (
              <Home sx={{ color: 'text.secondary', mr: 1 }} />
            ),
          }}
        />
        <TextField
          fullWidth
          placeholder="ব্যবসার ঠিকানা"
          variant="outlined"
          sx={{ mb: 2 }}
          InputProps={{
            startAdornment: (
              <Home sx={{ color: 'text.secondary', mr: 1 }} />
            ),
          }}
        />


        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: '#1591A3',
            color: '#fff',
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
              backgroundColor: '#fff',
              transform: 'translate(-50%, -50%)',
              borderRadius: '50%',
              transition: 'width 0.5s ease-out, height 0.5s ease-out',
              zIndex: -1,
            },
            '&:hover': {
              color: '#1591A3',
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
          ফ্রি পরামর্শ নিন
        </Button>
      </Box>
    </Box>
  )
}

