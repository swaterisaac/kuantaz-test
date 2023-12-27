import '../styles/globals.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Container, Grid } from '@mui/material';

import ThemeClient from './ThemeClient';
import StyledContainer from './StyledContainer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeClient>
      <html lang="es">
        <body className={inter.className}>
          <StyledContainer maxWidth={'lg'}>
            <main>
              {children}
            </main>
          </StyledContainer>
        </body>
      </html>
    </ThemeClient>
  )
}
