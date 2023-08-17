import { NextResponse } from "next/server";
import courses from './data'
import { v4 as uuid } from 'uuid'


export async function GET(request) {
    return  NextResponse.json(courses);
  }

export async function POST(request) {
  const { title, description, level, link } = await request.json()
  const course = {
    id: uuid(),
    title,
    description,
    level,
    link
  }
  courses.push(course)
  return NextResponse.json(courses)

}