'use client'
import { useState } from 'react'

const CourseSearch = ({ getSearchResults }) => {

    const [query, setQuery] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`/api/courses/search?query=${query}`)

        const courses = await res.json()
        console.log(courses)
        getSearchResults(courses)
    }

    return (
        <form className='search-form' onSubmit={handleSubmit}>
            <input className='search-input' type='text' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search by title' />
            <button className='search-button' type='submit'> Search </button>
        </form>
    )
}

export default CourseSearch
