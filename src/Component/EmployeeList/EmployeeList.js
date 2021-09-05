import React from 'react';

const EmployeeList = () => {
    return (
        <div className="container">
            <h6>Employee List</h6>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone No</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Samiul</td>
                        <td>Sheikh</td>
                        <td>sheikh.samiul1971@gmail.com</td>
                        <td>01784097404</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Samiul</td>
                        <td>Sheikh</td>
                        <td>sheikh.samiul1971@gmail.com</td>
                        <td>01784097404</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Samiul</td>
                        <td>Sheikh</td>
                        <td>sheikh.samiul1971@gmail.com</td>
                        <td>01784097404</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;