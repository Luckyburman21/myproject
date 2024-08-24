import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Header from './components/header/header';   

import Admin_home from './components/admin_dashboard/admin_home';
import All_cluster from './components/all_cluster/all_cluster';
import Eeach_cluster from './components/each_cluster/each_cluster';
import Login from './components/login/login';
import User_dashboard from './components/user_dashboard/user_dashboard';
import Filter_data from './components/filter_data/filter_data';
import Filter_employee from './components/filter_data/filter_employee';
import Working_days_late_punch from './components/working_days_late_punch/working_days_late_punch';
import Loading from './components/loading/loading';
function App() {
  const location = useLocation();

  return (
    <>
     
      <div className='main-container'>
      {location.pathname !== '/' && <Header />}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin-home' element={<Admin_home />} />
          <Route path='/all-cluster' element={<All_cluster />} />
          <Route path='/each-cluster' element={<Eeach_cluster />} />
          <Route path='/user-home' element={<User_dashboard />} />
          <Route path='/filtered-data' element={<Filter_data/>} />
          <Route path='/filtered-employee' element={<Filter_employee/>} />
          <Route path='/loading' element={<Loading/>} />
          <Route path='/working-date-late-punch' element={<Working_days_late_punch/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;