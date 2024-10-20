import './UberUns.scss'

const UberUns = () => {
    return (
        <section id='UberUns'>
            <div className="aboutUss flex flex-col my-10">         
                <div className=' w-screen flex  flex-col sm:flex-row'>
                  <div className='sm:w-1/2 flex pb-2 justify-center items-center'>
                    <p className='w-full sm:w-3/4 text-xs sm:text-sm text-center md:text-start px-3 md:px-0'>
                      Wir blicken auf 35 Jahre Marketing- und <br/>
                      Vertriebserfahrung zurück und mit dieser<br/>
                      unterstützen wir die kleinen und mittelständischen<br/>
                      Unternehmen im DACH-Raum. <br/><br/>
                      Wir kennen die Herausforderungen, die unser<br/> Mittelstand täglich zu meistern hat.<br/>
                      Daher unterstützen wir sowohl im <br/>
                      Marketingbereich als auch bei der Digitalisierung<br/> 
                      und Skalierung von Geschäftsmodellen, denn<br/> 
                      die Zukunft ist digital.</p>
                  </div>  
                    <div className="parallax w-full sm:w-1/2"></div>  
                </div>
                <div className=' w-screen flex'>
                    <div className="parallax hidden sm:block w-1/2"></div>
                  <div className='w-full sm:w-1/2 flex justify-center items-center'>
                    <p className='w-full sm:w-3/4 sm:pt-2 text-xs sm:text-sm text-center md:text-start px-3 md:px-0 mt-2'>
                    Unsere Unterstützung geht dabei weit über die reine Beratung hinaus.<br/> 
                    Auf Wunsch begleiten wir unsere Partner bei jedem einzelnen Schritt. <br/>
                    Praxisnahe und nachhaltige Lösungen sind uns wichtig, damit unsere Partner nicht nur kurzfristige Erfolge erzielen, sondern sich langfristig im Wettbewerb behaupten können. <br/><br/>

                    Wir glauben daran, dass echte Veränderungen durch gemeinsame Anstrengungen besser zu meistern sind. <br/>
                    Deshalb stehen wir mit Leidenschaft hinter jedem unserer Projekte. Wir freuen uns, unsere Partner auf ihrem Weg in die digitale und skalierbare Zukunft zu begleiten.<br/>
                    </p>
                  </div>
                </div>
            </div>
        </section>
    )
}

export default UberUns