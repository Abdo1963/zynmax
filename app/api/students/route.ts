import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    // Query the database to get all students
    const result = await pool.query('SELECT * FROM students');

    return NextResponse.json({ students: result.rows });
  } catch (error) {
    console.error('Error fetching students:', error);
    return NextResponse.json({ error: 'Error fetching students' }, { status: 500 });
  }
}
