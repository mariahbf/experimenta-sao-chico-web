'use client';
import { LandingPage } from '@/components/LandingPage/LandingPage';
import { Box, useTheme } from '@mui/material';

export default function Home() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        height: 'fit-content',
        width: '100vw',
        backgroundColor: theme.palette.customPrimaryShades[100],
      }}
    >
      <LandingPage />
    </Box>
  );
}
