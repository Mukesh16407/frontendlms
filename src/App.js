import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import { Home } from './pages/Home';
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer/Footer';
import { Contact } from './pages/Contact';
import { Request } from './pages/Request';
import { About } from './pages/About';
import { Profile } from './pages/Profile/Profile';
import { ChangePassword } from './pages/Profile/ChangePassword';
import { UpdateProfle } from './pages/Profile/UpdateProfle';
import { Login } from './pages/Auth/Login';
import { Register } from './pages/Auth/Register';
import { ForgetPassword } from './pages/Auth/ForgetPassword';
import { ResetPassword } from './pages/Auth/ResetPassword';
import { NotFound } from './pages/NotFound';
import { PaymentSuccess } from './pages/Payment/PaymentSuccess';
import { PaymentFail } from './pages/Payment/PaymentFail';
import { Dashboard } from './pages/Admin/Dashboard/Dashboard';
import { CreateCourse } from './pages/Admin/CreateCourse/CreateCourse';
import { Users } from './pages/Admin/Users';
import {Subscribe} from './pages/Payment/Subscribe';
import {AdminCourses} from './pages/Admin/AdminCourse/AdminCourses'
import { CoursePage } from './pages/Courses/CoursePage';
function App() {
  return (
    <BrowserRouter>
     <Header/>
     

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />

            <Route
              path="/course/:id"
              element={
              
                  <CoursePage/>
              
              }
            />

            <Route path="/contact" element={<Contact />} />
            <Route path="/request" element={<Request />} />
            <Route path="/about" element={<About />} />

            <Route
              path="/profile"
              element={  <Profile /> } />
            <Route
              path="/changepassword"
              element={
               
                  <ChangePassword />
                
              }
            />
            <Route
              path="/updateprofile"
              element={
               
                  <UpdateProfle />
                
              }
            />

            <Route
              path="/login"
              element={
                
              
                  <Login />
                
              }
            />
            <Route
              path="/register"
              element={
                
                
                  <Register/>
                
              }
            />
            <Route
              path="/forgetpassword"
              element={
              
                  <ForgetPassword />
                
              }
            />

            <Route
              path="/resetpassword/:token"
              element={
                
               
                  <ResetPassword />
                
              }
            />

            <Route
              path="/subscribe"
              element={
               
                  <Subscribe />
                
              }
            />

            <Route path="*" element={<NotFound />} />

            <Route path="/paymentsuccess" element={<PaymentSuccess />} />

            <Route path="/paymentfail" element={<PaymentFail />} />

            {/* Admin Routes */}
            <Route
              path="/admin/dashboard"
              element={
                
                  <Dashboard />
                
              }
            />
            <Route
              path="/admin/createcourse"
              element={
                
              
                  <CreateCourse />
                
              }
            />
            <Route
              path="/admin/courses"
              element={
                
             
                  <AdminCourses />
                
              }
            />
            <Route
              path="/admin/users"
              element={
                
                
                  <Users />
                
              }
            />
          </Routes>
      <Footer/>
    </BrowserRouter>
   
  );
}

export default App;
