import AdminProfile from './Admin/AdminProfile';
import AdminAddRoom from './Admin/AdminAddRoom';
import AdminDashboard from './Admin/AdminDashboard';
import AdminNavbar from './Admin/AdminNavbar';
import './App.css';
import UserProfilePage from './Admin/UserProfilePage';
//import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
          {/*<AdminNavbar/>*/}
          {/*<UserProfilePage/>*/}
          {/*<AdminProfile/>*/}
          {/*<AdminDashboard/>*/}
          {/*<AdminAddRoom/>*/}
            <Router>
            
                <AdminNavbar/>
                <Routes>
                    <Route exact path="/AdminProfile" element={<AdminProfile/>}></Route>
                    <Route exact path="/AdminDashboard" element={<AdminDashboard/>}></Route>
                    <Route exact path="/AdminAddRoom" element={<AdminAddRoom/>}></Route>

                </Routes>

        </Router>
    </>
  )
}

export default App;
