import "./Calendly.scss"

const Calendly = ({ openModalWithParams }) => {

  const handleOpenModal = () => {
    openModalWithParams(
      'Strategiegespräch',
      'Vereinbaren Sie jetzt ein unverbindliches Strategiegespräch!'
    );
  };
    
    return(
    <div>
      <div className="">
        <button className="block animate-pulse calendly-hover p-2" onClick={handleOpenModal}>
          hier klicken
        </button>
      </div>
    </div>
        )
    
}

export default Calendly