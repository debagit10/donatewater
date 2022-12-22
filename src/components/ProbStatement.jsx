export default function ProbStatement(){
    return (
        <>
         <div className="flex flex-col  justify-center md:items-center mt-4">
              <p 
                  className="font-normal text-sm w-80 md:text-md md:font-bold" 
                  id="problem-statement">
                   Over 70% of households in rural communities do not have access to improved water supply.
                    They rely solely on self-water supply (free source) such as rivers, perennial streams, 
                    water ponds and unprotected wells which is susceptible to water borne diseases.
                </p>
                <small className="self-end mb-7 md:items-center">
                   <a href="#">SOURCE: journal of water resource and protection</a>
                   </small>
                </div>
        </>
    )
}
