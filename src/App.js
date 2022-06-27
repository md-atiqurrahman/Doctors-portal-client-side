import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Reviews from './Pages/Reviews/Reviews';
import Navbar from './Pages/Shared/Navbar/Navbar';
import NotFound from './Pages/Shared/NotFound/NotFound';
import 'react-day-picker/dist/style.css';
import SignUp from './Pages/Login/SignUp/SignUp';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyAppointments from './Pages/DashBoard/MyAppointments';
import MyReviews from './Pages/DashBoard/MyReviews';
import MyHistory from './Pages/DashBoard/MyHistory';
import Users from './Pages/DashBoard/Users';
import RequireAdmin from './Pages/Shared/RequireAdmin/RequireAdmin';
import AddDoctor from './Pages/DashBoard/AddDoctor';
import ManageDoctors from './Pages/DashBoard/ManageDoctors';
import Payment from './Pages/DashBoard/Payment';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        
        <Route path='/dashboard' element={<RequireAuth><DashBoard/></RequireAuth>}>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='reviews' element={<MyReviews></MyReviews>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='payment/:appointmentId' element={<Payment></Payment>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='addDoctor' element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path='manageDoctor' element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>
        </Route>
        
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
