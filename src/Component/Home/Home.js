import React from 'react';
import AddEmployee from '../AddEmployee/AddEmployee';
import EmployeeList from '../EmployeeList/EmployeeList';

const Home = () => {
    return (
        <div>
            <AddEmployee />
            <EmployeeList />
        </div>
    );
};

export default Home;