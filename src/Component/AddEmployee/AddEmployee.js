import React, { useState } from 'react';

const AddEmployee = () => {

    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    return (
        <div className="container">
            <h2>Add Employee</h2>
            <div className="form">
                <label>First Name</label>
                <input type="text" name="firstName" />
                <label>Last Name</label>
                <input type="text" name="lastName" />
                <label>Email Address</label>
                <input type="text" name="email" />
                <label>Phone No</label>
                <input type="text" name="phone" />
                <button type="button" class="btn btn-success">Submit</button>
            </div>
        </div>
    );
};

export default AddEmployee;