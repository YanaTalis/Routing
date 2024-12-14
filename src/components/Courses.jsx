import { Link, useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useEffect, useState } from 'react'
import courses from '../data/courses'

const SORT_KEYS = ['title', 'slug', 'id']

function sortCourses(courses, key) {
  const sortedCourse = [...courses]
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourse
  }
  sortedCourse.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  return sortedCourse
}

const Courses = () => {
  const location = useLocation()
  const query = queryString.parse(location.search)
  const navigate = useNavigate()
  const [sortKey, setSortKey] = useState(query.sort)
  const [sortedCourse, setSourtedCourse] = useState(
    sortCourses(courses, sortKey)
  )
  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
        navigate('.')
        setSortKey()
        setSourtedCourse([...courses])
    }
  }, [sortKey, navigate])

  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'} </h1>
      {sortedCourse.map((course) => (
        <div key={course.id}>
          <Link to={course.slug} className="courseLink">
            {course.title}
          </Link>
        </div>
      ))}
    </>
  )
}

export default Courses
