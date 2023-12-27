'use client'

import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../defaultTheme';

export default function ThemeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
} 