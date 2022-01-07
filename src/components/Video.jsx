import ReactPlayer from 'react-player'
import '../App.css'
const Videoplayer = () => {
     return (
     <div className='video'>
           <ReactPlayer controls url='https://www.youtube.com/watch?v=7sDY4m8KNLc' width={'80vw'} height={'70vh'}/>
           </div> );
}
 
export default Videoplayer;