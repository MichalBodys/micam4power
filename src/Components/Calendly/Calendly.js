import "./Calendly.scss"

const Calendly = ({ openModalWithParams }) => {

  const handleOpenModal = () => {
    openModalWithParams(
      'Strategiegespräch',
      'Vereinbaren Sie jetzt ein unverbindliches Strategiegespräch!'
    );
  };
    
    return(
    <div className="calendly">
      <div>
        <button className="block animate-pulse calendly-hover p-2" onClick={handleOpenModal}>
         Termin Buchen
        </button>
      </div>
    </div>
        )
    
}

export default Calendly