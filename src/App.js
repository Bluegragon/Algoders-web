
import './App.css';
import ResponsiveAppBar from './components/navbar.jsx'
import 'react-router-dom';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './home';
import SignUpform from './components/signupdrawer';
import Profile from './components/profile';
import PermanentDrawer from './components/sidebar';

// import TemporaryDrawer from './components/Drawer';
function App() {
  return (
    
     <Router>
       <Routes>
         <Route path="/"  element={<> 
          <ResponsiveAppBar/>
       
         <Home/>     
  </> } /> 
  <Route path="/home"  element={<> 
    <ResponsiveAppBar/>
       
       <Home/>     
</> } /><Route path="/signup" element={<>
  <ResponsiveAppBar/>

         <SignUpform/>     
  </> } />
  <Route path="/profile" element={<>
    <ResponsiveAppBar/>

         <Profile/>     
  </> } />
  <Route path="/blogs" element={<> 
        <PermanentDrawer/>   
  </> } />
  
       </Routes>

   </Router>
 
 
   
  );
}

export default App;
