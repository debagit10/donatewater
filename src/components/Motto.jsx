export default function Motto(){
    return (
        <>
            <div className="relative w-screen mt-0 ">
                <img 
                  className=" h-[208px]  md:bg-cover w-screen  md:h-1/2 "
                  src="images/front-img.png" alt="main-image-for-motto"

                  />
               <div className="absolute md:w-1/2 md:h-1/3    md:mt-15 sm:w-2/3   bottom-0 left-0  p-7 " id="md-img">
                    <h1
                      className="font-bold text-xl"
                    >
                     <img 
                                className="self-center w-1/2 lg:w-56 sm:w-2/4 rounded-lg m-3 "
                                src="images/DonateWater-logo.jpg" alt="donate water logo"
                            /></h1>
                    <p className="text-slate-50  text-xl font-semibold" id="dw-p">
                        Assessing Women's Vulnerability To Climate Change Effects On Natural Resources
                    </p>
                </div>
              
            </div>
        </>
    )
}