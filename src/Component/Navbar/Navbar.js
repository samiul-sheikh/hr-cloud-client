import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">HR Cloud</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link me-5" as={Link}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/addEmployee" className="nav-link me-5" as={Link}>Add Employee</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/employeeList" className="nav-link me-5" as={Link}>EmployeeList</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;