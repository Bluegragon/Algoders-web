import ComplexGrid from './headimage.jsx';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Videoplayer from './Video.jsx';
import Mentor from './mentor.jsx';
import Appstore from './downloadapp.jsx';
import Downbar from './downbar';
import FullWidthGrid from './objective.jsx';
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