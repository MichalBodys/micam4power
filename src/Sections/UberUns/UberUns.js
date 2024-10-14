import './UberUns.scss'

const UberUns = () => {
    return (
        <section id='UberUns'>
            <div className="aboutUss flex flex-col my-10">         
                <div className=' w-screen flex  flex-col sm:flex-row'>
                  <div className='sm:w-1/2 flex pb-2 justify-center items-center'>
                    <p className='w-full sm:w-3/4 text-xs sm:text-sm'>Wir blicken auf 35 Jahre Marketing- und Vertriebserfahrung zurück und mit dieser unterstützen wir die kleinen und mittelständischen Unternehmen im DACH-Raum.
                    <br/><br/>
                    Wir kennen die Herausforderungen, die unser Mittelstand täglich zu meistern hat, daher unterstützen wir sowohl im Marketing als auch bei der Digitalisierung und Skalierung von Geschäftsmodellen, denn die Zukunft ist digital.</p>
                  </div>  
                    <div className="parallax w-full sm:w-1/2"></div>  
                </div>
                <div className=' w-screen flex'>
                    <div className="parallax hidden sm:block w-1/2"></div>
                  <div className='w-full sm:w-1/2 flex justify-center items-center'>
                    <p className='w-full sm:w-3/4 sm:pt-2 text-xs sm:text-sm'>Unsere Unterstützung geht dabei weit über die reine Beratung hinaus. Wir begleiten unsere Kunden, auf Wunsch, bei jedem einzelnen Schritt. Praxisnahe und nachhaltige Lösungen praxisnah sind uns wichtig, damit unsere Partner nicht nur kurzfristige Erfolge erzielen, sondern sich langfristig im Wettbewerb behaupten können.
                    <br/><br/>
                    Wir glauben daran, dass echte Veränderungen nur durch gemeinsame Anstrengungen zu meistern sind. Deshalb stehen wir leidenschaftlich hinter jedem Projekt. Wir freuen uns, unsere Partner auf ihrem Weg in die digitale und skalierbare Zukunft zu begleiten.</p>
                  </div>
                </div>
            </div>
        </section>
    )
}

export default UberUns