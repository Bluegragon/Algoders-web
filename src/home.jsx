import ComplexGrid from './components/headimage.jsx';
import Videoplayer from './components/Video';
import FullWidthGrid from './components/objective';
import Mentor from './components/mentor';
import Appstore from './components/downloadapp';
import { Downbar } from './components/downbar';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Home = () => {
     useEffect(() => {
          Aos.init({duration:2500})
     }, [])
     return ( <div>
          <div data-Aos='fade-up'> <ComplexGrid/></div>
          <div data-Aos='fade-up'> <Videoplayer/></div>
          <div data-Aos='fade-up'> <FullWidthGrid/></div>
          <div data-Aos='fade-right'> <Mentor/></div>
          <div data-Aos='fade-down'> <Appstore/></div>
          <div data-Aos='fade-down'> <Downbar/></div>
     </div> );
}
 
export default Home;