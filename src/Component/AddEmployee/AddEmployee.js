import axios from 'axios';
import React, { useState } from 'react';

const AddEmployee = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const submitInformation = () => {
        // console.log("s");
        axios.post("http://localhost:3000/api/insert", {id: id, firstName: firstName, lastName: lastName, email: email, phone: phone })
            .then(() => {
                alert("insert successfully");
            });
    };

    return (
        <div className="container">
            <h2>Add Employee</h2>
            <div className="form">
                <label>First Name</label>
                <input type="text" name="firstName" onChange={(e) => { setFirstName(e.target.value); }} />
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={(e) => { setLastName(e.target.value); }} />
                <label>Email Address</label>
                <input type="text" name="email" onChange={(e) => { setEmail(e.target.value); }} />
                <label>Phone No</label>
                <input type="text" name="phone" onChange={(e) => { setPhone(e.target.value); }} />
                <button onClick={submitInformation} type="button" className="btn btn-success">Submit</button>
            </div>
        </div>
    );
};

export default AddEmployee;