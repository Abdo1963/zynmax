"use client"; // Ensure this is a client-side component since we're using buttons

import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>QR Attendance System</h1>

      <div style={{ marginTop: '40px' }}>
        {/* QR Code Generate Button */}
        <Link href="/student-registration">
          <button
            style={{
              padding: '15px 30px',
              fontSize: '18px',
              backgroundColor: '#B6721A',
              color: 'white',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              marginRight: '20px',
            }}
          >
            Student Registration
          </button>
        </Link>

        {/* QR Code Read Button */}
        <Link href="/qr-scanner">
          <button
            style={{
              padding: '15px 30px',
              fontSize: '18px',
              backgroundColor: '#693B00',
              color: 'white',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Attendance Record
          </button>
        </Link>
      </div>
    </div>
  );
}

