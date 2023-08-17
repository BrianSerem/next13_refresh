'use client'
import Courses from './components/Courses'
import CourseSearch from './components/CourseSearch'
import { useState, useEffect } from 'react'
import LoadingPage from './loading'



export default function HomePage() {
  const [courses, setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const fetchCourses = async () => {
      const res = await fetch('/api/courses')
      const data = await res.json()
      console.log(data)
      setCourses(data)
      setIsLoading(false)
    }

    fetchCourses()
  }, [])
  if (isLoading) {
    return <LoadingPage />
  }
  return (
    <>
      <h1> Welcome to Traversy Courses</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </>
  )
}
