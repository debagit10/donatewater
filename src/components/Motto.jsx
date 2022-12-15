export default function Motto(){
    return (
        <>
            <div className="relative flex justify-center">
                <img 
                  className="sm:w-[374px] h-[208px] "
                  src="images/front-img.png" alt="main-image-for-motto"

                  />
                <div className="absolute top-1 mt-8 w-2/3 p-4 bg-sky-300 opacity-60">
                    <h1
                      className="font-bold text-xl"
                    >
                   <span className="text-[#cd0046]">Donate</span><span className="text-[#2c92d5]">Water</span></h1>
                    <p className="text-white font-bold text-xl shadow-xl">
                        Assessing Women's Vulnerability To Climate Change Effects On Natural Resources
                    </p>
                </div>
            </div>
        </>
    )
}