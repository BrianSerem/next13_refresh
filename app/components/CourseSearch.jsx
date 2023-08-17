'use client'
import { useState } from 'react'

const CourseSearch = ({ getSearchResults }) => {

    const [query, setQuery] = useState('')
    const [resultsNotFound, setResultsNotFound ] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`/api/courses/search?query=${query}`)

        const courses = await res.json()
        if( courses.length > 0) {
            getSearchResults(courses)

        }
    }
    return (
        <form className='search-form' onSubmit={handleSubmit}>
            <input className='search-input' type='text' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search by title' />
            <button className='search-button' type='submit'> Search </button>
            {resultsNotFound && <p>
                No courses found for your search</p>}
        </form>
    )
}

export default CourseSearch
