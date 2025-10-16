import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeLayout from './public/HomeLayout';
import SignUp from './Sign_Up/SignUp';
import Login from './Login/Login';

const App: React.FC = () => {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<HomeLayout />}></Route>
            <Route path="/home" element={<HomeLayout />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App
