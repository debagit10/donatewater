

export default function Footer(){
    return (
        <footer className="sm:w-screen w-full  bg-[#22879e] h-40   ">
         <div className="flex flex-row flex-wrap  justify-center content-center w-full  bg-white  m-auto p-12  items-center">
               <div className="ml-3 mr-4 sm:mr-8 text-black text-xs font-medium sm:font-bold  sm:text-xl sm:w-16 w-5 items-center ">
                    <span 
                        className="ml-2 p-2 h-3 items-center shadow-2xl mb-6 rounded-full "
                        >
                         &#x2201;
                    </span>
                    <span className="ml-1  "
                        >
                        2023
                    </span>
                   
                </div>
                 <img 
                    className=" ml-8 shadow-md sm:w-12 w-14 mr-5  lg:w-28 bg-cover md:w-8 rounded-lg sm:mr-5"
                    src="images/DonateWater-logo.jpg" 
                    alt="donate water logo"
                 />
                    <small className=" text-xs sm:text-sm flex-1 sm:w-5 w-2 mb-5 mr-5 font-thin sm:font-mono h-20 sm:h-4">
                      Supported by Crowd4SDG, CERN, UNITAR, UNIGE
                    </small>
                    {/* <img className="mx-3 md:w-14 sm:w-10 w-6 shadow-md bg-cover" src="images/unicef_logo.png" alt="unicef logo"/> */}
                    <img className="mr-3 ml-10 md:w-24 sm:w-10 w-12 shadow-md bg-cover" src="images/UN_logo.png" alt="UN logo"/>
                    <img className="mx-3 sm:mr-8 mr-5 sm:w-20 w-12 shadow-md" src="images/waid.png" alt="WAID logo"/>
            
         </div>
                
        </footer>
    )
}