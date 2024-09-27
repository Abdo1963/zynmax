import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to QR Attendance System</h1>
      <div style={{ marginTop: '20px' }}>
        <Link href="/qr-generator">
          <a style={{ marginRight: '20px', fontSize: '20px' }}>Generate QR Code</a>
        </Link>
        <Link href="/qr-scanner">
          <a style={{ fontSize: '20px' }}>Scan QR Code</a>
        </Link>
      </div>
    </div>
  );
}

