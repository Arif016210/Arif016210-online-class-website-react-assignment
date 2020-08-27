import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Courses.css';
import CourseList from '../CourseList/CourseList';
import Enroll from '../Enroll/Enroll';

const Courses = () => {
    const course = fakeData;
    const [courses, setCourse] = useState(course);

    const [enroll, setEnroll] = useState([])

    const handleCourseAdd = (course) => {
        console.log('Course Add', course);
        const newEnroll = [...enroll, course];
        setEnroll(newEnroll);
    }

    return (
        <div className="courses">
            <div className="course-content">
                <h1>Total Course : {courses.length} </h1>


                {
                    courses.map(course => <CourseList
                        handleCourseAdd={handleCourseAdd}
                        courseList={course}
                    >
                    </CourseList>)
                }

            </div>

            <div className="enroll-summary">
                <Enroll enroll={enroll} ></Enroll>
            </div>

        </div>
    );
};

export default Courses;