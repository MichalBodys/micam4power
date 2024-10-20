import './UberUns.scss'

const UberUns = () => {
    return (
        <section id='UberUns'>
            <div className="aboutUss flex flex-col my-10">         
                <div className=' w-screen flex  flex-col sm:flex-row'>
                  <div className='sm:w-1/2 flex pb-2 justify-center items-center'>
                    <p className='w-full sm:w-3/4 text-xs sm:text-sm text-center md:text-start px-5 md:px-0'>Wir blicken auf 35 Jahre Marketing- und <br/>
                     Vertriebserfahrung zurück und mit dieser unterstützen wir <br/> die kleinen und mittelständischen Unternehmen im<br/><br/>DACH-Raum.Wir kennen die Herausforderungen, die unser Mittelstand<br/> täglich zu meistern hat. Daher unterstützen wir sowohl im <br/>Marketingbereich als auch bei der Digitalisierung und<br/> Skalierung von Geschäftsmodellen, denn die Zukunft ist digital.</p>
                  </div>  
                    <div className="parallax w-full sm:w-1/2"></div>  
                </div>
                <div className=' w-screen flex'>
                    <div className="parallax hidden sm:block w-1/2"></div>
                  <div className='w-full sm:w-1/2 flex justify-center items-center'>
                    <p className='w-full sm:w-3/4 sm:pt-2 text-xs sm:text-sm text-center md:text-start px-5 md:px-0 mt-2'>Unsere Unterstützung geht dabei weit über die reine Beratung<br/> hinaus. Auf Wunsch begleiten wir unsere Partner bei jedem <br/>einzelnen Schritt. Praxisnahe und nachhaltige Lösungen sind uns<br/> wichtig, damit unsere Partner nicht nur kurzfristige Erfolge<br/> erzielen, sondern sich langfristig im Wettbewerb behaupten können. <br/> <br/>
                    Wir glauben daran, dass echte Veränderungen durch <br/> gemeinsame Anstrengungen besser zu meistern sind. Deshalb <br/> stehen wir mit Leidenschaft hinter jedem unserer Projekte. Wir <br/> freuen uns, unsere Partner auf ihrem Weg in die digitale und skalierbare Zukunft zu begleiten.</p>
                  </div>
                </div>
            </div>
        </section>
    )
}

export default UberUns