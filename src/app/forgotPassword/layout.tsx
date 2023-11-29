import type { Metadata } from 'next'

import StyledComponentsRegistry from '../registry'

export const metadata: Metadata = {
  title: 'Forgot Password',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
