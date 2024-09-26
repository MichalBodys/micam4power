import "./Calendly.scss"

const Calendly = () => {
    
    return(
    <div className="fixed bottom-[0px] w-full z-40 text-center">
      <div className="backdrop-blur-md py-1 group">
        <span className="block animate-bounce calendly-hover text-lg font-bold z-50 cursor-pointer glowing-text">
          umów się
        </span>
        <div className="calendly-link group-hover:h-[30px] backdrop-blur-md text-lg px-2 glowing-text">
            vereinbaren sie jetzt ein unverbindliches strategiegespräch!
        </div>
      </div>
    </div>
        )
    
}

export default Calendly