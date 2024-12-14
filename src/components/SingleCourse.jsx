import { Link, useNavigate, useParams } from 'react-router-dom'

import courses from '../data/courses'
import { useEffect } from 'react'

const SingleCourse = () => {
  const params = useParams() // то, что передается в адресной строке
  const navigate = useNavigate()

  const course = courses.find((course) => course.slug === params.courseSlug)

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' })
    }
  }, [course, navigate])

  return (
    <>
      <span>Course Info</span>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <div>{course?.id}</div>
      <Link className='courseLink' to=".." relative="path">
        All Courses
      </Link>
    </>
  )
}

export default SingleCourse
