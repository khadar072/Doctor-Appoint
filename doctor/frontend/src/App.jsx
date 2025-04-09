import React from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Appointment from './pages/Appointment'
import MyAppointment from './pages/MyAppointment'
import Profile from './pages/Profile'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Footer from './component/Footer'
import Resetpassword from './pages/Resetpassword'
import Forgotpassword from './pages/Forgotpassword'
import Hero from './component/Hero'
import Payment from './pages/Payment'
import PaymentStatus from './pages/PaymentStatus'
import CancelPage from './component/CancelPage'
import SuccessPage from './component/SuccessPage'
import Navbar2 from './component/Navbar2';




const App = () => {
  return (
    <div className='mx-4 sm:mx-[4%] xl:mx-[6%] m-auto'>
      <ToastContainer/>
      <Navbar2/>
      {/* <Hero/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/appointment/:docId' element={<Appointment/>}/>
        <Route path='/my-appointment' element={<MyAppointment/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/payment' element={<PaymentStatus/>}/>     
        <Route path='/login' element={<Login/>}/>
        <Route path='/cancel' element={<CancelPage/>}/>
        <Route path='/complete' element={<SuccessPage/>}/>
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/reset-password/:id/:token" element={<Resetpassword />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
