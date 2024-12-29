'use client'
import {
  Box,
  Button,
  Typography,
} from '@mui/material'
import { Person, Email, Home, Apartment, WhatsApp } from '@mui/icons-material'
import MUIInput from '../Forms/input'
import axios from 'axios'
import { FieldValues } from 'react-hook-form'
import MuissaForm from '../Forms/form'
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const mettingSchema = z.object({
  fullName: z.string({ required_error: 'Full name is required.' }),
  whatsappNumber: z.union([
    z.string({ required_error: 'Whatsapp number is required' }),
    z.number({ required_error: 'Whatsapp number is required' }),
  ]),
  businessName: z.string({ required_error: 'Business name is required' }),
  businessType: z.string({
    required_error: 'Business type is required',
  }),
  businessAddress: z.string({
    required_error: 'Business address is required',
  }),
  email: z.string({
    required_error: 'Email address is required',
  }),
});

export default function QuoteRequestForm() {
  const router = useRouter()
  const handleBookMetting = async (data: FieldValues) => {
    try {



      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/funding-advice`,
        data
      );


      if (res.status === 200 || res.status === 201) {
        toast.success('Meeting booked successfully!', {
          id: 'success-toast',
          duration: 1000,
        });


      }
      router.push('/thank-you')
    } catch (err) {
      toast.error("Something went wrong!!!");
      console.error(err);
    }
  };

  return (
    <>
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



        <MuissaForm onSubmit={handleBookMetting} resolver={zodResolver(mettingSchema)}>
          <MUIInput
            fullWidth
            name='fullName'
            placeholder="নাম"
            size='medium'
            InputProps={{
              startAdornment: (
                <Person sx={{ color: 'text.secondary', mr: 1 }} />
              ),
            }}
          />


          <MUIInput
            name='whatsappNumber'
            fullWidth
            placeholder="হোয়াটসঅ্যাপ নাম্বার"
            variant="outlined"
            size='medium'
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <WhatsApp sx={{ color: 'text.secondary', mr: 1 }} />
              ),
            }}
          />
          <MUIInput
            name='email'
            fullWidth
            label='ইমেইল'
            placeholder="ইমেইল"
            variant="outlined"
            size='medium'
            type="email"
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <Email sx={{ color: 'text.secondary', mr: 1 }} />
              ),
            }}
          />
          <MUIInput
            name='businessName'
            fullWidth
            label='ব্যবসার নাম'
            placeholder="ব্যবসার নাম"
            variant="outlined"
            size='medium'

            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <Apartment sx={{ color: 'text.secondary', mr: 1 }} />
              ),
            }}
          />


          <MUIInput
            name='businessType'
            fullWidth
            label='ব্যবসার ধরন'
            placeholder="ব্যবসার ধরন"
            variant="outlined"
            size='medium'

            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <Home sx={{ color: 'text.secondary', mr: 1 }} />
              ),
            }}
          />

          <MUIInput
            name='businessAddress'
            fullWidth
            label='ব্যবসার ঠিকানা'
            placeholder="ব্যবসার ঠিকানা"
            variant="outlined"
            size='medium'

            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <Home sx={{ color: 'text.secondary', mr: 1 }} />
              ),
            }}
          />



          <Button
            type='submit'
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
              fontWeight: 'bold',
              fontSize: {
                xs: '18px',
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
                backgroundColor: '#00305C',
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
            ফ্রি পরামর্শ নিন
          </Button>
        </MuissaForm>
      </Box>
    </>
  )
}

