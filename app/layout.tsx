import './globals.css'; // Import your global CSS here
import { ReactNode } from 'react';

export const metadata = {
  title: 'QR Attendance System',
  description: 'QR code-based attendance system',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
