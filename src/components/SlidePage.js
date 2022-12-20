import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

export default function SlidePage(){
    return (
        <>
        <Slide>
           <img src="images/crowd4sdg.png" alt='image of donatewater team from the crowd4SDG program'></img>
        </Slide>
          <button type='submit'>Participate</button>
        </>
    )
}