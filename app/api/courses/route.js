import { NextResponse } from "next/server";
import courses from './data'


export async function GET(request) {
    return  NextResponse.json(courses);
  }

export async function POST(request) {
  const { title, description, level, link } = await request.json()
  const course = {
    title,
    description,
    level,
    link
  }
  courses.push(course)
  return NextResponse.json(course)

}