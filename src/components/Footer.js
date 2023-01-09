

export default function Footer(){
    return (
        <footer className="w-screen  flex-1 bg-[#22879e] h-20 flex flex-row justify-evenly p-7 items-center">
            <div className=" sm:mr-5 mr-auto text-white font-bold text-xl  items-center ">
                    <span 
                        className="w-6 p-2 h-3 items-center shadow-2xl mb-6 rounded-full ">C</span>
                    <span className="ml-1 ">2022</span>
                   
            </div>
            <img 
                    className="mx-auto ml-2 shadow-md w-32 lg:w-28 bg-cover sm:w-3/5 rounded-lg sm:mr-5"
                    src="images/DonateWater-logo.jpg" alt="donate water logo"
                    />
            
                    <img className="mx-1 md:w-14 w-10 bg-cover" src="images/unicef_logo.png" alt="unicef logo"/>
                    <img className="mx-1 md:w-20 w-10 bg-cover" src="images/UN_logo.png" alt="UN logo"/>
                    <img className="mx-1 mr-5" src="images/waid-img.jpg" alt="WAID logo"/>
            
                
        </footer>
    )
}