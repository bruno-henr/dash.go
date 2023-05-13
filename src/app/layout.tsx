"use client"

import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
//style
import { theme } from '../styles/theme'

import { Roboto } from 'next/font/google';
 
const roboto = Roboto({
  variable: '--font-roboto',
  weight: ['400','500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang='en' >
      
      <body className={roboto.className}>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            {children}
          </ChakraProvider> 
        </CacheProvider>
      </body>
    </html>
  )
}
