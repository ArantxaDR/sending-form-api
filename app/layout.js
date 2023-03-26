import './globals.css'
import { font } from './font/font'

export const metadata = {
  title: 'Mediasmart challenge',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={font.variable}>{children}</body>
    </html>
  )
}
