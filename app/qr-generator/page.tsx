"use client";  // This tells Next.js that this is a Client Component

import React, { useState } from 'react';

const QRGenerator: React.FC = () => {
  const [studentId, setStudentId] = useState<string>('');
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudentId(e.target.value);
  };

  const generateQrCode = () => {
    if (studentId) {
      // Construct the QR code URL using the goqr.me API
      const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
        studentId
      )}&size=256x256`;
      setQrCodeUrl(apiUrl);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter Student ID"
        value={studentId}
        onChange={handleInputChange}
        style={{
          padding: '10px',
          width: '250px',
          fontSize: '16px',
          marginBottom: '20px',
        }}
      />
      <br />
      <button
        onClick={generateQrCode}
        style={{ padding: '10px 20px', marginTop: '20px', fontSize: '16px' }}
      >
        Generate QR Code
      </button>

      {qrCodeUrl && (
        <div style={{ marginTop: '20px' }}>
          <h2>Generated QR Code:</h2>
          {/* Display the QR Code */}
          <img src={qrCodeUrl} alt="QR Code" />
        </div>
      )}
    </div>
  );
};

export default QRGenerator;
