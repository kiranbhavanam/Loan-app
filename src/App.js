import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Registration from './pages/Registration';
import HomePage  from './pages/Home';
import Navbar from "./pages/navbar"
import Login from './pages/Login';
import ApplyLoan from './pages/ApplyLoan';
import Dashboard from './pages/Dashboard';
function App() {
  return (
      <Router>
    <div className="App">
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/register" element={<Registration/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/apply-loan" element={<ApplyLoan/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      {/* <h3 className="font-extrabold bg-red-600 text-yellow-600">hello there</h3> */}
    </div>
      </Router>
  );
}

export default App;
