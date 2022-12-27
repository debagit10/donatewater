import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

export default function SlidePage(){
    return (
        <div className="m-6 flex justify-center mt-7 flex-col md:w-1/2  ">
        <Slide >
           <img 
             className="w-[370px] h-[200px] md:w-[500px] md:h-[350px]"
             src="images/crowd4sdg.png" 
             alt='image of donatewater team from the crowd4SDG program'
             /> 
           <img 
             className="w-[370px] h-[200px]  md:w-[500px] md:h-[350px]"
             src="images/DonateWater-project.jpg"
              alt="donate water team" />
        </Slide>
         <div className='self-center mt-9'>
         <button 
           className="mb-20 mt-10 w-[138px] h-[41px] text-xl font-bold bg-[#C4C4C4] text-black"
           type='submit'>Participate
           </button>
         </div>
        </div>
    )
}