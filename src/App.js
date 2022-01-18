
import './App.css';
import ResponsiveAppBar from './components/navbar.jsx'
import 'react-router-dom';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/home/home';
import SignUpform from './components/signup/signupdrawer';
import Profile from './components/profile/profile';

import Applytomentor from './components/applytomentor';
import PermanentDrawer from './components/blog/sidebar';

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
  
     
       <Route path="/application" element={<> 
        <ResponsiveAppBar/>
        <Applytomentor/>   
  </> } />
  
       </Routes>

   </Router>
 
 
   
  );
}

export default App;
