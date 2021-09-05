import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import AddEmployee from './Component/AddEmployee/AddEmployee';
import EmployeeList from './Component/EmployeeList/EmployeeList';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/addEmployee" component={AddEmployee} />
                    <Route path="/employeeList" component={EmployeeList} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
