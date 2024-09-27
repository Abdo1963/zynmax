"use client"; // Client-side component

import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

export default function QRScanner() {
  const [scannedData, setScannedData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Initialize QR code scanner with the required three arguments
    const config = {
      fps: 10,    // Frames per second for the scanner
      qrbox: 250, // Defines the scanning box size (250px square)
    };

    const verbose = false; // Verbose logging

    // Create the scanner object
    const scanner = new Html5QrcodeScanner("reader", config, verbose);

    // Render the QR code scanner
    scanner.render(
      (decodedText: string) => {
        // Handle successful scan
        setScannedData(decodedText);
        setError(null);
      },
      (scanError) => {
        // Handle scan error
        console.error("Error during scanning:", scanError);
        setError("Failed to scan QR code.");
      }
    );

    // Cleanup when the component unmounts
    return () => {
      scanner.clear();
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>QR Code Scanner</h1>
      <div id="reader" style={{ width: '500px', margin: '0 auto' }}></div>

      {scannedData && (
        <div style={{ marginTop: '20px' }}>
          <h2>Scanned Data:</h2>
          <p>{scannedData}</p>
        </div>
      )}

      {error && (
        <div style={{ marginTop: '20px', color: 'red' }}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
