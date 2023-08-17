import { NextResponse } from "next/server";
import courses from './data'


export async function GET(request) {
    return  NextResponse.json(courses);
  }