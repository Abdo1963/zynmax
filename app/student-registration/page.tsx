"use client"; // Mark this file as a client-side component

import React, { useState } from 'react';

export default function StudentRegistration() {
  const [studentId, setStudentId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [className, setClassName] = useState<string>('');
  const [section, setSection] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    const studentData = { studentId, name, surname, className, section };

    try {
      const response = await fetch('/api/register-student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      });

      if (response.ok) {
        setMessage('Student registered successfully!');
        setStudentId('');
        setName('');
        setSurname('');
        setClassName('');
        setSection('');
      } else {
        const errorData = await response.json();
        setMessage(`Failed to register student: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error registering student:', error);
      setMessage('An error occurred during registration.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Student Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <p>Student ID: </p>
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
        </div>

        <div className="form-row">
          <p>First Name:</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-row">
          <p>Surname:</p>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>

        <div className="form-row">
          <p>Class:</p>
          <input
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
          />
        </div>

        <div className="form-row">
          <p>Section:</p>
          <input
            type="text"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isLoading} >
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
      
    </div>
  );
}

