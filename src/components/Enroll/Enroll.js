import React from 'react';
import './Enroll.css';

const Enroll = (props) => {
    const enroll = props.enroll;

    let total = 0;
    for (let i = 0; i < enroll.length; i++) {
        const course = enroll[i];
        total = (total + course.price);

    }

    const totalFee = total.toFixed(2);


    return (
        <div className="enroll">
            <h2>Enroll Summary</h2>
            <h4>Enroll Course : {enroll.length} </h4>
            <h3>Total Course Fee : ${totalFee} </h3>
        </div>
    );
};

export default Enroll;