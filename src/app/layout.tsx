import '../styles/globals.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import ThemeClient from '../components/ThemeClient';
import StyledContainer from '../components/Home/StyledContainer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prueba técnica para Kuantaz',
  description: 'Creada por Isaac Rojas',
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
