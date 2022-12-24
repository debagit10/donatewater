export default function ProbStatement(){
    return (
        <>
         <div className="flex md:flex-row sm:flex-col flex-wrap justify-center md:items-center mb-7 mt-7">
              <p 
                  className="font-normal text-sm w-80 md:text-md m-4" 
                  id="problem-statement">
                   Over 70% of households in rural communities do not have access to improved water supply.
                    They rely solely on self-water supply (free source) such as rivers, perennial streams, 
                    water ponds and unprotected wells which is susceptible to water borne diseases.
                
                <small className="self-end mb-7 md:items-center text-red-900">
                   <a href="#">SOURCE: journal of water resource and protection</a>
                </small>
                </p>
                <div className="w-1/4">
                    <h3 className="font-bold">vision</h3>
                    <p className="m-4">
                        To ensure that clean water is accessible in every rural community in Nigeria,
                        we aim to eliminate the need for people, especially women and children, to travel
                        long distances in search of water and bear the burden of surviving the impacts of climate change in Nigeria and West Africa.
                    </p>
                </div>
                <div className="w-1/4">
                    <h3 className="font-bold">Mission</h3>
                    <p className="m-4">
                        Our goal is to bridge the gap between communities, individuals, 
                        and government and local and international agencies in order to improve access to water resources.
                        By using data, statistics, and human and citizen science, we hope to help excluded populations overcome the impacts and effects of climate change and gender exclusion. 
                        We will focus on tailoring water projects to the communities that are most in need and work towards a future where everyone has equal access to clean water.
                     </p>
                </div>
            </div>
        </>
    )
}
