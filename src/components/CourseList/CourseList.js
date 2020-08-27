import React from 'react';
import './CourseList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';



const CourseList = (props) => {
    console.log(props);
    const { img, name, description, mentor, lectures, hours, price } = props.courseList;
    return (
        <div className="courseList">
            <div className="course-img">
                <img src={img} alt="" />
            </div>
            <div className="course-info">
                <h2> {name} </h2>
                <p> <b>Description :</b> {description} </p>
                <p> <b>Mentor :</b> {mentor} </p>
                <p> <b>Lectures :</b> {lectures}</p>
                <p><b> Hours : </b> {hours} </p>
                <h4> <b> Course Fee : </b> ${price} </h4>

                <Button variant="info"
                    onClick={() => props.handleCourseAdd(props.courseList)}
                > Enroll Now </Button>
            </div>
        </div>
    );
};

export default CourseList;