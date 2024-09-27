import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    // Parse incoming JSON data
    const { studentId, name, surname, className, section } = await req.json();

    // Debug log to ensure we received the data
    console.log('Received data:', { studentId, name, surname, className, section });

    // Insert student data into the database
    const result = await pool.query(
      `INSERT INTO students (student_id, name, surname, class, section) 
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [studentId, name, surname, className, section]
    );

    console.log('Insert successful:', result.rows[0]);

    // Return success response
    return NextResponse.json({ success: true, student: result.rows[0] });

  } catch (error) {
    console.error('Error registering student:', error);
    return NextResponse.json({ error: 'Error registering student' }, { status: 500 });
  }
}

